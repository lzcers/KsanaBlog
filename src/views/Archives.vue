<template>
  <div class="archives">
    <ul class="archives-tags">
      <li>
        <a @click="getPostsListByTtag('all')">全部</a>
      </li>
      <li v-for="tag in tags" :key="tag">
        <a @click="getPostsListByTtag(tag)">{{ tag }}</a>
      </li>
    </ul>
    <ol class="archives-date">
      <li v-for="(post, index) in postList" :key="post.ID">
        <router-link class="site-text-plain" :to="'/post/'+post.ID">
          <span>{{ index + 1 + '. ' + post.Title }}</span>
          <span>{{ new Date(post.PublishDate).toLocaleDateString("en-US") }}</span>
        </router-link>
      </li>
    </ol>
  </div>
</template>

<style lang="less">
  .archives {
    margin-top: 20px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px #eee;
    padding: 0 5%;
    @media screen and (min-device-width: 1280px) {
      width: 80%;
    }
    @media screen and (max-device-width: 1280px) {
      width: 100%;
    }
    &-tags {
      display: flex;
      padding-left: 0px;
      list-style: none;
      padding-bottom: 10px; 
      border-bottom: 1px solid #ccc;
    }
    &-tags li {
      cursor: pointer;
      padding-right: 10px;
    }
    &-date {
      padding-left: 0;
      li {
        line-height: 30px;
        list-style: none;       
      }
      a {
        display: flex;
        justify-content: space-between;        
      }
      span {
        display: inline-block;
      }
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { getPosts, getTags, getPostsByTag } from '../api'
interface Post {
  ID: string;
  Title: string;
  Tags: string[];
  Content: string;
  PublishDate: string;
  LastUpdate: string;
}
interface Data {
  allPostList: Post[];
  postList: Post[];
  tags: string[];
}
export default Vue.extend({
  data: (): Data => ({
    allPostList: [],
    postList: [],
    tags: []
  }),
  methods: {
    sortPostList(postList: Post[]): Post[] {
      if (postList == null) throw "postlist is null!"
      return postList.sort((a, b) => {
        return new Date(a.PublishDate) < new Date(b.PublishDate) ? 1 : -1
      })
    },
    getPostsListByTtag(tag: string) {
      if (tag == 'all') this.postList = this.allPostList
      getPostsByTag(tag)
      .then((posts: any) => {
        this.postList = this.sortPostList(posts)
      })
    }
  },
  created() {
    getPosts()
    .then((posts: Post[]) => this.sortPostList(posts))
    .then((list: Post[]) => {
      this.allPostList = list
      this.postList = list
    })
    getTags().then(tags => this.tags = tags).catch(e => console.log(e))
  }
})
</script>
