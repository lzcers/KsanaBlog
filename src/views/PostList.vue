<template>
    <div class="container post-list">
        <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>  
        <post v-for="(post, index) in sortPostList" :key="index" :date="post.date" :title="post.title" :body="post.body"></post>   
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
import {getPostListFromFiles,  getPostBySHA} from '@/api';
export default {
  name: 'postList',
  components: {
    post
  },
  data: () => ({
    postList: [],
    postListRenderFlag: true
  }),
  computed: {
    sortPostList() {
      let sortList = this.postList.sort((a, b) => {
        console.log(a);
        return new Date(a.date) < new Date(b.date) ? 1 : -1;
      });
      return sortList;
    }
  },
  created() {
    getPostListFromFiles().then(postList => {
      Promise.all(postList.map(p => {
        return getPostBySHA(p.sha).then(({attributes, body}) => {
          const post = {
            title: attributes.Title,
            date: attributes.Date,
            body: body
          };
          this.postList.push(post);
          return post;
        });
      })).then(result => {
        this.postListRenderFlag = false;
      });
    });

  }
}
</script>
