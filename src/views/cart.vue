<template>
  <div class="cart-container">
    <div class="page.overlay">
      <app-headerpanellevel
        category="Cart"
        rootClassName="headerpanellevel-root-class-name"
      ></app-headerpanellevel>
      <div class="level2.cat.container">
        <div class="line.cat.group">
          <span class="text.medium.grey">Current Orders</span>
          <div class="underline_show underline.highlight"></div>
        </div>
        <div class="line.cat.group">
          <span class="text.medium.grey">Past Orders</span>
          <div class="underline.highlight"></div>
        </div>
      </div>
      <div class="item.body.panel">
        <div class="cart.item.panel">
          <app-cartitemcard
            price="$24.00"
            title="Charcoal Chicken Burger"
            itemimg="/playground_assets/244-2446054_ninja-chicken-burger-ninja-burger-mcdonalds-singapore-1500h.png"
            cartitemdesc="Extra Ketchup, No Sesame seeds, Mustard"
            rootClassName="cartitemcard-root-class-name"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$18.00"
            title="Banana Smoothie"
            itemimg="/playground_assets/banana-smoothie-recipes-759606-hero-01-d2abaa79f3204030a0ec0a8940456acc-1500h.jpg"
            cartitemdesc="No Chia Seeds"
            rootClassName="cartitemcard-root-class-name7"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$22.00"
            title="Stuffed Omelette"
            itemimg="/playground_assets/best-breakfast-choices-and-diabetes-1087468-primary-recirc-603a39fe3b10439eaa9a0cf80a09eec2-1500h.jpg"
            cartitemdesc="Extra Ketchup"
            rootClassName="cartitemcard-root-class-name6"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$34.00"
            title="Big Breakfast"
            itemimg="/playground_assets/big_breakfast_kd-501643-1-1500h.jpg"
            rootClassName="cartitemcard-root-class-name5"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$21.00"
            title="Pancakes"
            itemimg="/playground_assets/chocolate-chip-pancakes-1500h.png"
            cartitemdesc="Maple Syrup, Butter"
            rootClassName="cartitemcard-root-class-name4"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$19.00"
            title="Nachos Guacamole"
            itemimg="/playground_assets/doritos-1500h.jpg"
            rootClassName="cartitemcard-root-class-name3"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$14.00"
            title="French Fries"
            itemimg="/playground_assets/fries-1500h.jpg"
            cartitemdesc="Mayonaisse, Mustard"
            rootClassName="cartitemcard-root-class-name2"
          ></app-cartitemcard>
          <app-cartitemcard
            price="$24.00"
            title="Ice Cream"
            itemimg="/playground_assets/icecream-1500h.jpg"
            cartitemdesc="3 Scoops, Chocolate"
            rootClassName="cartitemcard-root-class-name1"
          ></app-cartitemcard>
        </div>
        <div class="cart.total.panel">
          <span class="cart.numberitems.label">items</span>
          <span class="cart.numberitems">7</span>
          <span class="cart.total.label">total</span>
          <span class="cart.totalprice">$238.00</span>
          <span class="cart.tax.label">not including 6% service tax</span>
          <div class="cart.checkout.box">
            <img
              alt="image"
              src="/playground_assets/a5b0f47e26f311e040c56947e273ed9a-200h.png"
              class="cart.checkout.icon"
            />
            <span class="cart.checkout.label">Checkout</span>
            <span class="cart.checkout.msg">
              <span>deliver to</span>
              <br />
              <span>Room</span>
              <br />
              <span>1204</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderpanellevel from '../components/headerpanellevel'
import AppCartitemcard from '../components/cartitemcard'

export default {
  name: 'Cart',
  components: {
    AppHeaderpanellevel,
    AppCartitemcard,
  },
  metaInfo: {
    title: 'cart - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'cart - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.cart-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
@media(max-width: 991px) {
  .cart-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .cart-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .cart-container {
    height: 100vh;
  }
}
</style>
