<template>
  <header class="header">
    <div class="header-box">
        <div class="header-title">
          <router-link to="/">
            <!-- <img src="../assets/logo.png" height="24" /> -->
            <h1 class="site-name">KSANA</h1>
          </router-link>
        </div>
        <nav class="header-nav">
          <li><router-link to="/post">Post</router-link></li>
          <li><router-link to="/project">Project</router-link></li>
          <li><router-link to="/project">Galleray</router-link></li>
          <li><router-link to="/aboutme">About</router-link></li>
        </nav>
        <aside class="header-p">朝露昙花 咫尺天涯</aside>
    </div>
  </header>
</template>

<style>
  li {
    list-style: none;
  }
  a:hover, a:visited, a:link, a:active {
    text-decoration: none;
    color: #000;  
  }
  .header {
    width: 25%;
    height: 100%;
    border-right: 1px solid #eee;
  }
  .header-box {
    margin: 150px auto;
    width: 160px;
    display: flex;
    flex-flow: column wrap;
    justify-content: flex-start;
    align-items: center;
  }
  .header-nav {
    line-height: 50px;
    text-align: center;
  }
  .header-nav a:hover {
    color: #ccc;
  }
</style>

<script>
  export default {
  }
</script>
