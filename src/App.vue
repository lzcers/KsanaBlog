<template>
  <div class="root-wrap">
      <sakura></sakura>
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
