<template>
  <header class="site-header flex-center">
    <div class="container-wider">
      <div class="flex-left units-gap-big">
        <div class="hide-on-mobile unit-1-4">
          <router-link to="/" class="site-text-plain flex-middle">
            <!-- <img src="../assets/logo.png" height="24" /> -->
            <div>Ksana</div>
          </router-link>
        </div>
        <div class="unit-3-4 unit-1-on-mobile">
          <nav class="flex-middle units-gap-big">
            <div class="unit">
              <router-link to="/post" class="site-text-plain">文章</router-link>
            </div>
            <div class="unit">
               <router-link to="/gallery" class="site-text-plain">画廊</router-link>
            </div>
            <div class="unit">
               <router-link to="/aboutme" class="site-text-plain">关于</router-link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
  .site-header {
    position: fixed;
    width: 100%;
    background: white;
    padding-top: 15px;
    top: 0;
    left: 0;
  }

.site-text-plain {
  font-weight: normal;
}

a.site-text-plain {
  color: #777;
  text-decoration: none;
}

a.site-text-plain:hover,
a.site-text-plain.site-side-title,
a.site-text-plain.current {
  color: #333;
}

a.site-text-plain.current {
  font-weight: 600;
}
</style>

<script>
  export default {
  }
</script>
