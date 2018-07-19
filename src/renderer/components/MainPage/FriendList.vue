<template>
  <div class="list-group list-group-flush">
    <!-- friend object -->
    <a 
      href="#"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      v-for="friend in friendList" 
      v-bind:key="friend.id"
      @click="updateMessageBoxAndNotifications(friend)">
        
        <!-- friend Name and icon -->
        {{ friend.name }}

        <!-- message notifications -->
        <span v-if="friend.msgNum != 0" class="badge badge-danger budge-pill">{{ friend.msgNum }}</span>
    </a>
  </div>
</template>

<script>
export default {
  methods: {
    updateMessageBoxAndNotifications (friend) {
      friend.msgNum = 0
      // need to update MessageBox content
    }
  },
  data () {
    return {
      friendList: [
        { id: 0, name: 'Morris', icon: 'morris.icon', msgNum: 5 },
        { id: 1, name: 'Gold', icon: 'gold.icon', msgNum: 3 },
        { id: 2, name: 'Lambda', icon: 'lambda.icon', msgNum: 2 },
        { id: 3, name: 'James', icon: 'lambda.icon', msgNum: 0 },
        { id: 4, name: 'Ronaldo', icon: 'Ronaldo.icon', msgNum: 99 }
      ]
    }
  }
}
</script>

<style lang="sass">

</style>

