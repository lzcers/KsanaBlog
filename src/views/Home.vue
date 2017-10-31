<template>
  <div class="postsContainer">
    <tags-bar></tags-bar>  
    <post-list></post-list>
  </div>
</template>

<style>

</style>

<script>
import tagsBar from '../components/tagsBar.vue';
import postList from '../components/postList.vue';
export default {
  name: 'Home',
  components: {
    tagsBar,
    postList
  }
}
</script>
