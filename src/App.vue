<template>
  <div class="root-wrap">
      <headerBar></headerBar> 
      <musics></musics>
      <div class="main-wrap flex-center">
        <router-view></router-view>
      </div>  
      <footerBar></footerBar> 
  </div>
</template>

<style>
  .main-wrap {
  }
</style>

<script>
import headerBar from '@/components/headerBar.vue';
import musics from '@/components/aplayer.vue';
import footerBar from '@/components/footerBar.vue';

export default {
  name: "App",
  components: {
    headerBar,
    footerBar,
    musics
  },
  data: () => ({

  })
}
</script>
