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
  props: [ 'msgNum' ],
  methods: {
    updateMessageBoxAndNotifications (friend) {
      friend.msgNum = 0
      // need to update MessageBox content
    }
  }
}
</script>

<style lang="sass">

</style>

