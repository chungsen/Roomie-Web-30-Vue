<template>
  <div class="chat.container.guest chat.container">
    <div class="msg.container.sent msg.container">
      <img :alt="image_alt" :src="image_src" class="msg.img" />
    </div>
    <div class="timestamp.group">
      <span class="timestamp">{{ timestamp }}</span>
      <img
        :alt="image_alt1"
        :src="image_src1"
        class="roomie.msg.guest.img-image1 msg.tick.icon"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roomiemsgguestimg',
  props: {
    image_src: String,
    image_src1: {
      type: String,
      default: 'f91242d9-e6f6-4151-8b72-4a86f2fe35e6',
    },
    timestamp: {
      type: String,
      default: '13:59 PM',
    },
    image_alt1: String,
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>

<style scoped>
.roomie\.msg\.guest\.img-image1 {
  height: 1.5vw;
}
</style>
