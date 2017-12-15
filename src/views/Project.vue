<template>
<div class="project-list">
  <li>
    <a href="https://github.com/lzcers/KsanaRete"><strong>KsanaRete：</strong></a>
    <span>坑，以前为了项目需求研究学习的玩意，以后估计不大可能用上了，基于Rete算法的规则引擎实现，采用 TypeScript 开发。</span>
  </li>
  <li>
    <a href="https://github.com/lzcers/KsanaBlog"><strong>KsanaBlog：</strong></a>
    <span>当然！这个博客的源码也是丢在 GitHub 上的，文章使用 md 编写，在前端通过 marked.js 解析，自带一个简单的 markdown 编辑器，能够在线写博文，后端用的 go + mongodb, 也可以尝试本博客早期采用的 GitHub API 方式。</span>
  </li>
  <li>
    <a href="https://github.com/lzcers/KsanaRouter"><strong>KsanaRouter：</strong></a>
    <span>基于前缀树的 HTTP Router，学习 Golang 写的玩具。just for fun ...</span>
  </li>
</div>
</template>

<style lang="less">
  .project-list {
    margin-top: 20px;
    color: #333;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px #eee;
    padding: 5% 5%;
    @media screen and (min-device-width: 1280px) {
      width: 80%;
    }
    @media screen and (max-device-width: 1280px) {
      idth: 100%;
    }
    li {
      padding: 10px;
    }
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  
})
</script>
