<template>
    <ul class="messagebox">
      <Message 
      v-for='message in messages' 
      v-bind:key='message.timestamp' 
      v-bind:msg='message'
      v-on:friend-activated="console.log(friend.name, 'is activated')"
      ></Message>
    </ul>
</template>

<script>
import Message from './MessageBox/Message'

export default {
  name: 'message-box',
  components: { Message }
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
