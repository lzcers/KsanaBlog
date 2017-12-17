// serviceWorker 生命周期方法
this.addEventListener('install', evt => {
  // 等到 waitUntil 里面的 Promise 完成之前安装完成
  evt.waitUntil(
    caches.open('cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/vue.build.js',
        '/hilight.build.js',
        '/marked.build.js',
        '/coreJs.build.js'
      ])
    })
  )
  // 安装前跳过等待直接进入 activate 阶段
  evt.waitUntil(this.skipWaiting())
})

this.addEventListener('activate', evt => {
  evt.waitUntil(Promise.all[
    // 更新所有客户端
    this.clients.claim(),
    // 清理旧版缓存
    caches.keys().then(cacheList => {
      return Promise.all(cacheList.map(cacheName => {
        if (cacheName) {
          return caches.delete(cacheName)
        }
      }))
    })
  ])
})
// 激活后劫持所有网络资源请求
this.addEventListener('fetch', evt => {
  evt.respondWith(
    caches.match(evt.request).then(response => {
      // 如果 service worker 有返回就直接返回，减少一次请求
      if (response) return response
      return fetch(evt.request)
    })
  )
})