<template>
    <div class="container post-list">
        <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>  
        <post v-for="(post, index) in postList" :key="index" :date="post.date" :title="post.title" :body="post.body"></post>   
    </div>
</template>

<style>
  .loading {
    width: 150px;
    display: block;
    margin: 0 auto;
  }
</style>

<script>
import post from '@/components/post.vue';
import {getPostList} from '@/api';
export default {
  name: 'postList',
  components: {
    post
  },
  data: () => ({
    postList: [],
    postListRenderFlag: true
  }),
  created() {
    getPostList().then(result => {
      this.postList = result;
      this.postListRenderFlag =  false;
    });
  }
}
</script>
