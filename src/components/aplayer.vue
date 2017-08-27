<template>
  <div class="flex-center flex-vertical">
    <h3 class="music-title"><i>Musics</i></h3>
    <a-player autoplay :showlrc="false" :music="musics">
    </a-player>
  </div>
</template>

<style>
  .aplayer {
    min-width: 380px;
  }
  .music-title {
    margin-top: 10px;
    width: 400px;
  }
</style>

<script>
import VueAplayer from 'vue-aplayer'
export default {
  components: {
    aPlayer: VueAplayer
  },
  data: () => ({
    musics: [{ 
      title: '刹那芳华曲',
      author: '小爱的妈',
      url: 'http://m10.music.126.net/20170827174845/3b156ee97bb1d148a337e6c07c3fecaf/ymusic/14f5/e882/0d0e/e657f558bc751bbfedf4e9d2249c7cc8.mp3',
      pic: 'http://p1.music.126.net/2q4lvciqCyh-M8dnyVgBRQ==/51677046521902.jpg?param=34y34'
    }]
  })
}
</script>
