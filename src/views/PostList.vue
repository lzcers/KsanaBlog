<template>
    <div v-scroll="loadMore" class="container post-list">
        <post v-for="(post, index) in postPages" :key="index" :date="post.date" :title="post.title" :body="post.body"></post>   
        <img src="../assets/loading.gif" class="loading" v-if="postListRenderFlag" ></img>  
    </div>
</template>

<style>
  .loading {
    width: 150px;
    display: block;
    margin: 0 auto;
  }
</style>

<script>
import post from '@/components/post.vue';
import {getPostListFromFiles,  getPostBySHA} from '@/api';
import { debounce } from 'lodash';
export default {
  name: 'postList',
  components: {
    post
  },
  data: () => ({
    postList: [],
    postPages: [],
    postListRenderFlag: true,
    pageNumber: 0
  }),
    directives: {
    scroll: {
      bind: function (el, binding){
        // 指令初始化，绑定事件监听器
        el.handler = debounce(() => {
          if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
            binding.value();
          }
        }, 100, {leading: false});
        window.addEventListener('scroll', el.handler);
      },
      unbind: function(el, binding) {
        btnOne.removeEventListener('scroll', el.handler);
      }
    }
  },
  computed: {
  },
  methods: {
    loadMore() {
      const eachPage = 3;
      this.pageNumber++;
      const newLoadPost = this.postList.slice(this.pageNumber * eachPage, (this.pageNumber * eachPage) + eachPage);
      this.postPages = this.postPages.concat(newLoadPost);
    },
    loadPost(postList) {
      return Promise.all(postList.map(p => {
        return getPostBySHA(p.sha).then(({attributes, body}) => ({
          title: attributes.Title,
          date: attributes.Date,
          body: body
        }));
      }));
    }
  },
  created() {
    getPostListFromFiles().then(postList => {
      this.loadPost(postList)
      .then(posts => {
        // 按日期排序
        const sortPostList = posts.sort((a, b) => {
          return new Date(a.date) < new Date(b.date) ? 1 : -1;
        });
        this.postList = sortPostList;
        // 初始化第一页内容
        this.postPages = sortPostList.slice(0, 3);
        this.postListRenderFlag = false;
      })
    })
    .catch(e => console.log(e)) ;
  }
}
</script>
