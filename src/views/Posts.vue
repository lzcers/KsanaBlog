<template>
  <div class="postsContainer">
    <tags-bar></tags-bar>
    <post-list></post-list>
  </div>
</template>

<style>
  .postsContainer {
    color: #333;
    width: 100%;
  }
</style>

<script>
import Vue from 'vue'
import postList from '../components/postList.vue'
import tagsBar from '../components/tagsBar.vue'
export default Vue.extend({
  name: 'Home',
  components: {
    postList,
    tagsBar
  }
})
</script>
