<template>
  <li v-if="msg.participants.from=='mike'" class='is-clearfix'>
    <div class='bubble bubble-to is-pulled-right'>{{ msg.shell }}</div>
  </li>
  <li v-else class='is-clearfix has-text-left' >
    <div class='bubble bubble-from'>{{ msg.shell }}</div>
  </li>
</template>

<script>
export default {
  props: ['msg'],
  name: 'message'
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
