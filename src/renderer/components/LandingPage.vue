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
      this.submitUserInfo('login')
    },
    submitRegisterInfo () {
      this.submitUserInfo('register')
    },
    submitUserInfo (type) {
      let username = document.getElementById('username').value
      let password = document.getElementById('password').value

      if (username && password) {
        ipcRenderer.send(type, JSON.stringify({
          object: 'user',
          type: type,
          username: username.toString(),
          password: password.toString()
        }))

        console.log('the user information has been sent')
      } else {
        alert('Please enter Username or Password')
      }
    }
  }
}
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';

</style>

