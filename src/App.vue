<template>
  <div class="root-wrap">
      <sakura></sakura>
      <div class="main-wrap">
        <headerBar></headerBar> 
        <music></music>
        <div class="flex-center">
          <router-view></router-view>
        </div>  
        <footerBar></footerBar> 
      </div>
  </div>
</template>

<style>
  html, body {
    width: 100%;
    height: 100%;
  }
  .root-wrap {
    height: inherit;
  }
  .main-wrap {
    z-index: 999;
    /* height: inherit;
    min-width: 440px;
    max-width: 640px;
    margin: 0 auto; */
  }
</style>

<script>
import headerBar from '@/components/headerBar.vue';
import music from '@/components/aplayer.vue';
import footerBar from '@/components/footerBar.vue';
import sakura from '@/components/sakura.vue';
export default {
  name: "App",
  components: {
    headerBar,
    footerBar,
    music,
    sakura
  },
  data: () => ({

  })
}
</script>
