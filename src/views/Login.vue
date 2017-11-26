<template>
  <div class="login">
    <div v-if="logedin">您已经登陆！</div>
    <div v-else>
      用户名:
      <input type="text" v-model="username" name="userName">
      密码:
      <input type="password" v-model="password" name="password">
      <button @click="login">登陆</button>
    </div>
  </div>
</template>

<style>
  .login {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;
  }
</style>

<script>
import Vue from 'vue'
import { login, authorizationCheck } from '../api'
export default Vue.extend({
  data: () => ({
    logedin: false,
    username: "",
    password: ""
  }),
  methods: {
    login() {
      login({username: this.username, password: this.password})
      .then(res => res.data)
      .then(data => {
        if (data.result == true)
        this.$router.push(this.$route.query.redirect || '/')
      })
    }
  },
  created() {
    authorizationCheck()
    .then(res => res.data)
    .then(data => {
      if (data.result == true) {
        this.logedin = true 
        setTimeout(() => this.$router.push('/'), 2000)
      }
    })
  }
})
</script>
