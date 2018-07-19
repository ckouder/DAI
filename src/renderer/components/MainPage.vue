<template>
  <div class="mainpage">
    <FriendList class="friendlist"></FriendList>
    <ChatBox></ChatBox>
  </div>
</template>

<script>
  import ChatBox from './MainPage/ChatBox'
  import FriendList from './MainPage/FriendList'

  export default {
    name: 'main-page',
    components: { FriendList, ChatBox }
  }
</script>

<style lang="sass">
  @import '~normalize.css/normalize.css'
  @import '~bulma/bulma.sass'
  @import '~bulma/sass/utilities/initial-variables.sass'

</style>

<style>
  html {
    overflow: hidden;
  }

  .mainpage {
    display: flex;
    flex-direction: row;
  }

  .friendlist {
    flex-grow: 2;
    min-width: 15%;
  }
  
</style>
