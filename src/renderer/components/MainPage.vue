<template>
  <div class="container-fluid">
    <div class="row" @chat-update="updateChat(id)">
      <FriendList class="col-3 p-0" :msgInfo="getMsgInfo"></FriendList>
      <div class="col-9 p-0">
        <div class="row m-0">
          <MessageBox class="col-12" 
          :currentChat="currentChat" 
          :messages="messages"></MessageBox>
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
  import { Messages, UserCheatSheet } from './TestMessages.js'

  export default {
    name: 'main-page',
    components: { FriendList, MessageBox, EditBox },
    data () {
      return {
        messages: Messages,
        currentChat: undefined
      }
    },
    computed: {
      getMsgInfo: function () {
        var msgInfo = {}

        for (let user of Object.keys(this.messages)) {
          let username = UserCheatSheet[user]

          msgInfo[user] = {}
          msgInfo[user].username = username
          msgInfo[user].msgNum = this.messages[user].length
        }

        return msgInfo
      }
    },
    methods: {
      updateChat (id) {
        this.currentChat = id
        console.log(this.currentChat)
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
