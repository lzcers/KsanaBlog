<template>
  <section class="post-view">
    <article v-html="markedownResult"></article>
  </section>
</template>

<style>
   .post-title {
    margin-top: 0;
  } 
  .post-view {
    margin-bottom: 20px;
    width: 600px;
    padding: 0 15px 15px 15px;
    border: 1px solid #eee;
  }
  .post-view img{
    max-width: 400px;
    max-height: 400px; 
  }
</style>

<script>
import marked from '@/utils/render.js';
import testmd from '@/assets/test.md';
import 'highlight.js/styles/Tomorrow.css';

export default {
  name: 'postList',
  computed: {
    markedownResult() {
      return marked(testmd);
    }
  }
}
</script>
