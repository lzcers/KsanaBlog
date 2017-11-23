import axios from 'axios'
import 'core-js/shim'

const tagsUrl = '/api/tags/get'
const postsUrl = '/api/post/get/'
const postsByTagUrl = '/api/post/getByTag/'
const postAddUrl = '/api/post/add'
const updatePostByIDUrl = '/api/post/update/'

interface Post {
  ID?: string,
  Title: string,
  Tags: string[],
  Content: string,
  PublishDate?: string,
  LastUpdate?: string,
}

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
  return axios.get(postsUrl + id)
  .then(res => res.data[0])
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

function addPost(p: Post) {
  return axios.post('/api/post/add', p)
}
function updatePostByID(id: string, p: Post) {
  return axios.post(updatePostByIDUrl + id, p)
}
export {
  addPost,
  updatePostByID,
  getPosts,
  getPostsByTag,
  getPostByID,
  getTags
}

export default {
  addPost,
  updatePostByID,
  getPosts,
  getPostsByTag,
  getPostByID,
  getTags
}