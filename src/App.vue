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
    height: 100%;
  }
  .wrap {
    display: flex;
    flex-flow: row nowrap;
  }
  .main {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
  .content {
    min-height: calc(100vh - 50px);
  }
</style>

<script lang="ts">
import headerBar from './components/headerBar.vue';
import footerBar from './components/footerBar.vue';
// import music from '@/components/aplayer.vue';
// import sakura from '@/components/sakura.vue';
export default {
  name: "App",
  components: {
    headerBar,
    footerBar
    // music,
    // sakura
  },
  data: () => ({

  })
}
</script>
