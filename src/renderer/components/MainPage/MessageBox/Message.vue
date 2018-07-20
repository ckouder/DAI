<template>
  <li v-if="message.state=='send'">
    <div class='bubble bubble-to float-right'>{{ message.shell }}</div>
  </li>
  <li v-else>
    <div class='bubble bubble-from'>{{ message.shell }}</div>
  </li>
</template>

<script>
export default {
  props: ['message']
}
</script>

<style>
  .bubble {
    display: inline-block;
    max-width: 80%;
    padding: .5em 1em;
    box-shadow: 0 2px 4px 0 rgba(0,0,0,0.50);
    margin-bottom: 2em;
  }
  .bubble-from {
    background: chartreuse;
  }

  .bubble-to {
    background: aliceblue;
  }
</style>
