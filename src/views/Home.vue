<template>
  <div class="postsContainer">
    <div class="post-list">
      <li class="post-item" v-for="(item, index) in currentPagePost" :key="index">
        <router-link class="site-text-plain" :to="'/post/'+item.sha">
        {{ item.name }}
        <i class="post-list-date">{{ item.date }}</i>
        </router-link>
      </li>
      <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>
    </div>
    <div class="post-pages">
      <a @click="loadPagePosts(-1)" class="post-pages-newer site-text-plain">
        <span class="post-pages-left"></span>
        <span>Newer</span>
      </a>
      <a @click="loadPagePosts(1)" class="post-pages-older site-text-plain">
        <span>Older</span>
        <span class="post-pages-right"></span>
      </a>
    </div>
  </div>
</template>

<style>
  .post-list {
    padding: 10px 20px;
    min-width: 400px;
  }
  .post-item {
    margin: 5px 0px;
  }
  .post-pages {
    margin-top: 10px;
    padding-top: 10px;
    height: 24px;
    border-top: 1px solid #777;
  }
  .post-pages-newer {
    cursor: pointer;    
    color: #000 !important;    
    float: left;
  }
  .post-pages-older {
    cursor: pointer;    
    color: #000 !important;    
    float: right;
  }
  .post-pages-left span {
    vertical-align: middle;
  }
  .post-pages-right span {
    vertical-align: middle;
  }
  .post-pages-left {
    vertical-align: middle;
    display: inline-block;
    border: 10px solid #fff;
    border-right-color: #000;
    width: 0;
    height: 0;
  } 
   .post-pages-right {
    vertical-align: middle;
    display: inline-block;
    border: 10px solid #fff;
    border-left-color: #000;
    width: 0;
    height: 0;
  }  
  .post-list-date {
    float: right;
    margin-left: 50px;
  }
  .loading {
    width: 150px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
</style>

<script>
import { getPostListFromFiles } from '@/api';
export default {
  name: 'Home',
  data: () => ({
    postList: [],
    currentPagePost: [],
    postListRenderFlag: true,
    eachPage: 15,
    xpageNumber: 0
  }),
  computed: {
    pageNumber: {
      set: function(val) {
        val >= 0 && val <= Math.round(this.postList.length / this.eachPage) ? this.xpageNumber = val : this.xpageNumber;
      },
      get: function() {
        return this.xpageNumber;
      }
    }
  },
  methods: {
    sortPostList(postList) {
      return postList.sort((a, b) => {
        return new Date(a.date) < new Date(b.date) ? 1 : -1;
      });
    },
    loadPagePosts(number) {
      this.pageNumber += number;
      const pageNumber = this.pageNumber;
      const postList = this.postList;
      const eachPage = this.eachPage;
      this.currentPagePost = postList.slice(pageNumber * eachPage, (pageNumber * eachPage) + eachPage);
    }
  },
  created() {
    getPostListFromFiles().then(postList => {
      // 取标题中的日期然后排序
      this.postList = this.sortPostList(postList.map(i => {
        i.date = /\d{4}-\d{1,2}-\d{1,2}/.exec(i.name.trim())[0];
        i.name = i.name.trim().replace(/\d{4}-\d{1,2}-\d{1,2}#/, "").replace(".md", "")
        return i;
      }));
      this.loadPagePosts(this.pageNumber);
      this.postListRenderFlag = false;
    })
    .catch(e => console.log(e)) ;
  }
}
</script>
