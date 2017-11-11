<template>
  <!-- <sakura></sakura> -->
  <div class="wrap">
    <headerBar></headerBar> 
    <!-- <music></music> -->
    <div class="main">
      <div class="content">
        <router-view></router-view>
      </div>
      <footerBar></footerBar> 
    </div>  
  </div>
</template>

<style>
  html, body, .wrap {
    margin: 0;
    padding: 0;
    width: 100%;
    box-sizing: border-box;
    font-family: "Lucida Grande","Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Zen Hei","WenQuanYi Micro Hei","Noto Sans CJK SC","Source Han Sans CN",SimSun,sans-serif;
  }
    li {
    list-style: none;
  }
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #000;  
  }
  a:hover {
    color: #eee;
  }
  .content {
    min-height: calc(100vh - 60px);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    padding-top: 10px;
  }
  .wrap {
    display: flex;
    flex-flow: row nowrap;
    background: #f9f9f9;
  }
  .main {
    margin-left: 25%;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import headerBar from './components/headerBar.vue'
import footerBar from './components/footerBar.vue'
// import music from '@/components/aplayer.vue'
// import sakura from '@/components/sakura.vue'
export default Vue.extend({
  name: "App",
  components: {
    headerBar,
    footerBar
    // music,
    // sakura
  },
  data: () => ({

  })
})
</script>
