<template>
  <div class="login">
    <div v-if="logedin">您已经登陆！</div>
    <div v-else>
      <div class="login-form">
        用户名:<input type="text" v-model="username" name="userName">
      </div>
      <div class="login-form">
        密码:<input type="password" v-model="password" name="password">
      </div>
      <div class="login-form">
        <button @click="login">登陆</button>
      </div>
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
  .login .login-form {
    text-align: right;
    margin-top: 10px;
  }
</style>

<script lang="ts">
import Vue from 'vue'
import { login, authorizationCheck } from '../api'
export default Vue.extend({
  data: (): {
    logedin: boolean,
    username: string,
    password: string
  } => ({
    logedin: false,
    username: "",
    password: ""
  }),
  methods: {
    login() {
      login({username: this.username, password: this.password})
      .then(res => res.data)
      .then(data => {
        if (data.result == true) {
          this.$$app.logedin = true
          this.$router.push(this.$route.query.redirect || '/')
        }
      })
    }
  },
  created() {
    authorizationCheck()
    .then(res => res.data)
    .then(data => {
      if (data.result == true) {
        this.logedin = true 
        this.$$app.logedin = true
        setTimeout(() => this.$router.push('/'), 2000)
      }
    })
  }
})
</script>
