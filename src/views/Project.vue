<template>
<div class="project-list">
  <li>
    <a href="https://github.com/lzcers/KsanaRete">KsanaRete：</a>
    <span>基于Rete算法的规则引擎实现，采用 TypeScript 开发。</span>
  </li>
  <li>
    <a href="https://github.com/lzcers/KsanaRete">KsanaBlog：</a>
    <span>当然！这个博客的源码也是丢在 GitHub 上的，文章使用 md 编写，在前端通过 marked.js解析，自带一个简单的markdown编辑器，能够在线写博文，后端用的 go + mongodb, 也可以尝试使用早期版本的 GitHub API 模式。</span>
  </li>
  <li>
    <a href="https://github.com/lzcers/KsanaRouter">KsanaRouter</a>
    <span>基于前缀树的HTTP Router，学习 Golang 写的玩具，深坑，just for fun ...</span>
  </li>
</div>
</template>

<style>
  @media screen and (min-device-width: 1280px) {
    .project-list {
      width: 80% !important;
    }
  }
  .project-list {
    width: 100%;
    margin-top: 20px;
    color: #333;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px #eee;
    padding: 5% 5%;
  }
</style>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  
})
</script>
