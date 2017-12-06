<template>
<div class="post-wrap">
  <div class="post-toc" v-if="tocTree != undefined && tocTree.childrenNode.length != 0">
    <div class="toc-header">目录：</div>
    <md-toc :tocTree="tocTree"></md-toc>
  </div>
  <section class="post-container">
    <article class="post-view" v-if="post">
      <div class="post-view-header">
        <h3 class="post-title">{{ post.Title }} <router-link v-if="$$app.logedin" :to="'/posteditor/'+$route.params.id"><i class="ion-edit"></i></router-link> </h3>
        <div>
          <div class="post-date"><i class="icon ion-calendar"></i> {{ post.PublishDate }}</div>
          <div class="post-tags">
            <i class="icon ion-pricetags"></i>
            <router-link v-for="tagName in post.Tags" :key="tagName" class="site-text-plain" :to="'/tags/' + tagName">{{ tagName + " " }}</router-link>
          </div>
        </div>
      </div>
      <div class="post-body markdown-body" v-html="mdHtml">
      </div>
    </article> 
      <!-- <img src="../assets/loading.gif" class="loading" v-if="!post" ></img>   -->
  </section>
</div>
</template>

<style>
  .post-wrap {
    display: flex;
    flex: 1;
  }
  .post-view-header {
    margin: 2.5% auto;
  }
  .post-container {
    box-sizing: border-box;
    color: #333;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 1px 3px #eee;
    padding: 0 5%;
  }
  @media screen and (max-device-width: 1280px) {
    .post-wrap {
      width: 100%;
      flex-flow: column nowrap;
    }
    .post-toc {
      height: fit-content;
      width: 100%
    }
    .post-container {
      flex: 1;
    }
  }
  @media screen and (min-device-width: 1280px) {
    .post-container {
      flex: 1;
    }
    .post-toc {
      height: fit-content;
      position: sticky;
      top: 0px;
      flex: 0.2;
    }
    .post-toc ol {
      padding-left: 20px;
    }
  }
  .toc-header {
    font-weight: bold;
    margin: 5px 15px;
    padding: 15px 0;
    border-bottom: 1px solid #ccc;
  }
  .post-title {
    margin-top: 5px;
    margin-bottom: 5px;
  } 
  .post-title i {
    margin-left: 20px;
  }
  .post-date, .post-tags {
    display: inline-block;
    margin-right: 10px;    
  }
  .post-body {
    max-width: 100%;
    margin-top: 25px
  } 
  .post-body img {
    max-width: 100%;
    display: block;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { getPostByID } from '../api'
import marked from '../utils/render'
import mdTOC from '../components/mdTOC.vue'

interface Post {
  ID: string;
  Tags: string[];
  Title: string;
  Content: string;
  PublishDate: string;
  LastUpdate: string;
}

export default Vue.extend({
  name: 'Post',
  components: {
    "md-toc": mdTOC
  },
  data: (): {post: Post | null; markedResult: any} => ({
    post: null,
    markedResult: null
  }),
  computed: {
    mdHtml(): string {
      if (this.post != null) this.markedResult = marked(this.post.Content)
      return this.markedResult.html || ""
    },
    tocTree(): any {
      return this.markedResult != null ? this.markedResult.tocTree : undefined
    }
  },
  methods: {
    loadPost(id: string) {
      return getPostByID(id).then((post: Post) => post)
    }
  },
  created() {
    this.loadPost(this.$route.params.id)
    .then((post: Post) => this.post = post)
    .catch((e: Error) => console.log(e))
  }
})
</script>
