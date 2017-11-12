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
  }
  .tags {
    padding: 10px;
    margin-bottom: 30px;
    border: 1px solid #eee;
    background: #fff;
    box-shadow: 1px 1px 3px #eee;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { getTags } from '../api'

interface Data {
  tags: string[]
}

export default Vue.extend({
  data: (): Data => ({
    tags: []
  }),
  created() {
    getTags().then(tags => {
      this.tags = Object.keys(tags)
    })
  }
})
</script>
