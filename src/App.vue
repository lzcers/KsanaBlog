<template>
  <div class="root-wrap">
      <headerBar></headerBar>
      <mainWrap></mainWrap>
      <footerBar></footerBar>
  </div>
</template>

<script>
import headerBar from './components/headerBar.vue';
import footerBar from './components/footerBar.vue';
import mainWrap from './components/mainWrap.vue';
export default {
  name: "App",
  components: {
    headerBar,
    footerBar,
    mainWrap
  },
  data: () => ({

  })
}
</script>
