<template>
  <div class="chat.container">
    <div class="msg.container msg.container.received">
      <img :alt="image_alt" :src="image_src" class="msg.img" />
    </div>
    <div class="timestamp.group">
      <span class="tools.timestamp.pc">{{ timestamp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolsmsgguestimg',
  props: {
    image_src: String,
    timestamp: {
      type: String,
      default: 'location username - 13:59 PM',
    },
    image_alt: String,
  },
}
</script>
