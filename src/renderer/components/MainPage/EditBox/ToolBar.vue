<template>
    <div class="btn-group d-flex justify-content-center pb-2">
      <button type="button" class="btn btn-outline-dark" v-for="addon in addons" v-bind:key="addon.name">
        {{ addon.name }}
      </button>
    </div>
</template>

<script>
export default {
  data () {
    return {
      addons: [
        {
          name: 'setting',
          method: function () {}
        },
        {
          name: 'dictionary',
          method: function () {}
        },
        {
          name: 'ghost',
          method: function () {}
        }
      ]
    }
  }
}
</script>

<style>

</style>
