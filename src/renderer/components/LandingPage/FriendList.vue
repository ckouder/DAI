<template>
  <aside class="menu is-fixed">
    <ul class="menu-list">
      <li class="is-active" v-for="friend in friendList" v-bind:key="friend.id">
        <FriendObj v-bind:frd="friend"></FriendObj>
      </li>
    </ul>
  </aside>
</template>

<script>
import FriendObj from './FriendList/FriendObj'

export default {
  components: { FriendObj },
  data () {
    return {
      friendList: [
        { id: 0, name: 'Morris', icon: 'morris.icon', msgNum: 5 },
        { id: 1, name: 'Gold', icon: 'gold.icon', msgNum: 3 },
        { id: 2, name: 'Lambda', icon: 'lambda.icon', msgNum: 0 },
        { id: 3, name: 'James', icon: 'lambda.icon', msgNum: 0 },
        { id: 4, name: 'Ronaldo', icon: 'Ronaldo.icon', msgNum: 0 }
      ]
    }
  }
}
</script>

<style>
  .is-fixed {
    position: fixed;
  }
</style>

