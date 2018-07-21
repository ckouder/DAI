<template>
  <div class="field">
    <div class="form-group">
      <textarea class="form-control" name="message" id="message" cols="30" rows=5 placeholder="Input text here.."></textarea>
    </div>
      <ToolBar @insert-ghost='insertGhost'></ToolBar>
  </div>
</template>

<script>
import ToolBar from './EditBox/ToolBar'

export default {
  name: 'edit-box',
  components: { ToolBar },
  methods: {
    insertGhost () {
      let messageEl = document.getElementById('message')

      // console.log(!messageEl.value.search(/(<<).*(>>)/))

      if (!messageEl.value.trim()) {
        this.alertTextInput()
      } else if (messageEl.value.search(/(<<).*(>>)/) === -1) {
        console.log('Insert Ghost')
        messageEl.value += '<< please input your GHOST here >>'
        messageEl.setSelectionRange(messageEl.value.length - 31, messageEl.value.length - 3)
        messageEl.focus()
      }
    },
    alertTextInput () {
      alert('you need to input SHELL first')
    }
  }
}
</script>

<style>
</style>
