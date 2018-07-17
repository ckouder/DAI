<template>
  <div class="is-offset-one-third grey-background columns is-desktop">
    <MessageBox class="column"></MessageBox>
    <EditBox class="column"></EditBox>
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
  .grey-background {
    background: ghostwhite;
  }
</style>
