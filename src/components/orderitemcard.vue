<template>
  <div class="order.item.card">
    <img :alt="image_alt" :src="image_src" class="order.itemimg" />
    <div class="order.item.info">
      <span class="order.item.title">{{ item_name }}</span>
      <span class="order.item.desc">{{ item_desc }}</span>
    </div>
    <span class="order.item.price">{{ item_price }}</span>
  </div>
</template>

<script>
export default {
  name: 'Orderitemcard',
  props: {
    item_price: {
      type: String,
      default: '$0.00',
    },
    image_src: String,
    image_alt: {
      type: String,
      default: 'image',
    },
    item_name: {
      type: String,
      default: 'Name',
    },
    item_desc: {
      type: String,
      default: 'standard',
    },
  },
}
</script>
