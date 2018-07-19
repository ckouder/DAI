<template>
  <div class="list-group list-group-flush">
    <!-- friend object -->
    <a 
      href="#"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      v-for="friend in Object.keys(msgInfo)" 
      v-bind:key="friend"
      @click="clearNotification(friend)">
        
        <!-- friend Name and icon -->
        {{ msgInfo[friend].username }}

        <!-- message notifications -->
        <span v-if="msgInfo[friend].msgNum != 0" class="badge badge-danger budge-pill">
          {{ msgInfo[friend].msgNum }}
        </span>
    </a>
  </div>
</template>

<script>
export default {
  props: [ 'msgInfo' ],
  methods: {
    clearNotification (friend) {
      msgInfo[friend].msgNum = 0
    }
  }
}
</script>

<style lang="sass">

</style>

