<template>
  <span v-if="num != 0">{{ num }}</span>
</template>

<script>
export default {
  props: ['num']
}
</script>

<style scoped>
  span {
    background: red;
    padding: 0px 5px;
    border-radius: 50%;
    color: white;
    font-weight: 700;
  }
</style>
