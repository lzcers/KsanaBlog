// import axios from 'axios'
// import fm from 'front-matter'
// import 'core-js/shim'

// const config =  {
//   repo:  'lzcers/KsanaBlog',
//   path: 'dist/posts',
//   tags: 'dist/posts',
//   branch: 'master',
//   tk: ''
// };


// const issueUrl = `https://api.github.com/repos/${config.repo}/issues`
// const filesListUrl = `https://api.github.com/repos/${config.repo}/contents/${config.path}?ref=${config.branch}`
// const tagsListUrl = `https://api.github.com/repos/${config.repo}/contents/${config.tags}?ref=${config.branch}`
// const postUrl = `https://api.github.com/repos/${config.repo}/git/blobs/`
// const tk = ''

// const cache = {
//   get: (key: string) => {
//     if (!window.sessionStorage) return false
//     return JSON.parse(window.sessionStorage.getItem(key) || "")
//   },
//   set: (key: string, data: any) => {
//     if (!window.sessionStorage) return false
//     window.sessionStorage.setItem(key, JSON.stringify(data))
//     return true
//   },
//   has: (key: string) => {
//     return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
//   }
// }

// function getPostListFromFiles(url = filesListUrl) {
//   if (cache.has('postList')) {
//     return Promise.resolve(cache.get('postList'))
//   } else {
//     return axios.get(url, { 
//         params: {
//           access_token: atob(atob(tk))
//         }
//       })
//       .then(res => res.data)
//       .then(arr => {
//         const list = arr.map(({ name, sha, size }: any) => ({ name, sha, size })).filter((i:any) => i.size != 0)
//         cache.set('postList', list)
//         return list
//       })
//   }
// }
// function getFileBySHA(sha: string) {
//   if (cache.has(sha)) {
//     return Promise.resolve(cache.get(sha))
//   }
//   const httpParam = {
//     // https://developer.github.com/v3/media/#raw-1
//     headers: { Accept: 'application/vnd.github.v3.raw' },
//     params: {
//       access_token: atob(atob(tk))
//     }
//   }
//   return axios.get(postUrl+sha, httpParam)
//     .then(res => res.data)
//     .then(raw => {
//       cache.set(sha, raw)
//       return raw
//     })
// }
// function getPostBySHA(sha: string) {
//   return getFileBySHA(sha)
//   .then(raw => fm(raw))
// }

// function getTags() {
//   return getPostListFromFiles(tagsListUrl)
//   .then(files => files.find((i: any) => i.name == 'tags.json'))
//   .then(tags => tags == undefined ? Promise.resolve([]) : getFileBySHA(tags.sha))
// }

// // 从git ISSUES获取文章列表
// function getPostListFromIssues () {
//   if (cache.has('postList')) {
//     return new Promise(resolve => resolve(cache.get('postList')))
//   }
//   // 根据labels过滤
//   // todo: access_token: config.access_token, github会做代码扫描,token会被干掉,暂时不加这个参数
//   return axios.get(issueUrl, {params: { state: "open", labels: "post", filter: "created" }})
//     .then(res => res.data)
//     .then(arr => arr.map((i: any) => ({
//         id: i.id,
//         title: i.title,
//         date: i.created_at,
//         body: i.body
//     })))
//     .then(postList => {
//       // 保存至sessionStorage
//       cache.set('postList', postList)
//       return postList
//     })
// }

// export {
//   getPostListFromIssues,
//   getPostListFromFiles,
//   getPostBySHA,
//   getTags
// }