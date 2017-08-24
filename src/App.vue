<template>
  <div class="root-wrap">
        <headerBar></headerBar> 
        <tags-bar></tags-bar>  
        <div class="flex-center">
          <h3 class="posts-title">Posts</h3>
        </div>
          <div class="main-wrap flex-center">
            <router-view></router-view>
          </div>  
       <footerBar></footerBar> 
  </div>
</template>

<style>
  .posts-title {
    margin-top: 10px;
    width: 400px;
  }
  .main-wrap {
  }
</style>

<script>
import headerBar from '@/components/headerBar.vue';
import footerBar from '@/components/footerBar.vue';
import tagsBar from '@/components/tagsBar.vue';

export default {
  name: "App",
  components: {
    headerBar,
    footerBar,
    tagsBar
  },
  data: () => ({

  })
}
</script>
