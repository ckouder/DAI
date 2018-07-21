<template>
  <div class="field">
    <div class="form-group">
      <textarea class="form-control" name="message" id="message" cols="30" rows=5 placeholder="Input text here.."></textarea>
    </div>
      <ToolBar 
      @insert-ghost='insertGhost'
      @insert-dictionary='insertDictionary'></ToolBar>
  </div>
</template>

<script>
import ToolBar from './EditBox/ToolBar'

export default {
  name: 'edit-box',
  components: { ToolBar },
  computed: {
    messageEl: document.getElementById('message')
  },
  methods: {
    insertGhost () {
      if (!this.messageEl.value.trim()) {
        this.alertTextInput()
      } else if (this.messageEl.value.search(/(<<).*(>>)/) === -1) {
        console.log('Insert Ghost')
        this.messageEl.value += '<< please input your GHOST here >>'
        this.messageEl.setSelectionRange(this.messageEl.value.length - 31, this.messageEl.value.length - 3)
        this.messageEl.focus()
      }
    },
    insertDictionary () {
      // console.log(this.messageEl.onselect)
      if (this.messageEl.onselect) {
        this.messageEl.value = `(${this.messageEl.value})[]`
        this.messageEl.setSelectionRange(this.messageEl.value.length - 2, this.messageEl.value.length - 2)
      } else {
        this.messageEl.value += '()[]'
        this.messageEl.setSelectionRange(this.messageEl.value.length - 4, this.messageEl.value.length - 4)
      }
      this.messageEl.focus()
    },
    alertTextInput () {
      alert('you need to input SHELL first')
    }
  }
}
</script>

<style>
</style>
