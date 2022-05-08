<template>
  <div class="dialog-container">
    <div class="page.overlay hide dialog.background">
      <img
        alt="image"
        src="https://images.unsplash.com/photo-1651006450895-2b8509422212?ixid=Mnw5MTMyMXwwfDF8YWxsfDE0fHx8fHx8Mnx8MTY1MTExMzcwOQ&amp;ixlib=rb-1.2.1&amp;w=1500"
        class="dialog-image"
      />
    </div>
    <div class="dialog_frame">
      <div class="dialog.icon.round">
        <svg viewBox="0 0 1024 1024" class="max.icon.white">
          <path
            d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
          ></path>
        </svg>
      </div>
      <div class="dialog.body">
        <span class="dialog.title"><span class="dialog-text01">Done</span></span>
        <span class="dialog.msg">
          Your request have been sent. We will attend to you shortly.
        </span>
        <div class="dialog.button">
          <span class="dialog.button.text">OK</span>
        </div>
      </div>
    </div>
    <div class="dialog_frame hide">
      <div class="dialog.icon.round">
        <svg viewBox="0 0 1024 1024" class="max.icon.white">
          <path
            d="M170 342q142 0 242 100t100 240h-62q0-116-82-197t-198-81v-62zM170 470q88 0 151 62t63 150h-62q0-62-45-107t-107-45v-60zM170 598q36 0 61 24t25 60h-86v-84zM896 726v-512h-768v512h768zM896 128q34 0 60 26t26 60l-2 512q0 34-25 59t-59 25h-214v86h-340v-86h-214q-34 0-60-25t-26-59v-512q0-34 26-60t60-26h768z"
          ></path>
        </svg>
      </div>
      <div class="dialog.body">
        <span class="dialog.title">
          <span class="dialog-text05">Play Movie</span>
        </span>
        <span class="dialog.msg">Where would you like to play the movie on</span>
        <div class="dialog.button">
          <span class="dialog.button.text">Room TV 1204</span>
        </div>
        <div class="dialog.button">
          <span class="dialog.button.text">Mobile device</span>
        </div>
      </div>
    </div>
    <div class="dialog_frame hide">
      <div class="dialog.icon.round.fail dialog.icon.round">
        <svg viewBox="0 0 365.71428571428567 1024" class="max.icon.white">
          <path
            d="M292.571 713.143v128c0 20-16.571 36.571-36.571 36.571h-146.286c-20 0-36.571-16.571-36.571-36.571v-128c0-20 16.571-36.571 36.571-36.571h146.286c20 0 36.571 16.571 36.571 36.571zM309.714 109.714l-16 438.857c-0.571 20-17.714 36.571-37.714 36.571h-146.286c-20 0-37.143-16.571-37.714-36.571l-16-438.857c-0.571-20 15.429-36.571 35.429-36.571h182.857c20 0 36 16.571 35.429 36.571z"
          ></path>
        </svg>
      </div>
      <div class="dialog.body">
        <span class="dialog.title"><span class="dialog-text10">Oops!</span></span>
        <span class="dialog.msg">Something went wrong. Please try again.</span>
        <div class="dialog.button.fail dialog.button">
          <span class="dialog.button.text">OK</span>
        </div>
      </div>
    </div>
    <div class="dialog_frame hide">
      <div class="dialog.main.box">
        <div class="dialog.icon.round dialog-iconbox">
          <svg viewBox="0 0 1024 1024" class="max.icon.white">
            <path
              d="M724.139 266.709c-41.259-22.955-93.227-8.021-116.053 33.152l-158.421 285.099-90.667-90.667c-33.323-33.323-87.339-33.323-120.661 0s-33.323 87.339 0 120.661l170.667 170.667c16.128 16.171 37.888 25.045 60.331 25.045 3.925 0 7.893-0.256 11.819-0.853 26.496-3.712 49.749-19.627 62.763-43.051l213.333-384c22.912-41.216 8.064-93.141-33.109-116.053z"
            ></path>
          </svg>
        </div>
        <div class="dialog.body">
          <span class="dialog.title">
            <span class="dialog-text14">Added!</span>
          </span>
          <span class="dialog.msg"><span>Item added to cart</span></span>
          <div class="dialog.recom.panel">
            <span class="dialog.recom.card.title">
              <span>
                You might like these too
                <span v-html="rawicte"></span>
              </span>
            </span>
            <div class="dialog.recom.row">
              <app-addedrecomcard
                img="https://images.unsplash.com/photo-1465014925804-7b9ede58d0d7?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fEJyZWFrZmFzdHxlbnwwfHx8fDE2NTE1NjA0NDA&amp;ixlib=rb-1.2.1&amp;w=500"
                title="Toast with Egg"
              ></app-addedrecomcard>
              <app-addedrecomcard
                img="https://images.unsplash.com/photo-1499638309848-e9968540da83?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHxCcmVha2Zhc3R8ZW58MHx8fHwxNjUxNTYwNDQw&amp;ixlib=rb-1.2.1&amp;w=500"
                title="Pancakes Strawberries and berries "
              ></app-addedrecomcard>
              <app-addedrecomcard
                img="https://images.unsplash.com/photo-1506279616042-87baff7956a5?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDM5fHxCcmVha2Zhc3R8ZW58MHx8fHwxNjUxNTYyOTg4&amp;ixlib=rb-1.2.1&amp;w=500"
                title="Toasts with Jam"
              ></app-addedrecomcard>
              <app-addedrecomcard
                img="https://images.unsplash.com/photo-1504712598893-24159a89200e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ0fHxCcmVha2Zhc3R8ZW58MHx8fHwxNjUxNTYyOTg4&amp;ixlib=rb-1.2.1&amp;w=500"
                title="Cereal with Apricots"
              ></app-addedrecomcard>
            </div>
          </div>
          <div class="dialog.button">
            <span class="dialog.button.text">Go to Cart</span>
          </div>
          <div class="grey.button dialog.button">
            <span class="dialog.button.text">add more items</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppAddedrecomcard from '../components/addedrecomcard'

export default {
  name: 'Dialog',
  components: {
    AppAddedrecomcard,
  },

  data() {
    return {
      rawicte: ' ',
    }
  },

  metaInfo: {
    title: 'dialog - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'dialog - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.dialog-container {
  width: 100vw;
  height: 1366;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.dialog-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.dialog-text01 {
  font-style: normal;
  font-weight: 400;
}
.dialog-text05 {
  font-style: normal;
  font-weight: 400;
}
.dialog-text10 {
  font-style: normal;
  font-weight: 400;
}
.dialog-text14 {
  font-style: normal;
  font-weight: 400;
}
@media(max-width: 991px) {
  .dialog-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .dialog-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .dialog-container {
    height: 100vh;
  }
}
</style>
