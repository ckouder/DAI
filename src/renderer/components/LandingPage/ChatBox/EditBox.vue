<template>
  <div class="field">
    <div class="control">
      <textarea class="textarea" name="message" id="message" cols="30" rows=6></textarea>
    </div>
      <button class="button is-primary">Send</button>
  </div>
</template>

<script>
import TooBar from './EditBox/ToolBar'

export default {
  name: 'edit-box',
  components: { TooBar }
}
</script>

<style>

</style>
