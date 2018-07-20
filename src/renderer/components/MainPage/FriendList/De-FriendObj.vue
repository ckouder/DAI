<template>
    <!-- <img v-bind:src="friend.icon"> -->
    <a v-on:friendActivated="eraseNotification(frd)">
      {{ frd.name }}
      <NotificationObj class="" v-bind:num="frd.msgNum"></NotificationObj>
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

</style>

