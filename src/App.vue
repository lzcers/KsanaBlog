<template>
  <!-- <sakura></sakura> -->
  <div class="wrap">
    <headerBar></headerBar> 
    <!-- <music></music> -->
    <div class="main">
      <div class="content">
        <!-- <transition name="slide-fade"> -->
          <router-view></router-view>
        <!-- </transition> -->
      </div>
      <footerBar></footerBar> 
    </div>
  </div>
</template>

<style>
  * {
    box-sizing: border-box;
  }
  html, body, .wrap {
    margin: 0;
    padding: 0;
    /* 避免滚动条出现导致跳动 */
    width: 100vw;
    overflow-x: hidden;
    box-sizing: border-box;
    font-family: "Lucida Grande","Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Zen Hei","WenQuanYi Micro Hei","Noto Sans CJK SC","Source Han Sans CN",SimSun,sans-serif;
  }
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #000;  
  }
  a:hover {
    font-weight: bold;
  }
  .content { 
    min-height: calc(100vh - 50px);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    margin: 0 auto;
  }
  .wrap {
    display: flex;
    background: #f9f9f9;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  @media screen and (max-device-width: 1280px) {
    .wrap {
      flex-flow: column nowrap;
    }
    .content {
      width: 100%;
    }
  }
  @media screen and (min-device-width: 1280px) {
    .wrap {
      flex-flow: row nowrap;
    }
    .content {
      width: 80%;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'
import headerBar from './components/headerBar.vue'
import { authorizationCheck } from './api'
import footerBar from './components/footerBar.vue'

export default Vue.extend({
  name: "App",
  components: {
    headerBar,
    footerBar
  },
  data: () => ({

  }),
  created() {
    // 初始化登录状态
    authorizationCheck()
    .then(res => res.data)
    .then(({result}) => this.$$app.logedin = result)
  }
})
</script>
