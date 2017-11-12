<template>
  <div class="posts">
    <!-- <h3 class="post-header"><i>Posts</i></h3> -->
    <ol class="post-list">
      <li class="post-item" v-for="(item, index) in currentPagePost" :key="index">
        <router-link class="site-text-plain" :to="'/post/'+item.sha">
          <h3>{{ item.name }}</h3>
        </router-link>
        <p closs="post-body-slice">{{ item.slice }}</p>
        <p class="post-list-date">{{ item.date }}</p>
      </li>
    </ol>
    <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>
    <div class="post-pages">
      <div class="post-pages-line"></div>
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
    border: 1px solid #eee;
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
  }
  .post-list-date {
  }
  .post-pages {
    overflow: hidden;
    padding: 0 20px; 
  }
  .post-pages-line {
    margin: 10px 0;
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
  .loading {
    width: 150px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
</style>

<script lang="ts">
import Vue from 'vue' 
import { getPostListFromFiles, getTags } from '../api'

interface Post {
  name: string,
  date: string,
  sha: string,
  slice: string
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
    eachPage: 20,
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
        this.postList = this.constPostList.filter((i: Post) => tag.find((p: any) => p.name == i.name) != undefined ? true : false)
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
        return new Date(a.date) < new Date(b.date) ? 1 : -1
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
    getPostListFromFiles().then((postList: Post[]) => {
      // 取标题中的日期然后排序
      this.postList = this.sortPostList(postList.filter(i => i.name != "tags.json").map(i => {
        const matchDate = /\d{4}-\d{1,2}-\d{1,2}/.exec(i.name.trim())
        i.date = matchDate == null ? "" : matchDate[0]
        i.name = i.name.trim().replace(/\d{4}-\d{1,2}-\d{1,2}#/, "").replace(".md", "")
        i.slice = ""
        return i
      }))
      this.constPostList = this.postList
      getTags().then(tagList => {
        this.tagList = tagList;
        this.postList.map(i => {
          for (const tagName of Object.keys(tagList)) {
            let findFlag = false
            if (findFlag) break
            for (const p of tagList[tagName]) {
              if (p.name == i.name) {
                i.slice = p.slice
                findFlag = true
                break
              }
            }
          }
        })
        const tagName = this.$route.params.tagName
        if (tagName) {
          const tag = tagList[tagName].map((p: any) => p.name.trim().replace(/\d{4}-\d{1,2}-\d{1,2}#/, ""))
          this.postList = this.constPostList.filter((i: Post) => tag.find((p: any) => p.name == i.name) != undefined ? true : false)
        }
      });
      this.loadPagePosts(this.pageNumber)
      this.postListRenderFlag = false
    })
    .catch(e => console.log(e))
  }  
})
</script>