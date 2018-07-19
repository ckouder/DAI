<template>
  <div class="container-fluid">
    <div class="row">
      <FriendList class="col-3 p-0" :msgNum="msgNum"></FriendList>
      <div class="col-9 p-0">
        <div class="row m-0">
          <MessageBox class="col-12"></MessageBox>
          <EditBox class="col-12"></EditBox>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import FriendList from './MainPage/FriendList'
  import MessageBox from './MainPage/MessageBox'
  import EditBox from './MainPage/EditBox'
  import { Messages } from './TestMessages.js'

  export default {
    name: 'main-page',
    components: { FriendList, MessageBox, EditBox },
    computed: {
      msgNum: () => {
        var msgNum = {}
        for (let user of Object.keys(this.messages)) {
          msgNum[user] = this.messages[user].length
        }

        return msgNum
      }
    },
    data () {
      return {
        messages: Messages
      }
    }
  }
</script>

<style lang="scss">
  @import '~bootstrap/scss/bootstrap';
  @import '~normalize.css/normalize';

  html {
    overflow: hidden;
  }
</style>
