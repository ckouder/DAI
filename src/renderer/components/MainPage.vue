<template>
  <div class="container-fluid">
    <div class="row">
      <FriendList class="col-3 p-0"></FriendList>
      <ChatBox class="col-9 p-0"></ChatBox>
    </div>
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

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
  @import '~normalize.css/normalize';

  html {
    overflow: hidden;
  }
</style>
