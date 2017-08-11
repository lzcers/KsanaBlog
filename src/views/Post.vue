<template>
  <transition name="slide-fade">
    <section class="flex-center container">
      <article class="post-view" v-if="post">
        <h3 class="post-title">{{ post.title }}</h3>
        <a class="post-date show-on-mobile">{{ post.date }}</a>
        <div class="post-body" v-html="markedownResult">
        </div>
      </article> 
        <img src="../assets/loading.gif" class="loading" v-if="!post" ></img>  
    </section>
  </transition>
</template>

<style>
  .post-title {
    margin-top: 5px;
  } 
  a.post-date {
    color: #777;
    text-decoration: none;
    font-weight: normal;
  }
  .post-body p{
    margin-top: 5px;
  } 
  .post-view {
    margin-bottom: 20px;
    width: 100%;
    padding: 0 15px 15px 15px;
    border: 1px solid #eee;
  }
  .post-view img{
    display: block;
  }
</style>

<script>
import { getPostBySHA } from '@/api';
import marked from '@/utils/render.js';
import 'highlight.js/styles/Tomorrow.css';

export default {
  name: 'Post',
  data: () => ({
    post: undefined
  }),
  computed: {
    markedownResult() {
      return marked(this.post.body);
    }
  },
  methods: {
    loadPost(sha) {
      return getPostBySHA(sha).then(({attributes, body}) => ({
        title: attributes.Title,
        date: attributes.Date,
        body: body
      }));
    }
  },
  created() {
    this.loadPost(this.$route.params.sha)
    .then(post => this.post = post)
    .catch(e => console.log(e));
  }
}
</script>
