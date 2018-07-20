<template>
    <ul class="messagebox">
      <Message 
      v-for='message in messages' 
      :key='message.timestamp' 
      :message='message'></Message>
    </ul>
</template>

<script>
import Message from './MessageBox/Message'

export default {
  props: [ 'currentChat', 'messages' ],
  components: { Message },
  data () {
    return {
      messageData: this.messages
    }
  }
}
</script>

<style>
  .messagebox {
    background-color: ghostwhite;
    height: 60vh;
    overflow-y: scroll;
    padding: 0em 1em;
  }
</style>
