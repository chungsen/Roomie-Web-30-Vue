<template>
  <div class="chat.container" v-bind:class="rootClassName">
    <div class="msg.container msg.container.received">
      <span class="msg.text">{{ msgtext }}</span>
      <div class="msg.divider"></div>
      <span class="msg.text">{{ msgtranslate }}</span>
      <button class="msg.text button">{{ button }}</button>
    </div>
    <div class="timestamp.group">
      <span class="timestamp">{{ timestamp }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Roomiemsghotelbutton',
  props: {
    rootClassName: String,
    button: {
      type: String,
      default: 'button title',
    },
    timestamp: {
      type: String,
      default: 'dept name - 13:59 PM',
    },
    msgtext: {
      type: String,
      default: 'hotel msg',
    },
    msgtranslate: {
      type: String,
      default: 'msg translate',
    },
  },
}
</script>
