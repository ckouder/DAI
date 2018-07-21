<template>
  <div v-if="showSetting">
    <div class="wrapper" @click="closeSetting"></div>
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
      settings: [
        {
          name: 'User Profile',
          method: () => {}
        },
        {
          name: 'Friend Management',
          method: () => {}
        },
        {
          name: 'Edit Duration',
          method: () => {}
        },
        {
          name: 'Dictionary Management',
          method: () => {}
        },
        {
          name: 'Logout',
          method: () => {}
        }
      ]
    }
  },
  methods: {
    closeSetting () {
      console.log('setting is going to close')
      this.$emit('close-setting')
    }
  }
}
</script>

<style scoped>
  * {
    transition-duration: 1s !important;
  }

  .wrapper {
    position: fixed;
    left: 0vw;
    top: 0vh;
    height: 120vh;
    width: 120vw;
    background: rgba(0, 0, 0, 0.6);
    z-index: 100;
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
    z-index: 1000;
    animation: show .5s forwards
  }

  @keyframes show {
    to {
      right: 0px;
    }
  }
</style>
