<template>
  <div class="chat.container">
    <div class="msg.container msg.container.received">
      <img :alt="image_alt" :src="image_src" class="msg.img" />
    </div>
    <div class="timestamp.group">
      <span class="timestamp">{{ timestamp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roomiemsghotelimg',
  props: {
    image_src: String,
    timestamp: {
      type: String,
      default: 'dept name - 13:59 PM',
    },
    image_alt: {
      type: String,
      default: 'image',
    },
  },
}
</script>
