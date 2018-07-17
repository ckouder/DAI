<template>
    <div class="is-offset-one-third">
      <MessageBox></MessageBox>
      <ToolBar></ToolBar>
      <EditBox></EditBox>
    </div>
</template>

<script>
import ToolBar from './ChatBox/ToolBar'
import MessageBox from './ChatBox/MessageBox'
import EditBox from './ChatBox/EditBox'

export default {
  components: { MessageBox, ToolBar, EditBox }
}
</script>

<style>

</style>
