<template>
  <div class="chat.container">
    <div class="msg.container msg.container.received">
      <span class="msg.text.pc">{{ msgtext }}</span>
      <button class="button msg.text.pc">{{ button }}</button>
    </div>
    <div class="timestamp.group">
      <span class="tools.timestamp.pc">{{ timestamp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Toolsmsgguestorder',
  props: {
    button: {
      type: String,
      default: 'Order',
    },
    timestamp: {
      type: String,
      default: 'location name - 13:58 PM',
    },
    msgtext: {
      type: String,
      default: ' FOOD ORDER - 2 REST - 4 ITEMS - RM 138.00',
    },
  },
}
</script>
