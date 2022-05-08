<template>
  <div class="chat.container.guest chat.container" v-bind:class="rootClassName">
    <div class="msg.container.sent msg.container">
      <span class="msg.text">{{ msgtext }}</span>
    </div>
    <div class="timestamp.group">
      <span class="timestamp">{{ timestamp }}</span>
      <img
        :alt="image_alt"
        :src="image_src"
        class="roomie.msg.guest-image msg.tick.icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roomiemsgguest',
  props: {
    image_src: {
      type: String,
      default: 'f91242d9-e6f6-4151-8b72-4a86f2fe35e6',
    },
    timestamp: {
      type: String,
      default: '13:59 PM',
    },
    image_alt: String,
    msgtext: {
      type: String,
      default: 'guest msg',
    },
    rootClassName: String,
  },
}
</script>

<style scoped>
.roomie\.msg\.guest-image {
  height: 1.5vw;
}
</style>
