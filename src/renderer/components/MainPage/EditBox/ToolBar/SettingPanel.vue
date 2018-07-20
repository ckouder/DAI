<template>
  <div v-if="showSetting" class="wrapper" @click="closeSetting">
    <div class="setting-panel" :class="{ active: showSetting }">
      <ul class='list-group list-group-flush'>
        <li v-for="item in settings" :key="item.name" class='list-group-item'>
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: [ 'showSetting' ],
  data: () => {
    return {
      showSetting: this.showSetting,
      settings: [
        {
          name: 'User Profile',
          method: () => {}
        },
        {
          name: 'Edit Duration',
          method: () => {}
        },
        {
          name: 'Dictionary Management',
          method: () => {}
        }
      ]
    }
  },
  methods: {
    closeSetting () {
      this.showSetting = false
      this.$emit('close-setting', this.showSetting)
    }
  }
}
</script>

<style scoped>
  * {
    transition-duration: 2s !important;
  }

  .wrapper {
    position: fixed;
    left: 0vw;
    top: 0vh;
    height: 120vh;
    width: 120vw;
    background: rgba(0, 0, 0, 0.6);
    /* filter: blur(10px); */
  }

  .setting-panel {
    position: fixed;
    right: -300px;
    top: 0;
    height: 100vh;
    width: 300px;
    background: #fff;
    box-shadow: -2px 0px 9px black;
  }

  .active {
    right: 0;
  }
</style>
