<template>
  <div class="chat.container.guest chat.container">
    <div class="msg.container.sent msg.container">
      <img :alt="image_alt" :src="image_src" class="msg.img" />
    </div>
    <div class="timestamp.group">
      <span class="tools.timestamp.pc">{{ timestamp }}</span>
      <img :alt="image_alt1" :src="image_src1" class="msg.tick.icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolsmsghotelimg',
  props: {
    image_alt: String,
    timestamp: {
      type: String,
      default: 'user name - 13:59 PM',
    },
    image_src1: {
      type: String,
      default: 'f91242d9-e6f6-4151-8b72-4a86f2fe35e6',
    },
    image_alt1: String,
    image_src: String,
  },
}
</script>
