<template>
<li class="toc-li">
  <a class="anchor" v-if="tocTree.nodeID != 'root'" @click="goAnchor(tocTree.nodeID)">{{ tocTree.nodeID }}</a>
  <ol class="toc-ol" v-if="tocTree.childrenNode.length != 0">
    <md-toc v-for="n in tocTree.childrenNode" :tocTree="n" :key="n.nodeID"></md-toc>
  </ol>
</li>
</template>

<style>
  .toc-li {
    margin: 5px;
    list-style: none;
  }
  .anchor {
    cursor: pointer;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: "md-toc",
  props: {
    tocTree: Object
  },
  data: ()=>({

  }),
  methods: {
    goAnchor(selector: string) {
      const anchor: any = document.querySelector('#'+selector)
      // 当前位置
      // DTD是否存,会影响document.body.scrollTop 与 document.documentElement.scrollTop的取值
      let curPY = document.documentElement.scrollTop || document.body.scrollTop;
      // 目标位置
      const targetPY = anchor.offsetTop
      // 速率
      const rate = 4
      if (anchor != null) {
        const go = () => {
          curPY = curPY + (targetPY - curPY) / rate
          // 临界判断
          if (targetPY - curPY < 1) {
              window.scrollTo(0,targetPY)
              return
          }
          window.scrollTo(0, curPY)
          requestAnimationFrame(go)
        }
        go()
      }
    }
  },
  created() {
  }
})
</script>
