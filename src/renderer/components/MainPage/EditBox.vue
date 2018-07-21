<template>
  <div class="field">
    <div class="form-group">
      <textarea 
      class="form-control" 
      name="message" 
      id="message" 
      cols="30" 
      rows=5 
      placeholder="Input Message here.."
      ></textarea>
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
  methods: {
    insertGhost () {
      let messageEl = document.getElementById('message')

      if (!messageEl.value.trim()) {
        this.alertTextInput()
      } else if (messageEl.value.search(/(<<).*(>>)/) === -1) {
        console.log('Insert Ghost')
        messageEl.value += '<< please input your GHOST here >>'
        messageEl.setSelectionRange(messageEl.value.length - 31, messageEl.value.length - 3)
        messageEl.focus()
      }
    },
    insertDictionary () {
      let messageEl = document.getElementById('message')
      // let message = messageEl.value
      // console.log(messageEl.onselect)

      if (messageEl.selectionStart) {
        let selectStr = messageEl.value.substring(messageEl.selectionStart, messageEl.selectionEnd)
        let strBefore = messageEl.value.substring(0, messageEl.selectionStart)
        let strAfter = messageEl.value.substring(messageEl.selectionEnd, messageEl.value.length)
        // console.log('found text selection, insert template in the selection')
        messageEl.value = `${strBefore} ((${selectStr}))[[ --dictionary content-- ]] ${strAfter}`

        let i = messageEl.value.lastIndexOf('[[')
        messageEl.setSelectionRange(i + 3, i + 25)
      } else {
        // console.log('no text selection found, insert template')
        messageEl.value += '(( --Title-- ))[[ --dictionary content-- ]]'

        let i = messageEl.value.lastIndexOf('((')
        console.log(i)
        messageEl.setSelectionRange(i + 3, i + 12)
      }
      messageEl.focus()
    },
    alertTextInput () {
      alert('you need to input SHELL first')
    },
    onSelect () {
      return true
    }
  }
}
</script>

<style>
</style>
