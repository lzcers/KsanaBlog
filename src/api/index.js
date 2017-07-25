import axios from 'axios';
import config from './config.js';
  import fm from 'front-matter';

const issueUrl = `https://api.github.com/repos/${config.repo}/issues`;
const filesListUrl = `https://api.github.com/repos/${config.repo}/contents/${config.path}?ref=${config.branch}`;
const postUrl = `https://api.github.com/repos/${config.repo}/git/blobs/`;
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


function getPostListFromFiles() {
  if (cache.has('postList')) {
    return Promise.resolve(cache.get('postList'))
  } else {
    return axios.get(filesListUrl)
      .then(res => res.data)
      .then(arr => {
        const list = arr.map(({ name, sha }) => ({ name, sha }));
        return list
      })
  }
}

function getPostBySHA(sha) {
  if (cache.has(sha)) {
    return Promise.resolve(cache.get(sha))
  }
  const httpParam = {
    // https://developer.github.com/v3/media/#raw-1
    headers: { Accept: 'application/vnd.github.v3.raw' }
  }
  return axios.get(postUrl+sha, httpParam)
    .then(res => res.data)
    .then(raw => fm(raw))
    .then(content => {
      console.log(content);
      cache.set(sha, content);
      return content;
    }); 
}


// 从git ISSUES获取文章列表
function getPostListFromIssues () {
  if (cache.has('postList')) {
    return new Promise(resolve => resolve(cache.get('postList')));
  }
  // 根据labels过滤
  // todo: access_token: config.access_token, github会做代码扫描,token会被干掉,暂时不加这个参数
  return axios.get(issueUrl, {params: { state: "open", labels: "post", filter: "created" }})
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
  getPostListFromIssues,
  getPostListFromFiles,
  getPostBySHA
};