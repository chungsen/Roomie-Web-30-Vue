<template>
  <div class="dialog.recom.card">
    <img :alt="image_alt" :src="img" class="dialog.recom.img" />
    <span class="dialog.recom.card.title">{{ title }}</span>
  </div>
</template>

<script>
export default {
  name: 'Addedrecomcard',
  props: {
    image_alt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'title',
    },
    img: String,
  },
}
</script>
