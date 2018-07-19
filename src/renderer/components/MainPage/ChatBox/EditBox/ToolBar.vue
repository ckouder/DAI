<template>
    <div class="tabs is-centered">
      <ul>
        <li v-for="addon in addons" v-bind:key="addon.name"><a>{{ addon.name }}</a></li>
      </ul>
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
