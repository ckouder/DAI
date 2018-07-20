<template>
  <span v-if="num != 0" class="badge badge-danger badge-pill">{{ num }}</span>
</template>

<script>
export default {
  props: ['num']
}
</script>

<style>
</style>
