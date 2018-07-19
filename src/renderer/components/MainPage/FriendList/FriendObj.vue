<template>
    <!-- <img v-bind:src="friend.icon"> -->
    <a v-on:friendActivated="eraseNotification(frd)">
      <p class="friendname">{{ frd.name }}</p>
      <NotificationObj class="is-pulled-right" v-bind:num="frd.msgNum"></NotificationObj>
    </a>
</template>

<script>
  import NotificationObj from './FriendObj/NotificationObj'

  export default {
    components: { NotificationObj },
    props: ['frd'],
    methods: {
      eraseNotification (friend) {
        friend.msgNum = 0
        console.log('erase success')
      }
    }
  }
</script>

<style>
  .friendname {
    display: inline-block;
  }
</style>

