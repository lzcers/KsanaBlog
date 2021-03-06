import axios from 'axios'
import './errorHandler'

import 'core-js/shim'

const tagsUrl = '/api/tags/get'
const postsUrl = '/api/post/get/'
const postsByTagUrl = '/api/post/getByTag/'
const postAddUrl = '/api/post/add'
const updatePostByIDUrl = '/api/post/update/'
const loginUrl = '/api/login'
const authorizationCheckUrl = '/api/authorizationCheck'

interface Post {
  ID?: string;
  Title: string;
  Tags: string[];
  Content: string;
  PublishDate?: string;
  LastUpdate?: string;
  Published?: boolean;
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
  if (cache.has("postByTag" + tag)) {
    return Promise.resolve(cache.get("postByTag" + tag))
  }
  return axios.get(postsByTagUrl + tag)
  .then(res => res.data)
  .then(raw => {
    cache.set("postByTag" + tag, raw)
    return raw
  })
}
function login(userinfo: {username: string, password: string}) {
  return axios.post(loginUrl, userinfo)
}
function authorizationCheck() {
  return axios.get(authorizationCheckUrl)
}

function getTags() {
  if (cache.has("tags")) {
    return Promise.resolve(cache.get("tags"))
  }
  return axios.get(tagsUrl)
  .then(res => res.data)
  .then(data => {
    cache.set("tags", data.Tags)
    return data.Tags
  })
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
  getTags,
  login,
  authorizationCheck
}

export default {
  addPost,
  updatePostByID,
  getPosts,
  getPostsByTag,
  getPostByID,
  getTags,
  login,
  authorizationCheck
}