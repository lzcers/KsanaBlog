<template>
  <div class="flex-center flex-vertical">
    <h3 class="music-title"><i>Music</i></h3>
    <a-player autoplay narrow mode="random" listmaxheight="65px" :showlrc="false" :music="musics">
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
      url: 'http://ovcmkko4f.bkt.clouddn.com/%E5%88%B9%E9%82%A3%E8%8A%B3%E5%8D%8E%E6%9B%B2.mp3',
      pic: 'http://p1.music.126.net/2q4lvciqCyh-M8dnyVgBRQ==/51677046521902.jpg?param=34y34'
    },{ 
      title: '仆は君に恋をする',
      author: 'Naomile',
      url: 'http://ovcmkko4f.bkt.clouddn.com/%E4%BB%86%E3%81%AF%E5%90%9B%E3%81%AB%E6%81%8B%E3%82%92%E3%81%99%E3%82%8B.mp3',
      pic: 'http://p1.music.126.net/-CUL8Lh2PfwoV_pyJYaiJg==/814738116205728.jpg?param=34y34'
    },{ 
      title: '我的一个道姑朋友',
      author: '以冬',
      url: 'http://ovcmkko4f.bkt.clouddn.com/%E6%88%91%E7%9A%84%E4%B8%80%E4%B8%AA%E9%81%93%E5%A7%91%E6%9C%8B%E5%8F%8B.mp3',
      pic: 'http://p1.music.126.net/BoX04rxRPHLSBakoECTI3A==/17925338067851131.jpg?param=34y34'
    },{ 
      title: 'I Found You',
      author: 'KOKIA',
      url: 'http://ovcmkko4f.bkt.clouddn.com/I%20Found%20You.mp3',
      pic: 'http://p1.music.126.net/R5flucnlBOsdU8GkUlG0xA==/7812030115856743.jpg?param=34y34'
    },{ 
      title: 'I Found the Love',
      author: 'KOKIA',
      url: 'http://ovcmkko4f.bkt.clouddn.com/KOKIA%20-%20I%20Found%20the%20Love.mp3',
      pic: 'http://p1.music.126.net/R5flucnlBOsdU8GkUlG0xA==/7812030115856743.jpg?param=34y34'
    }]
  })
}
</script>
