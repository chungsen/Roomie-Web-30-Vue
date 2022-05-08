<template>
  <div class="chat.container" v-bind:class="rootClassName">
    <div class="msg.container msg.container.received">
      <span class="msg.text.pc">{{ msgtext }}</span>
      <div class="msg.divider"></div>
      <span class="msg.text.pc">{{ msgtranslate }}</span>
    </div>
    <div class="timestamp.group">
      <span class="tools.timestamp.pc">{{ timestamp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolsmsgguest',
  props: {
    timestamp: {
      type: String,
      default: 'user name - 13:59 PM',
    },
    msgtext: {
      type: String,
      default: 'guest msg',
    },
    msgtranslate: {
      type: String,
      default: 'msg translate',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>








</style>
