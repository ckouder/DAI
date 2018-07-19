<template>
  <div>
    <div class="has-text-centered">
      <h1>Login</h1>
      <p>Dictophobia Assistere Implementation</p>
    </div>
    <form action="login">
      <label for="username">Username: </label>
      <input type="text" name="username" id="username">
      <label for="password">Password: </label>
      <input type="text" name="password" id="password">
    </form>
    <button type="submit">
      Submit
    </button>
  </div>
</template>

<script>
export default {
  name: 'landing-page',
  methods: {

  }
}
</script>

<style lang="sass">
  @import '~bulma/bulma.sass';

  html
    overflow: hidden
</style>
