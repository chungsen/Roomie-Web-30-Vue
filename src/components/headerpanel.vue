<template>
  <div class="head.panel" v-bind:class="rootClassName">
    <img :alt="image_alt1" :src="image_src1" class="hotel.icon" />
    <div class="header.ad.panel">
      <img :alt="image_alt" :src="image_src" class="header.adpanel.img" />
    </div>
    <app-qrgroup></app-qrgroup>
  </div>
</template>

<script>
import AppQrgroup from './qrgroup'

export default {
  name: 'Headerpanel',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    image_src1: {
      type: String,
      default: '/playground_assets/hotel_logo-1500h.png',
    },
    rootClassName: String,
    image_alt1: {
      type: String,
      default: 'image',
    },
    image_src: {
      type: String,
      default: '/playground_assets/blank_ad-200h.png',
    },
  },
  components: {
    AppQrgroup,
  },
}
</script>

<style scoped>




</style>
