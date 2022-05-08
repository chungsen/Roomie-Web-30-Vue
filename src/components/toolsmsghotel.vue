<template>
  <div class="chat.container.guest chat.container" v-bind:class="rootClassName">
    <div class="msg.container.sent msg.container">
      <span class="msg.text.pc">{{ msgtext }}</span>
    </div>
    <div class="timestamp.group">
      <span class="tools.timestamp.pc">{{ timestamp }}</span>
      <img :alt="image_alt" :src="image_src" class="msg.tick.icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolsmsghotel',
  props: {
    rootClassName: String,
    msgtext: {
      type: String,
      default: 'hotel msg',
    },
    timestamp: {
      type: String,
      default: 'user name - 13:59 PM',
    },
    image_alt: String,
    image_src: {
      type: String,
      default: 'f91242d9-e6f6-4151-8b72-4a86f2fe35e6',
    },
  },
}
</script>

<style scoped>







</style>
