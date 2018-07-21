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
import { Addons } from './addonConfig.js'

export default {
  components: { SettingPanel },
  data () {
    let addons = Addons(this)

    console.log(addons)

    return {
      showSetting: false,
      addons: addons
    }
  },
  methods: {
    closeSetting (state) {
      this.showSetting = false
    }
  }
}
</script>

<style>

</style>
