<template>
    <div class="post-list">
        <li class="post-ttem" v-for="(item, index) in postList" :key="index">
          <router-link class="site-text-plain" :to="'/post/'+item.sha">{{ item.name.replace(".md", "") }}</router-link>
        </li>
        <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>  
    </div>
</template>

<style>
  .loading {
    width: 150px;
    height: 200px;
    display: block;
    margin: 0 auto;
  }
</style>

<script>
import { getPostListFromFiles } from '@/api';
export default {
  name: 'Home',
  data: () => ({
    postList: [],
    postListRenderFlag: true,
    pageNumber: 0
  }),
  computed: {
  },
  methods: {
    loadMore() {
      const eachPage = 10;
      this.pageNumber++;
      const newLoadPost = this.postList.slice(this.pageNumber * eachPage, (this.pageNumber * eachPage) + eachPage);
    }
  },
  created() {
    getPostListFromFiles().then(postList => {
      this.postList = postList;
      this.postListRenderFlag = false;
    })
    .catch(e => console.log(e)) ;
  }
}
</script>
