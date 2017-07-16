<template>
  <section class="flex-left">
    <div class="timeline">
      <a class="ci"></a>
      <div class="date">{{new Date(date).toLocaleDateString()}}</div>
    </div>
    <article class="post-view" v-html="markedownResult"></article>
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
  .timeline {
    position: relative;
    right: 100px;
    border: 1px solid #777;
  }
  .timeline .ci {
    width: 10px;
    height: 10px;
    position: absolute;
    right: -5px;
    top: 5px;
    border-radius: 50%;
    background: #777;
    border: 2px solid #777;
  }
    .timeline .ci:hover {
      background: #005cc5;
      border: 2px solid #005cc5;
    }
  .timeline .date {
    position: absolute;
    left: 10px;
    top: -2px; 
  }
</style>

<script>
import marked from '@/utils/render.js';
import 'highlight.js/styles/Tomorrow.css';

export default {
  name: 'postList',
  props: ["date", "title", "body"],
  computed: {
    markedownResult() {
      return marked(this.body);
    }
  }
}
</script>
