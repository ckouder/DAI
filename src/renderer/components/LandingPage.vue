<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <div class="row">
          <div class="text-center">
            <h1>Login</h1>
            <p>Dictophobia Assistere Implementation</p>
          </div>
        </div>
        <form action="login">
          <label for="username">Username: </label>
          <input type="text" name="username" id="username" maxlength="32">
          <label for="password">Password: </label>
          <input type="password" name="password" id="password" maxlength="32">
        </form>
      </div>
      <div class="col-12 d-flex justify-content-between">
        <button class="btn btn-success" type="submit" @click="submitLoginInfo">Login</button>
        <button class="btn btn-primary" type="submit" @click="submitRegisterInfo">Register</button>
      </div>
    </div>
  </div>
</template>

<script>
import { ipcRenderer } from 'electron'

export default {
  name: 'landing-page',
  methods: {
    submitLoginInfo () {
      let username = document.getElementById('username').value
      let password = document.getElementById('password').value
      let loginData = JSON.stringify({
        object: 'user',
        type: 'login',
        username: username,
        password: password
      })

      if (username && password) {
        ipcRenderer.send('login', loginData)
        console.log(loginData)
      } else {
        alert('Please enter Username or Password')
      }

      document.getElementById('password').value = ''
    },
    submitRegisterInfo () {
      let username = document.getElementById('username').value
      let password = document.getElementById('password').value
      let loginData = JSON.stringify({
        object: 'user',
        type: 'register',
        username: username,
        password: password
      })

      if (username && password) {
        ipcRenderer.send('register', loginData)
        console.log(loginData)
      } else {
        alert('Please enter Username or Password')
      }

      document.getElementById('password').value = ''
    },
    submitUserInfo (type) {}
  }
}
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';

</style>

