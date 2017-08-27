<template>
  <div class="root-wrap">
      <headerBar></headerBar> 
      <music></music>
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
import music from '@/components/aplayer.vue';
import footerBar from '@/components/footerBar.vue';

export default {
  name: "App",
  components: {
    headerBar,
    footerBar,
    music
  },
  data: () => ({

  })
}
</script>
