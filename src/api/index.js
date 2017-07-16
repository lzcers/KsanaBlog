import axios from 'axios';
import config from './config.js';

const issueUrl = `https://api.github.com/repos/${config.repo}/issues`;

const cache = {
  get: (key) => {
    if (!window.sessionStorage) return false
    return JSON.parse(window.sessionStorage.getItem(key))
  },
  set: (key, data) => {
    if (!window.sessionStorage) return false
    window.sessionStorage.setItem(key, JSON.stringify(data))
    return true
  },
  has: (key) => {
    return Boolean(window.sessionStorage && window.sessionStorage.hasOwnProperty(key))
  }
}

function getPostList () {
  if (cache.has('postList')) {
    return new Promise(resolve => resolve(cache.get('postList')));
  }
  // 根据labels过滤
  return axios.get(issueUrl, {params: {access_token: config.access_token, state: "open", labels: "post", filter: "created"}})
    .then(res => res.data)
    .then(arr => arr.map(i => ({
        id: i.id,
        title: i.title,
        date: i.created_at,
        body: i.body
    })))
    .then(postList => {
      // 保存至sessionStorage
      cache.set('postList', postList);
      return postList;
    })
}

export {
  getPostList
};