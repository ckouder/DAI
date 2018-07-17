<template>
  <div class="columns is-mobile">
    <FriendList class="column is-one-third"></FriendList>
    <ChatBox class="column is-two-thirds"></ChatBox>
  </div>
</template>

<script>
  import ChatBox from './LandingPage/ChatBox'
  import FriendList from './LandingPage/FriendList'

  export default {
    name: 'landing-page',
    components: { FriendList, ChatBox }
  }
</script>

<style lang="sass">
  @import '~normalize.css/normalize.css'
  @import '~bulma/bulma.sass'
  @import '~bulma/sass/utilities/initial-variables.sass'

</style>

<style>
  * {
    overflow: hidden;
  }
</style>
