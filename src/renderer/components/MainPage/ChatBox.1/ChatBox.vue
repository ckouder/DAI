<template>
  <div class="grey-background chatbox">
    <MessageBox></MessageBox>
    <EditBox></EditBox>
  </div>
</template>

<script>
import MessageBox from './ChatBox/MessageBox'
import EditBox from './ChatBox/EditBox'

export default {
  components: { MessageBox, EditBox }
}
</script>

<style>
  .chatbox {
    display: flex;
    flex-direction: column;
    height: 100vh;
    overflow: hidden;
  }

  .grey-background {
    background: ghostwhite;
  }
</style>
