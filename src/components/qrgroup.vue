<template>
  <div class="qr_group" v-bind:class="rootClassName">
    <div class="qr.room.info">
      <span class="text.small.semibold qr.label.text">
        <span>scan to change</span>
      </span>
      <span class="qr.room.number">{{ location }}</span>
    </div>
    <div class="qr.box">
      <svg viewBox="0 0 804.5714285714286 1024" class="max.icon.white">
        <path
          d="M219.429 658.286v73.143h-73.143v-73.143h73.143zM219.429 219.429v73.143h-73.143v-73.143h73.143zM658.286 219.429v73.143h-73.143v-73.143h73.143zM73.143 804h219.429v-218.857h-219.429v218.857zM73.143 365.714h219.429v-219.429h-219.429v219.429zM512 365.714h219.429v-219.429h-219.429v219.429zM365.714 512v365.714h-365.714v-365.714h365.714zM658.286 804.571v73.143h-73.143v-73.143h73.143zM804.571 804.571v73.143h-73.143v-73.143h73.143zM804.571 512v219.429h-219.429v-73.143h-73.143v219.429h-73.143v-365.714h219.429v73.143h73.143v-73.143h73.143zM365.714 73.143v365.714h-365.714v-365.714h365.714zM804.571 73.143v365.714h-365.714v-365.714h365.714z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Qrgroup',
  props: {
    location: {
      type: String,
      default: 'Room 1204',
    },
    rootClassName: String,
  },
}
</script>
