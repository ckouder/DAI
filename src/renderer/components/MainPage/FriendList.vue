<template>
  <div class="menu">
    <ul class="menu-list">
      <li class="is-active" 
      v-for="friend in friendList" 
      v-bind:key="friend.id"
      @click="$emit('friendActivated', friend)">
        <FriendObj v-bind:frd="friend"></FriendObj>
      </li>
    </ul>
  </div>
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
        { id: 2, name: 'Lambda', icon: 'lambda.icon', msgNum: 2 },
        { id: 3, name: 'James', icon: 'lambda.icon', msgNum: 9 },
        { id: 4, name: 'Ronaldo', icon: 'Ronaldo.icon', msgNum: 99 }
      ]
    }
  },
  methods: {
    changeFriend (friend) {
      console.log(`${friend.name} is changed`)
    }
  }
}
</script>

<style>

</style>

