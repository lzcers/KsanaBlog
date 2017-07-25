<template>
  <transition name="slide-fade">
    <section class="flex-center">
      <div class="timeline hide-on-mobile">
        <a class="ci"></a>
        <div class="date">{{ date }}</div>
      </div> 
      <article class="post-view">
        <h3 class="post-title">{{ title }}</h3>
        <a class="post-date show-on-mobile">{{ date }}</a>
        <div class="post-body" v-html="markedownResult">
        </div>
      </article>
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
    width: 500px;
    padding: 0 15px 15px 15px;
    border: 1px solid #eee;
  }
  .post-view img{
    display: block;
  }
  .timeline {
    position: relative;
    right: 90px;
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
.slide-fade-enter-active {
  transition: all .5s ease;
}
.slide-fade-leave-active {
  transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active for <2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

<script>
import marked from '@/utils/render.js';
import 'highlight.js/styles/Tomorrow.css';

export default {
  name: 'postList',
  props: ["date", "title", "body"],
  data: () => ({

  }),
  computed: {
    markedownResult() {
      return marked(this.body);
    }
  }
}
</script>
