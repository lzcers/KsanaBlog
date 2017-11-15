<template>
    <div class="post-editor">
      <div class="post-toolbar">
      </div>
      <div class="post-editor-box">
        <textarea class="post-markdown-editor scroll-style"></textarea>
        <div class="post-markdown-preview"></div>
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
    height: 35px;
    width: 100%;
  }
  .post-markdown-editor, .post-markdown-preview {
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
  }
  .post-editor-box {
    margin-top: 35px;
    height: calc(100vh - 95px);
    display: flex;
    flex-flow: row nowrap;
  }
</style>

<script lang="ts">
export default {
  
}
</script>
