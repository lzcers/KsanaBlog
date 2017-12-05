<template>
  <div class="tags">
    <!-- <h3 class="tags-title"><i>Tags</i></h3> -->
    <ul class="tags-list">
      <li class="tag-name">
        <router-link to="/">
          全部
        </router-link>
      </li>
      <li v-for="(tagName, index) in tags" :key="index" class="tag-name">
        <router-link :to="'/tags/'+tagName">
          {{ tagName }}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<style>
  .tags-title {
    margin-top: 10px;
  }
  .tag-name {
    display: inline-block;
    margin: 0 5px;
  }
  .tags-list {
    padding-left: 15px;
    list-style: none;
    margin: 0;
  }
  .tags {
    height: 40px;
    line-height: 40px;
    background: #fff;
    box-shadow: 0 2px 2px #ccc
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { getTags } from '../api'

export default Vue.extend({
  data: (): { tags: string[] } => ({
    tags: []
  }),
  created() {
    getTags().then(tags => this.tags = tags).catch(e => console.log(e))
  }
})
</script>
