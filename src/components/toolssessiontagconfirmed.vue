<template>
  <div
    class="tools.boxcolor.confirmed tools.chat.status.icon.circle"
    v-bind:class="rootClassName"
  >
    <span class="tools.chat.status.icon.text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Toolssessiontagconfirmed',
  props: {
    rootClassName: String,
    text: {
      type: String,
      default: '1',
    },
  },
}
</script>

<style scoped>




</style>
