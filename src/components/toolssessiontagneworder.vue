<template>
  <div
    class="tools.boxcolor.neworders tools.chat.status.icon.circle"
    v-bind:class="rootClassName"
  >
    <span class="tools.chat.status.icon.text">{{ text }}</span>
  </div>
</template>

<script>
export default {
  name: 'Toolssessiontagneworder',
  props: {
    text: {
      type: String,
      default: '2',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>




</style>
