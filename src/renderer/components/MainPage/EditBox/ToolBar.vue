<template>
  <div class="row d-flex justify-content-between">
    <div class="btn-group col-9">
      <button type="button" class="btn btn-outline-dark" v-for="addon in addons" :key="addon.name" @click="addon.method">
        {{ addon.name }}
      </button>
      <SettingPanel :showSetting='showSetting' @close-setting='closeSetting'></SettingPanel>
    </div>
    <button class="col-2 btn btn-info mr-3" @click="$emit('send-message-by-key')">Send</button>
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
