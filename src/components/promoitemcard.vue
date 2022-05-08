<template>
  <div class="item.list.card promo.list.card" v-bind:class="rootClassName">
    <img
      :alt="recomcardimg_alt"
      :src="img"
      class="promo.list.img item.list.card.img"
    />
    <span class="item.list.card.title">{{ title }}</span>
    <span class="promo.card.price.ori">{{ oriprice }}</span>
    <span class="item.list.card.price">{{ newprice }}</span>
    <div class="discount.tag">
      <svg viewBox="0 0 1024 1024" class="qr.icon">
        <path
          d="M780.501 183.168l-597.333 597.333c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l597.333-597.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0zM426.667 277.333c0-41.216-16.768-78.635-43.733-105.6s-64.384-43.733-105.6-43.733-78.635 16.768-105.6 43.733-43.733 64.384-43.733 105.6 16.768 78.635 43.733 105.6 64.384 43.733 105.6 43.733 78.635-16.768 105.6-43.733 43.733-64.384 43.733-105.6zM341.333 277.333c0 17.664-7.125 33.621-18.731 45.269s-27.605 18.731-45.269 18.731-33.621-7.125-45.269-18.731-18.731-27.605-18.731-45.269 7.125-33.621 18.731-45.269 27.605-18.731 45.269-18.731 33.621 7.125 45.269 18.731 18.731 27.605 18.731 45.269zM896 746.667c0-41.216-16.768-78.635-43.733-105.6s-64.384-43.733-105.6-43.733-78.635 16.768-105.6 43.733-43.733 64.384-43.733 105.6 16.768 78.635 43.733 105.6 64.384 43.733 105.6 43.733 78.635-16.768 105.6-43.733 43.733-64.384 43.733-105.6zM810.667 746.667c0 17.664-7.125 33.621-18.731 45.269s-27.605 18.731-45.269 18.731-33.621-7.125-45.269-18.731-18.731-27.605-18.731-45.269 7.125-33.621 18.731-45.269 27.605-18.731 45.269-18.731 33.621 7.125 45.269 18.731 18.731 27.605 18.731 45.269z"
        ></path>
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Promoitemcard',
  props: {
    rootClassName: String,
    newprice: String,
    recomcardimg_alt: {
      type: String,
      default: 'image',
    },
    oriprice: String,
    title: {
      type: String,
      default: 'title',
    },
    img: String,
  },
}
</script>

<style scoped>

@media(max-width: 479px) {
  .promo\.item\.card-root-class-name {
    background-color: #D9D9D9;
  }
}
</style>
