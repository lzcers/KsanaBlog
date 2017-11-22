<template>
  <section class="post-container">
    <article class="post-view" v-if="post">
      <h3 class="post-title flex-center">{{ post.Title }}</h3>
      <a class="post-date flex-center">{{ post.PublishDate }}</a>
      <div class="post-body" v-html="markedownResult">
      </div>
    </article> 
      <!-- <img src="../assets/loading.gif" class="loading" v-if="!post" ></img>   -->
  </section>
</template>

<style>
  .post-container {
    color: #333;
    width: 100%;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px #eee;
    padding: 30px;
  }
  .post-title {
    margin-top: 5px;
    margin-bottom: 5px;
  } 
  a.post-date {
    color: #777;
    text-decoration: none;
    font-weight: normal;
  }
  .post-body {
    max-width: 100%;
    margin-top: 5px
  } 
  .post-body img {
    max-width: 100%;
    display: block;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { getPostByID } from '../api'
import marked from '../utils/render'
import 'highlight.js/styles/tomorrow.css'

interface Post {
  ID: string,
  Tags: string[],
  Title: string,
  Content: string,
  PublishDate: string,
  LastUpdate: string
}

export default Vue.extend({
  name: 'Post',
  data: (): {post: Post | null} => ({
    post: null
  }),
  computed: {
    markedownResult(): string {
      return this.post != null ? marked(this.post.Content).html : ""
    }
  },
  methods: {
    loadPost(id: string) {
      return getPostByID(id).then((post: Post) => post)
    }
  },
  created() {
    this.loadPost(this.$route.params.id)
    .then((post: Post) => this.post = post)
    .catch((e: Error) => console.log(e))
  }
})
</script>
