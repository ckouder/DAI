<template>
    <!-- <img v-bind:src="friend.icon"> -->
    <a>
      <p>
        {{ frd.name }}
        <NotificationObj class="is-pulled-right" v-bind:num="frd.msgNum"></NotificationObj>
      </p>
    </a>
</template>

<script>
  import NotificationObj from './FriendObj/NotificationObj'

  export default {
    components: { NotificationObj },
    props: ['frd']
  }
</script>

<style>

</style>
