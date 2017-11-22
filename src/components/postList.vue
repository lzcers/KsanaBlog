<template>
  <div class="posts">
    <!-- <h3 class="post-header"><i>Posts</i></h3> -->
    <ol class="post-list">
      <li class="post-item" v-for="(item, index) in currentPagePost" :key="index">
        <router-link class="site-text-plain" :to="'/post/'+item.ID">
          <h4 class="post-list-title">{{ item.PostName }}</h4>
        </router-link>
        <div class="post-list-date"><i class="icon ion-calendar"></i> {{ item.PublishDate }}</div>
        <p closs="post-body-slice">{{ item.Conent + '……' }}</p>
      </li>
    </ol>
    <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>
    <div class="post-pages">
      <a @click="loadPagePosts(-1)" class="post-pages-newer">
        <span class="post-pages-left"></span>
        <span>Newer</span>
      </a>
      <a @click="loadPagePosts(1)" class="post-pages-older">
        <span>Older</span>
        <span class="post-pages-right"></span>
      </a>
    </div>
  </div>
</template>

<style>
  .posts {
    background: #fff;
    box-shadow: 1px 1px 3px #eee;
    padding: 10px;
  }
  .post-header {
    margin-top: 10px;
    width: 400px;
  }
  .post-list {
    list-style: none;
    padding: 0 20px;
  }
  .post-item {
    margin: 5px 0px;
    border-bottom: 1px solid #eee;
  }
  .post-list-title {
    color: #5f5f5f;
    margin-bottom: 5px;
  }
  .post-list-date {
    color: #757575;
  }
  .post-pages {
    overflow: hidden;
    padding: 0 20px; 
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
  .loading {
    width: 150px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
</style>

<script lang="ts">
import Vue from 'vue' 
import { getPosts } from '../api'

interface Post {
  ID: string,
  Tags: string[],
  PostName: string,
  Content: string,
  PublishDate: string,
  LastUpdate: string
}

interface Data {
  constPostList: Post[],
  postList: Post[],
  tagList: any,
  currentPagePost: Post[],
  postListRenderFlag: boolean,
  eachPage: number,
  xpageNumber: number
}

export default Vue.extend({
  data: (): Data => ({
    constPostList: [],
    postList: [],
    tagList: {},
    currentPagePost: [],
    postListRenderFlag: true,
    eachPage: 11,
    xpageNumber: 0
  }),
  computed: {
    pageNumber: {
      set: function(val: number) {
        val >= 0 && val <= Math.floor(this.postList.length / this.eachPage) ? this.xpageNumber = val : this.xpageNumber
      },
      get: function(): number {
        return this.xpageNumber
      }
    }
  },
  watch: {
    $route: function(to, from) {
      const tagName = to.params.tagName
      if (tagName != undefined) {
        const tag = this.tagList[tagName]
        this.postList = this.constPostList.filter((i: Post) => tag.find((p: any) => p.PostName == i.PostName) != undefined ? true : false)
      } else {
        this.postList = this.constPostList
      }
      this.pageNumber = 0     
      this.loadPagePosts(this.pageNumber)
    }
  },
  methods: {
    sortPostList(postList: Post[]): Post[] {
      return postList.sort((a, b) => {
        return new Date(a.PublishDate) < new Date(b.PublishDate) ? 1 : -1
      })
    },
    loadPagePosts(number: number) {
      this.pageNumber += number
      const pageNumber = this.pageNumber
      const eachPage = this.eachPage
      this.currentPagePost = this.postList.slice(pageNumber * eachPage, (pageNumber * eachPage) + eachPage)
    }
  },
  created() {
    getPosts().then((list: Post[]) => {
      debugger;
      this.postList = list
      this.postListRenderFlag = true
    })
  }  
})
</script>