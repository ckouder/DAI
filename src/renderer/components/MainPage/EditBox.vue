<template>
  <div class="field">
    <div class="form-group">
      <textarea class="form-control" name="message" id="message" cols="30" rows=5 placeholder="Input text here.."></textarea>
    </div>
      <ToolBar></ToolBar>
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
