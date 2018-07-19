<template>
    <ul class="messagebox">
      <Message 
      v-for='message in messages' 
      v-bind:key='message.timestamp' 
      v-bind:msg='message'
      v-on:friend-activated="console.log(friend.name, 'is activated')"
      ></Message>
    </ul>
</template>

<script>
import Message from './MessageBox/Message'

export default {
  name: 'message-box',
  components: { Message },
  data () {
    return {
      messages:
      [
        {
          type: 'message',
          participants: {
            from: 'mike', // this should be currentUser later,
            to: 'lambda'
          },
          shell: 'let\'s chat!',
          ghost: undefined,
          duration: '', // for the duration alert
          timestamp: new Date()
        },
        {
          type: 'message',
          participants: {
            from: 'lambda', // this should be currentUser later,
            to: 'mike'
          },
          shell: 'Fine, it works!',
          ghost: undefined,
          duration: '',
          timestamp: new Date()
        },
        {
          type: 'message',
          participants: {
            from: 'mike', // this should be currentUser later,
            to: 'lambda'
          },
          shell: 'Eiusmod reprehenderit do elit sint proident fugiat. Adipisicing quis adipisicing eu tempor nisi labore qui. Elit incididunt deserunt sunt consectetur. Amet anim sint culpa sint officia non aliqua culpa deserunt. Adipisicing laborum officia Lorem irure tempor et. Eiusmod proident veniam magna nulla magna.',
          ghost: undefined,
          duration: '', // for the duration alert
          timestamp: new Date()
        },
        {
          type: 'message',
          participants: {
            from: 'lambda', // this should be currentUser later,
            to: 'mike'
          },
          shell: 'Enim duis veniam irure cillum exercitation veniam ad ex culpa ex consectetur. Ut fugiat duis duis culpa minim occaecat in id nulla esse mollit dolor deserunt est. Consectetur adipisicing amet qui ad. Anim tempor non sint reprehenderit esse eiusmod est mollit quis tempor.',
          ghost: undefined,
          duration: '',
          timestamp: new Date()
        }
      ]
    }
  }
}
</script>

<style>
  .messagebox {
    overflow-y: scroll;
    padding: 0em 1em;
  }
</style>
