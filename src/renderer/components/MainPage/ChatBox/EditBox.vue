<template>
  <div class="field">
    <ToolBar></ToolBar>
    <div class="control">
      <textarea class="textarea" name="message" id="message" cols="30" rows=5></textarea>
    </div>
      <button class="button is-primary">Send</button>
  </div>
</template>

<script>
import ToolBar from './EditBox/ToolBar'

export default {
  name: 'edit-box',
  components: { ToolBar }
}
</script>

<style>
</style>
