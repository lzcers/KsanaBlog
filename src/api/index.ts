import axios from 'axios'
import 'core-js/shim'

const tagsUrl = '/api/tags/get'
const postsUrl = '/api/post/get/'
const postsByTagUrl = '/api/post/getByTag/'

const cache = {
  get: (key: string) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key) || "")
  },
  set: (key: string, data: any) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key: string) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}

function getPosts() {
  if (cache.has('postList')) {
    return Promise.resolve(cache.get('postList'))
  } else {
    return axios.get(postsUrl)
      .then(res => res.data)
      .then(arr => {
        cache.set('postList', arr)
        return arr
      })
  }
}

function getPostByID(id: string) {
  if (cache.has(id)) {
    return Promise.resolve(cache.get(id))
  }
  return axios.get(postsUrl + 'id')
  .then(res => res.data)
  .then(raw => {
    cache.set(id, raw)
    return raw
  })
}

function getPostsByTag(tag: string) {
  return axios.get(postsByTagUrl + tag)
  .then(res => res.data)
  .then(raw => {
    cache.set(tag, raw)
    return raw
  })
}


function getTags() {
  return axios.get(tagsUrl)
  .then(res => res.data)
  .then(data => data.Tags)
}

export {
  getPosts,
  getPostsByTag,
  getPostByID,
  getTags
}
export default {
  getPosts,
  getPostsByTag,
  getPostByID,
  getTags
}