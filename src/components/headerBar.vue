<template>
  <header class="header">
      <!-- <div class="overlay"> -->
        <div class="header-box">
          <div class="header-title">
            <router-link to="/">
              <!-- <img src="../assets/logo.png" height="24" /> -->
              <h1 class="site-name">KSANA</h1>     
            </router-link>
          </div>
          <aside class="header-p">朝露昙花</aside>   
          <aside class="header-p">咫尺天涯</aside>  
        </div>
        <nav class="header-nav">
          <!-- <li><router-link to="/post">Post</router-link></li> -->
          <li><router-link to="/project">Project</router-link></li>
          <!-- <li><router-link to="/project">Galleray</router-link></li> -->
          <li><router-link to="/aboutme">About</router-link></li>
        </nav>
      <!-- </div> -->
  </header>
</template>

<style>
  .overlay {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.75);
    position: absolute;
    opacity: 0.7;
    z-index: -1;    
  }
  @media screen and (min-device-width: 1280px) {
    .header { 
      width: 30%;
      height: calc(100vh);  
      position: sticky;
      top: 0;
      background: #fff;  
      box-shadow: 0.5px 0 2px #eee;
      /* background-image: url(../assets/header-background.jpg);
      background-repeat: no-repeat;
      background-position: center;        */
    }
    .header-box {
        margin: 150px auto;
    }
  }
  @media screen and (max-device-width: 1280px) {
      .header { 
      width: 100%;
      height: 20%;  
      background: #fff;
      box-shadow: 0.5px 0 2px #eee;
      /* background-image: url(../assets/header-background.jpg);
      background-repeat: no-repeat;
      background-position: center;        */
      }
      .header-box {
        margin: 20px auto;
      }
      .header-nav li {
        display: inline-block;
      }
  }
  .header-box {
    width: 160px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .site-name {
    margin-bottom: 0;
  }
  .header-nav {
    margin-top: 25px;
    line-height: 50px;
    text-align: center;
  }
  .header-nav li {
    margin:0 10px;
  }
</style>

<script ts>
import Vue from 'vue'

export default Vue.extend({
})
</script>
