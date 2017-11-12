<template>
  <header class="header">
    <div class="header-box">
        <div class="header-title">
          <router-link to="/">
            <!-- <img src="../assets/logo.png" height="24" /> -->
            <h1 class="site-name">KSANA</h1>     
          </router-link>
        </div>
        <aside class="header-p">朝露昙花 咫尺天涯</aside>   
        <nav class="header-nav">
          <!-- <li><router-link to="/post">Post</router-link></li> -->
          <li><router-link to="/project">Project</router-link></li>
          <!-- <li><router-link to="/project">Galleray</router-link></li> -->
          <li><router-link to="/aboutme">About</router-link></li>
        </nav>
    </div>
  </header>
</template>

<style>
  .header {
    position: fixed;
    background: #fff;
    width: 600px;
    height: 100%;
    box-shadow: 0.5px 0 2px #eee;
    background-image: url(../assets/header-background.jpg);
    background-repeat: no-repeat;
    background-position: center;
  }
  .header-box {
    margin: 150px auto;
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
    display: inline-block;    
  }
</style>

<script>
  export default {
  }
</script>
