<template>
  <header class="header">
      <!-- <div class="overlay"> -->
        <div class="header-box">
          <div class="header-title">
            <router-link to="/">
              <img class="site-author" src="../assets/header-pic.jpg" />
              <h1 class="site-name">KSANA</h1>     
            </router-link>
          </div>
          <aside class="header-p">
            写代码
            <span class="header-separator">//</span>
            按快门
            <span class="header-separator">//</span>
            全干攻城狮🐶
          </aside>   
          <aside class="header-link">
            <a href="https://github.com/lzcers">
              <i class="enterlink ion-social-github"></i>
            </a>
            <a href="mailto:lzcers@gmail.com">
              <i class="enterlink ion-ios-email"></i>
            </a>
          </aside>  
          <nav class="header-nav">
            <li><router-link to="/archives">Archives</router-link></li>
            <li><router-link to="/project">Project</router-link></li>
            <li><router-link to="/aboutme">About</router-link></li>
          </nav>
          <lifegame></lifegame>
        </div>
      <!-- </div> -->
  </header>
</template>

<style>
  .header-link {
    width: 100%;
    height: 40px;
    font-size: 30px;
    line-height: 30px;
    padding: 5px;
    text-align: center;
    margin: 20px 0; 
  }
  .header-link a {
    color: #333;
    margin: 0 5px;
  }
  .enterlink:hover {
    color: #000;
  }
  .header-separator {
    color: #E54028;
    letter-spacing: -0.35rem;
    margin-right: 0.4rem;
  }
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    opacity: 0.7;
    z-index: -1;    
  }
  .site-author {
    margin: 0 auto;
    display: block;
    width: 140px;
    height: 140px;
    border-radius: 100%;
    transition: transform .2s ease;
  }
  .site-author:hover {
    transform: scale(1.1);
  }
  @media screen and (min-device-width: 1280px) {
    .header { 
      width: 25vw;
      height: calc(100vh);  
      position: fixed;
      top: 0;
      background: #fff;  
      box-shadow: 0 0 3px #ccc;
      /* background-image: url(../assets/header-background.jpg);
      background-repeat: no-repeat;
      background-position: center;        */
    }
  }
  @media screen and (max-device-width: 1280px) {
      .header { 
      width: 100%;
      height: 20%;  
      background: #fff;
      box-shadow: 0 0 3px #ccc;
      /* background-image: url(../assets/header-background.jpg);
      background-repeat: no-repeat;
      background-position: center;        */
      }
  }
  .header-box {
    margin: 0 auto;
    padding-top: 15%;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .site-name {
    font-family: sans-serif;
    color: #333;
    text-align: center;
    margin-bottom: 0;
  }
  .header-nav {
    line-height: 20px;
    text-align: center;
  }
  .header-nav li {
    padding: 0 10px;
    display: inline-block;
    list-style: none;
    border-bottom: 1px dashed #ccc;
  }
  .header-nav li:hover {
    background: #eee;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import lifegame from './lifegame.vue'

export default Vue.extend({
  components: {
    lifegame
  }
})
</script>
