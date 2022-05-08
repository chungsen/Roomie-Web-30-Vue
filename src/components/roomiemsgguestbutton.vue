<template>
  <div class="chat.container.guest chat.container">
    <div class="msg.container.sent msg.container">
      <span class="msg.text">{{ msgtext }}</span>
      <button class="msg.text button">{{ button }}</button>
    </div>
    <div class="timestamp.group">
      <span class="timestamp">{{ timestamp }}</span>
      <img
        :alt="image_alt"
        :src="image_src"
        class="roomie.msg.guest.button-image msg.tick.icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roomiemsgguestbutton',
  props: {
    button: {
      type: String,
      default: 'title',
    },
    image_alt: String,
    timestamp: {
      type: String,
      default: '13:59 PM',
    },
    msgtext: {
      type: String,
      default: 'msg',
    },
    image_src: {
      type: String,
      default: 'f91242d9-e6f6-4151-8b72-4a86f2fe35e6',
    },
  },
}
</script>

<style scoped>
.roomie\.msg\.guest\.button-image {
  height: 1.5vw;
}
</style>
