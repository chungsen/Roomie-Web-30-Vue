<template>
  <div class="item.list.card">
    <img :alt="recomcardimg_alt" :src="cardimg" class="item.list.card.img" />
    <span class="item.list.card.title">{{ cardtitle }}</span>
    <span class="item.list.card.price">{{ cardprice }}</span>
  </div>
</template>

<script>
export default {
  name: 'Level2itemcard',
  props: {
    cardimg: String,
    rootClassName: String,
    cardprice: String,
    recomcardimg_alt: {
      type: String,
      default: 'image',
    },
    cardtitle: {
      type: String,
      default: 'title',
    },
  },
}
</script>

<style scoped>
















@media(max-width: 479px) {
  .level2\.item\.card-root-class-name {
    background-color: #D9D9D9;
  }
  .level2\.item\.card-root-class-name4 {
    background-color: #D9D9D9;
  }
  .level2\.item\.card-root-class-name12 {
    background-color: #D9D9D9;
  }
}
</style>
