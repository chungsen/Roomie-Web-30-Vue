<template>
  <div class="head.panel" v-bind:class="rootClassName">
    <div class="back.button.group">
      <svg viewBox="0 0 1024 1024" class="header.panel.level-backicon icon_max">
        <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
      </svg>
    </div>
    <div class="hotel.name.group">
      <span class="text.45.bold.black">{{ category }}</span>
    </div>
    <app-qrgroup rootClassName="qrgroup-root-class-name"></app-qrgroup>
  </div>
</template>

<script>
import AppQrgroup from './qrgroup'

export default {
  name: 'Headerpanellevel',
  props: {
    rootClassName: String,
    category: {
      type: String,
      default: 'Category Name',
    },
  },
  components: {
    AppQrgroup,
  },
}
</script>

<style scoped>
.header\.panel\.level-backicon {
  fill: var(--dl-color-gray-500);
}





</style>
