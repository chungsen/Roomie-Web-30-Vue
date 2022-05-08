<template>
  <div class="recom.card" v-bind:class="rootClassName">
    <img :alt="recomcardimg_alt" :src="img" class="recom.card.img" />
    <span class="recom.card.title text.small.semibold">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Populartodaycard',
  props: {
    rootClassName: String,
    title: {
      type: String,
      default: 'title',
    },
    recomcardimg_alt: {
      type: String,
      default: 'image',
    },
    img: String,
  },
}
</script>

<style scoped>















</style>
