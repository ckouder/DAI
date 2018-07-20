<template>
  <div class="list-group list-group-flush">
    <!-- friend object -->
    <a 
      href="#"
      class="list-group-item list-group-item-action d-flex justify-content-between align-items-center"
      v-for="id in Object.keys(msgInfo)" 
      v-bind:key="id"
      @click="updateChat(id);">
        
        <!-- friend Name and icon -->
        {{ msgInfoData[id].username }}

        <!-- message notifications -->
        <span v-if="msgInfoData[id].msgNum != 0" class="badge badge-danger budge-pill">
          {{ msgInfoData[id].msgNum }}
        </span>
    </a>
  </div>
</template>

<script>
export default {
  props: [ 'msgInfo' ],
  data () {
    return {
      msgInfoData: this.msgInfo
    }
  },
  methods: {
    updateChat (id) {
      this.$emit('chat-update', id)
      this.clearNotification(id)
    },
    clearNotification (id) {
      this.msgInfoData[id].msgNum = 0
    }
  }
}
</script>

<style lang="sass">

</style>

