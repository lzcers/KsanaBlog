<template>
    <div class="post-editor">
      <div class="post-toolbar">
        <button @click="savePost" type="button">Save</button>
      </div>
      <div class="post-editor-box">
        <textarea ref="mdEditor" @scroll="scroll('mdEditor', $event)" class="post-markdown-editor scroll-style" v-model="mdText"></textarea>
        <div ref="mdPreview"  @scroll="scroll('mdPreview', $event)" class="post-markdown-preview scroll-style" v-html="markdownText"></div>
      </div>
    </div>
</template>

<style>
  .post-editor {
    width: 100%;
    min-height: 100%;
  }
  .post-toolbar {
    background: #fff;
    position: fixed;
    box-shadow: 0 1px 3px 0px #ccc; 
    display: flex;
    height: 35px;
    width: 100%;
  }
  .post-markdown-editor, .post-markdown-preview {
    overflow-y: scroll;
    overflow-x: hidden;
    background: #fff;
    padding: 15px;
    border: none;
    outline: none 0;
    resize: none;
    width: 50%;
  }
  .scroll-style::-webkit-scrollbar {
    width: 6px;
    background-color: #e5e5e5;
  }
  .scroll-style::-webkit-scrollbar-thumb {
    background-color: #b7b7b7;
    border-radius: 3px;
  }

  .scroll-style::-webkit-scrollbar-thumb:hover {
    background-color: #a1a1a1;
  }
  .scroll-style::-webkit-scrollbar-thumb:active {
    background-color: #a1a1a1;
  }
  
  .scroll-style::-webkit-scrollbar-track {
    box-shadow: 0 0 0px #808080 inset;
  }

  .post-markdown-editor {
    border-right: 1px dashed #ccc;
    font-family: "Lucida Grande","Helvetica Neue",Helvetica,Arial,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","WenQuanYi Zen Hei","WenQuanYi Micro Hei","Noto Sans CJK SC","Source Han Sans CN",SimSun,sans-serif
  }
  .post-editor-box {
    margin-top: 35px;
    height: calc(100vh - 95px);
    display: flex;
    flex-flow: row nowrap;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import axios from 'axios'
import marked from '../utils/render'

export default Vue.extend({
  data: (): {
    tirgger: string,
    mdText: string,
    mdMeta: any
    postID: string,
  } => ({
    tirgger: "",
    mdText: "",
    mdMeta: {},
    postID: ""
  }),
  computed: {
    markdownText(): string {
      const mdParseResult = marked(this.mdText)
      this.mdMeta = mdParseResult.meta
      return mdParseResult.html
    }
  },
  methods: {
    savePost() {
      if (this.postID != "") {
        this.updatePost(this.postID)
        return
      }
      axios.post('/api/post/add', {
        Title: this.mdMeta.Title,
        Tags: this.mdMeta.Tags.split('|').map((i: string) => i.trim()),
        Content: this.mdText,
        PublishDate: new Date().toLocaleString(undefined,{hour12: false})
      })
      .then(res => this.postID = res.data)
      .catch(err => console.log(err))
    },
    updatePost(id: string) {
        axios.post('/api/post/update/' + id, {
        Title: this.mdMeta.Title,
        Tags: this.mdMeta.Tags.split('|').map((i: string) => i.trim()),
        Content: this.mdText,
        LastUpdate: new Date().toLocaleString(undefined,{hour12: false})
      })
      .then(res => console.log(res))
      .catch(err => console.log(err))
    },
    // 让两边滚动条移动相同比例的距离
    scroll(who: string ,e: any) {
      // 防止两个滚动条相互调用
      if (who != this.tirgger) {
        this.tirgger = who
        return
      }
      const [target, mdEditor, mdPreview] = [e.target, this.$refs.mdEditor, this.$refs.mdPreview]
      const otherScroll: any = target == mdEditor ? mdPreview : mdEditor
      // 当前滚动条移动的比例
      let proporation = target.scrollTop / (target.scrollHeight - target.clientHeight)
      // 另一条滚动条需要移动的距离
      otherScroll.scrollTop = (otherScroll.scrollHeight - otherScroll.clientHeight) * proporation
    }
  }
})
</script>

