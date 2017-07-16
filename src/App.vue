<template>
  <div class="root-wrap">
        <headerBar></headerBar>  
          <div class="main-wrap flex-center">
            <router-view></router-view>
          </div>  
       <footerBar></footerBar> 
  </div>
</template>

<style>
  .main-wrap  {
    padding-top: 102px;
    padding-bottom: 54px;
  }
</style>

<script>
import headerBar from '@/components/headerBar.vue';
import footerBar from '@/components/footerBar.vue';
export default {
  name: "App",
  components: {
    headerBar,
    footerBar
  },
  data: () => ({

  })
}
</script>
