<template>
  <div
    class="tools.chat.status.icon.circle tools.boxcolor.delivered"
    v-bind:class="rootClassName"
  >
    <span class="tools.chat.status.icon.text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Toolssessiontagdelivered',
  props: {
    text: {
      type: String,
      default: '5',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>




</style>
