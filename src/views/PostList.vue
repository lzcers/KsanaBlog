<template>
  <div class="container post-list">
      <post  v-for="(post, index) in postList" :key="index" :date="post.date" :title="post.title" :body="post.body"></post>
  </div>
</template>
<script>
import post from '@/components/post.vue';
import {getPostList} from '@/api';
export default {
  name: 'postList',
  components: {
    post
  },
  data: () => ({
    postList: []
  }),
  created() {
    getPostList().then(result => this.postList = result);
  }
}
</script>
