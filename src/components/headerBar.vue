<template>
  <header class="site-header flex-center flex-vertical">
        <div class="site-title">
          <router-link to="/" class="site-text-plain flex-middle">
            <!-- <img src="../assets/logo.png" height="24" /> -->
            <h1 class="site-name">KSANA</h1>
          </router-link>
        </div>
          <nav class="site-nav flex-center units-gap-big">
            <router-link class="site-text-plain unit" to="/project">Project</router-link>
            <router-link class="site-text-plain unit" to="/aboutme">About</router-link>
          </nav>
  </header>
</template>

<style>
  .site-header {
    width: 100%;
    background: white;
    padding: 15px;
  }
  .site-name {
    color: #000;
    margin-top: 0;
  }
.site-text-plain {
  font-weight: normal;
}

a.site-text-plain {
  color: #777;
  text-decoration: none;
}

a.site-text-plain:hover {
  color: #333;
}
</style>

<script>
  export default {
  }
</script>
