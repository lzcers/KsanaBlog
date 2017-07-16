<template>
  <div class="post-list">
      <post></post>
      <post></post>
      <post></post>
      <post></post>
      <post></post>
      <post></post>
  </div>
</template>
<script>
import post from '@/components/post.vue';
export default {
  name: 'postList',
  components: {
    post
  }
}
</script>
