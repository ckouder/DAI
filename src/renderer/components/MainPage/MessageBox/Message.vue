<template>
  <li v-if="message.state=='send'">
    <div class='bubble bubble-to float-right'
    @mousedown="keyLoggerStart" 
    @mouseup="keyLoggerEnd">
      {{ getGhost }}
    </div>
  </li>
  <li v-else>
    <div class='bubble bubble-from' 
    @mousedown="keyLoggerStart" 
    @mouseup="keyLoggerEnd">
      {{ getGhost }}
    </div>
  </li>
</template>

<script>
export default {
  props: ['message'],
  data () {
    return {
      pressStart: 0
    }
  },
  computed: {
    getGhost () {
      if (this.message.showGhost && this.message.ghost) {
        return this.message.ghost
      } else {
        return this.message.shell
      }
    }
  },
  methods: {
    keyLoggerStart: function (e) {
      this.pressStart = Date.now()
    },
    keyLoggerEnd: function (e) {
      let pressEnd = Date.now()
      if (pressEnd - this.pressStart >= 2500) {
        this.message.showGhost = true
        console.log('the Ghost should be shown')
      }
    }
  }
}
</script>

<style>
  .bubble {
    display: inline-block;
    max-width: 80%;
    padding: .5em 1em;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    margin: 1em 0;
  }
  .bubble-from {
    background: chartreuse;
  }

  .bubble-to {
    background: aliceblue;
  }
</style>
