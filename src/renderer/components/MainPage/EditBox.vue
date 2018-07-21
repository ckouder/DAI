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
      @focus="timeLoggerStart"
      @keyup.exact.enter="send"
      ></textarea>
    </div>
      <ToolBar 
      @insert-ghost='insertGhost'
      @insert-dictionary='insertDictionary'
      @send-message-by-key="send"
      ></ToolBar>
  </div>
</template>

<script>
import ToolBar from './EditBox/ToolBar'

export default {
  name: 'edit-box',
  components: { ToolBar },
  data () {
    return {
      editDuration: 0
    }
  },
  methods: {
    send () {
      const DURATION_LIMIT = 120000
      let messageEl = document.getElementById('message')

      if (messageEl.value.trim()) {
        let sendPackage = this.getMsg(messageEl.value)

        this.editDuration = Date.now() - this.editDuration
        messageEl.value = ''

        console.log(sendPackage)

        this.$emit('send-message', {
          object: 'message',
          type: 'insert',
          postBy: undefined,
          getBy: undefined,
          shell: sendPackage.shell,
          ghost: sendPackage.ghost,
          hasGhost: sendPackage.hasGhost,
          duration: this.editDuration,

          // this should be combined with the personal setting
          showDuration: ((this.editDuration >= DURATION_LIMIT) ? 1 : 0) && true
        })
      }
    },
    getMsg (str) {
      let regShell = /[^]+(?=<<)/g
      let regGhost = /<<(.*)>>/g

      let shell = str.match(regShell)
      let ghost = ''

      let hasGhost = str.match(regGhost)

      if (hasGhost) {
        let ghostlt = hasGhost.toString().indexOf('<<') + 2
        let ghostgt = hasGhost.toString().indexOf('>>')

        ghost = hasGhost.toString().substring(ghostlt, ghostgt)
      }

      if (!str.match(regShell)) {
        shell = str
      }

      console.log(hasGhost)
      console.log(str.match(regShell))

      return {
        shell: shell,
        ghost: ghost,
        hasGhost: !!hasGhost
      }
    },
    timeLoggerStart () {
      this.editDuration = Date.now()
    },
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
        // console.log(i)
        messageEl.setSelectionRange(i + 3, i + 12)
      }
      messageEl.focus()
    },
    alertTextInput () {
      alert('you need to input SHELL first')
    }
  }
}
</script>

<style>
</style>
