<template>
  <div class="landing-container">
    <div class="page.overlay page.overlay.landing">
      <img
        alt="image"
        src="/playground_assets/hotel_logo_white1-1500h.png"
        class="landing.hotel.logo"
      />
      <span id="hotelname" class="landing.hotel.name">
        Winchester Resort &amp; Spa Orlando
      </span>
      <div class="landing.user.panel">
        <span id="welcometag" class="landing.welcome.text">VIP</span>
        <span class="landing.button.msg">
          please turn on notifications to enable chat with hotel
        </span>
        <div class="landing-container2 slide.off landing.object">
          <span class="landing.object.text">notifications on</span>
          <div class="landing-container3 landing.slider.button">
            <svg
              viewBox="0 0 1170.2857142857142 1024"
              class="hide max.icon.white"
            >
              <path
                d="M890.286 486.857c29.143 170.286 104 261.714 170.286 317.714 0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-145.714-65.143-146.286-145.714zM585.143 978.286c5.143 0 9.143-4 9.143-9.143s-4-9.143-9.143-9.143c-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571zM1157.714 64c6.286 8 5.714 19.429-1.714 26.286l-1069.714 926.857c-7.429 6.286-19.429 5.714-25.714-2.286l-48-54.857c-6.286-8-5.714-19.429 1.714-25.714l106.286-92c-6.857-11.429-10.857-24-10.857-37.714 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 98.286 14.286 170.857 69.714 209.714 137.143l238.857-207.429c7.429-6.286 19.429-5.714 25.714 2.286z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="max.icon.white">
              <path
                d="M521.143 969.143c0-5.143-4-9.143-9.143-9.143-45.143 0-82.286-37.143-82.286-82.286 0-5.143-4-9.143-9.143-9.143s-9.143 4-9.143 9.143c0 55.429 45.143 100.571 100.571 100.571 5.143 0 9.143-4 9.143-9.143zM987.429 804.571c0 40-33.143 73.143-73.143 73.143h-256c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286h-256c-40 0-73.143-33.143-73.143-73.143 84.571-71.429 182.857-199.429 182.857-475.429 0-109.714 90.857-229.714 242.286-252-2.857-6.857-4.571-14.286-4.571-22.286 0-30.286 24.571-54.857 54.857-54.857s54.857 24.571 54.857 54.857c0 8-1.714 15.429-4.571 22.286 151.429 22.286 242.286 142.286 242.286 252 0 276 98.286 404 182.857 475.429z"
              ></path>
            </svg>
          </div>
        </div>
        <span class="landing.button.msg">do give us a name to address you</span>
        <div class="landing.object">
          <input
            type="text"
            id="nameinput"
            placeholder="name"
            class="landing-textinput input"
          />
        </div>
        <div id="gobutton" class="landing.gobutton">
          <svg viewBox="0 0 1024 1024" class="max.icon.white">
            <path d="M250 176l92-90 426 426-426 426-92-90 338-336z"></path>
          </svg>
        </div>
      </div>
      <span class="landing.privacypolicy">
        privacy policy &amp; usage terms and conditions
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  metaInfo: {
    title: 'Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.landing-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
  background-image: radial-gradient(circle at center top, rgb(244, 161, 121) 1.00%,rgb(242, 116, 54) 46.00%,rgb(178, 59, 0) 99.00%);
}
.landing-container2 {
  background-color: #fb915e;
}
.landing-container3 {
  background-color: var(--dl-color-primary-actioncolor);
}
.landing-textinput {
  text-align: center;
}
@media(max-width: 991px) {
  .landing-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .landing-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .landing-container {
    height: 100vh;
  }
}
</style>
