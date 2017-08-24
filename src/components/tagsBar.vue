<template>
  <div class="flex-center">
    <div class="tags">
      <div class="flex-left">
        <h3 class="tags-title"><i>Tags</i></h3>
      </div>
      <ul class="flex-left tags-list">
        <li v-for="(tagName, index) in tags" :key="index" class="tag-name">
          <router-link class="site-text-plain" :to="'/tags/'+tagName">
            {{ tagName }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<style>
  .tags-title {
    margin-top: 10px;
  }
  .tag-name {
    margin: 0 5px;
    cursor: pointer;
  }
  .tags-list {
    padding-left: 15px;
    list-style: none;
  }
  .tags {
    min-width: 400px;
  }
</style>

<script>
import tagsList from './tags.json';
export default {
  computed: {
    tags: () => Object.keys(tagsList)
  },
  methods: {
  }
}
</script>
