<template>
  <div class='p-0'>
    <div class="navbar navbar-light bg-light d-flex justify-content-center box-shadow">
      <a class="navbar-brand">{{ currentFriend }}</a>
    </div>
    <ul class="messagebox">
      <Message 
      v-if='currentChat'
      v-for='message in messageData[currentChat]'
      :key='message.timestamp'
      :message='message'></Message>
    </ul>
  </div>
</template>

<script>
import Message from './MessageBox/Message'

export default {
  props: [ 'currentChat', 'messages', 'currentFriend' ],
  components: { Message },
  data () {
    return {
      messageData: this.messages
    }
  }
}
</script>

<style scoped>
  ul {
    list-style: none;
  }

  .box-shadow {
    box-shadow: 0px 3px 2px -2px rgba(0, 0, 0, 0.1);
  }

  .messagebox {
    background-color: ghostwhite;
    height: 55vh;
    overflow-y: scroll;
    padding: 0em 1em;
  }
</style>
