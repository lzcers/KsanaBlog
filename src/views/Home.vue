<template>
  <div class="postsContainer">
    <tags-bar></tags-bar>
    <post-list></post-list>
  </div>
</template>

<style>
  .postsContainer {
    padding-top: 20px;
    width: 50%;
  }
</style>

<script>
import postList from '../components/postList.vue';
import tagsBar from '../components/tagsBar.vue';
export default {
  name: 'Home',
  components: {
    postList,
    tagsBar
  }
}
</script>
