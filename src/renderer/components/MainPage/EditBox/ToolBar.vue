<template>
    <div class="btn-group d-flex justify-content-center">
      <button type="button" class="btn btn-outline-dark" v-for="addon in addons" :key="addon.name" @click="addon.method">
        {{ addon.name }}
      </button>
      <SettingPanel :showSetting='showSetting' @close-setting='closeSetting'></SettingPanel>
    </div>
</template>

<script>
import SettingPanel from './ToolBar/SettingPanel'

export default {
  components: { SettingPanel },
  data () {
    return {
      showSetting: false,
      addons: [
        {
          name: 'Setting',
          method: () => {
            this.showSetting = true
          }
        },
        {
          name: 'Dictionary',
          method: () => {}
        },
        {
          name: 'Ghost',
          method: () => {}
        }
      ]
    }
  },
  methods: {
    closeSetting (state) {
      this.showSetting = state
    }
  }
}
</script>

<style>

</style>
