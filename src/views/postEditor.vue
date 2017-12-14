<template>
    <div class="post-editor">
      <div class="post-toolbar">
        <button @click="savePost" type="button"><i class="ion-cube"></i><span>save</span></button>
        <button @click="editorMode" type="button"><i class="ion-cube"></i><span>editor mode</span></button>
      </div>
      <div class="post-editor-box">
        <textarea ref="mdEditor" @scroll="scroll('mdEditor', $event)" class="post-markdown-editor scroll-style" v-model="mdText"></textarea>
        <div v-if="editorModeFlag" ref="mdPreview"  @scroll="scroll('mdPreview', $event)" class="markdown-body post-markdown-preview scroll-style" v-html="markdownText"></div>
      </div>
    </div>
</template>

<style>
  .post-editor {
    width: 100%;
    min-height: 100%;
  }

	@media (max-width: 767px) {
		.markdown-body {
			padding: 15px;
		}
	}
  @media screen and (max-device-width: 1280px) {
    .post-toolbar {
      position: static !important;
    }
    .post-editor-box  {
      margin-top: 1px !important;
    }
  }

  .post-toolbar {
    background: #fff;
    position: static;
    box-shadow: 0 0 3px 0 #ccc; 
    display: flex;
    height: 35px;
    width: 100%;
  }
  .post-toolbar button {
    border-color: transparent;
    background: transparent;
  }
  .post-toolbar button:hover {
    font-weight: bold;    
    background: #eee;
  }
   .post-toolbar button:focus {
    outline: none;
  }
  .post-toolbar button i {
    margin-left: 2px;
    margin-right: 2px;
  }
  .post-markdown-editor, .post-markdown-preview {
    font-size: 16px; 
    line-height: 27px; 
    font-family: Menlo, "Ubuntu Mono", Consolas, "Courier New", "Microsoft Yahei", "Hiragino Sans GB", "WenQuanYi Micro Hei", sans-serif;
    overflow-y: scroll;
    overflow-x: hidden;
    background: #fff;
    padding: 15px;
    border: none;
    outline: none 0;
    resize: none;
    flex:1;
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
    height: calc(100vh - 95px);
    padding-top: 10px;
    display: flex;
    flex-flow: row nowrap;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { getPostByID, addPost, updatePostByID } from '../api'
import marked from '../utils/render'

interface Post {
  ID: string;
  Tags: string[];
  Title: string;
  Content: string;
  PublishDate: string;
  LastUpdate: string;
  Published: boolean;
}

export default Vue.extend({
  data: (): {
    tirgger: string;
    mdText: string;
    mdMeta: Post | any;
    postID: string;
    editorModeFlag: boolean;
    autoSaveFuncID: number;
  } => ({
    tirgger: "",
    mdText: "",
    mdMeta: {},
    postID: "",
    editorModeFlag: false,
    autoSaveFuncID: 0
  }),
  computed: {
    markdownText(): string {
      const mdParseResult = marked(this.mdText)
      this.mdMeta = mdParseResult.meta
      return mdParseResult.html
    }
  },
  methods: {
    editorMode() {
      this.editorModeFlag = !this.editorModeFlag
    },
    getPost() {
      return getPostByID(this.postID)
    },
    savePost() {
      this.mdMeta = marked(this.mdText).meta
      this.postID == '' || this.postID == undefined ? this.addPost() : this.updatePost()
    },
    saveToLocalStorage() {
      if (window.localStorage == undefined) {
        console.log("auto Save disabled!")
        return 
      } 
      console.log("auto Save to local storage...")
      // postID 如果为 undefined 那就存tempPostundefined， 没毛病
      localStorage.setItem('tempPost'+this.postID, this.mdText)
    },
    addPost() {
      addPost({
        Title: this.mdMeta.Title,
        Tags: this.mdMeta.Tags.split('|').map((i: string) => i.trim()),
        Content: this.mdText,
        PublishDate: this.mdMeta.PublishDate || new Date().toLocaleString(undefined,{hour12: false}),
        Published: this.mdMeta.Published == undefined ? true : this.mdMeta.Published
      })
      .then(res => {
        alert("add！")        
        this.postID = res.data
        //保存之后清除一次 tempPost
        localStorage.removeItem('tempPostundefined')
        console.log("add Post: " + this.postID)
      })
      .catch(err => console.log(err))
    },
    updatePost() {
      updatePostByID(this.postID, {
        Title: this.mdMeta.Title,
        Tags: this.mdMeta.Tags.split('|').map((i: string) => i.trim()),
        Content: this.mdText,
        PublishDate: this.mdMeta.PublishDate || new Date().toLocaleString(undefined,{hour12: false}),
        LastUpdate: new Date().toLocaleString(undefined,{hour12: false}),
        Published: this.mdMeta.Published == undefined ? true : this.mdMeta.Published
      })
      .then(res => {
        alert("update！")
        console.log("updatePost: " + this.postID)
      })
      .catch(err => console.log(err))
    },
    // 让两边滚动条移动相同比例的距离
    scroll(who: string ,e: any) {
      // 防止两个滚动条相互调用
      if (who != this.tirgger || !this.editorModeFlag) {
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
  },
  created() {
    this.postID = this.$route.params.id
    let content = ""
    // 先从本地 localStorage 找
    if (window.localStorage != undefined) {
      content = localStorage.getItem('tempPost'+this.postID) || ""
      if (content != "") this.mdText = content
    } 
    // 本地缓存没有，且 postID 非空则去后端取
    if (content  == "" && this.postID != undefined) {
      this.getPost()
      .then((post: Post) => {
        this.mdText = post.Content
        console.log("getPost")
      })
      .catch(err => console.log(err))
    }
    // 五秒钟自动保存一次
    this.autoSaveFuncID = setInterval(this.saveToLocalStorage, 5000)
  },
  destroyed() {
    clearInterval(this.autoSaveFuncID)
  }    
})
</script>

