<template>
  <div class="tools-chat-mobile-msg-container">
    <div class="page.overlay">
      <div class="tools.chat.header.panel">
        <div class="tools.chat.activeuser.panel">
          <div class="tools.chat.activeuser.info">
            <svg viewBox="0 0 1024 1024" class="tools.back.button">
              <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
            </svg>
            <div class="activeuser.box">
              <div class="tools.chat.ring.25 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="tools.activeuser.name">Pool TB06 - Johnny Ken</span>
            </div>
            <div class="activeuser.tag.box">
              <app-toolssessiontagdelivered
                rootClassName="toolssessiontagdelivered-root-class-name"
              ></app-toolssessiontagdelivered>
              <app-toolssessiontagconfirmed
                rootClassName="toolssessiontagconfirmed-root-class-name"
              ></app-toolssessiontagconfirmed>
              <app-toolssessiontagneworder
                rootClassName="toolssessiontagneworder-root-class-name"
              ></app-toolssessiontagneworder>
            </div>
          </div>
          <svg viewBox="0 0 1024 1024" class="kebab.icon">
            <path
              d="M992.262 871.396l-242.552-206.294c-25.074-22.566-51.89-32.926-73.552-31.926 57.256-67.068 91.842-154.078 91.842-249.176 0-212.078-171.922-384-384-384-212.076 0-384 171.922-384 384s171.922 384 384 384c95.098 0 182.108-34.586 249.176-91.844-1 21.662 9.36 48.478 31.926 73.552l206.294 242.552c35.322 39.246 93.022 42.554 128.22 7.356s31.892-92.898-7.354-128.22zM384 640c-141.384 0-256-114.616-256-256s114.616-256 256-256 256 114.616 256 256-114.614 256-256 256z"
            ></path>
          </svg>
          <div class="activechat.search.box hide">
            <div class="chat.search.box">
              <input
                type="text"
                placeholder="search message"
                class="activechat.search.input input msg.text.nomargin"
              />
              <svg viewBox="0 0 1024 1024" class="search.box.navigation">
                <path
                  d="M798.165 609.835l-256-256c-16.683-16.683-43.691-16.683-60.331 0l-256 256c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331z"
                ></path></svg
              ><svg viewBox="0 0 1024 1024" class="search.box.navigation">
                <path
                  d="M225.835 414.165l256 256c16.683 16.683 43.691 16.683 60.331 0l256-256c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div class="signon_user.panel">
          <img
            alt="image"
            src="/playground_assets/kebabmenu-1500h.png"
            class="kebab.icon"
          />
          <app-settingsmenu
            rootClassName="settingsmenu-root-class-name2"
          ></app-settingsmenu>
        </div>
      </div>
      <div class="tools.body.panel">
        <div class="tools.msgwindow.panel">
          <div class="chat.window">
            <div class="order.details.panel hide_order_details">
              <div class="order.details.panel.header">
                <div class="close.button">
                  <svg viewBox="0 0 1024 1024" class="icon_max">
                    <path
                      d="M225.835 286.165l225.835 225.835-225.835 225.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l225.835-225.835 225.835 225.835c16.683 16.683 43.691 16.683 60.331 0s16.683-43.691 0-60.331l-225.835-225.835 225.835-225.835c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0l-225.835 225.835-225.835-225.835c-16.683-16.683-43.691-16.683-60.331 0s-16.683 43.691 0 60.331z"
                    ></path>
                  </svg>
                </div>
                <span class="order.details.heading">
                  <span>food</span>
                  <br />
                  <span>order</span>
                </span>
                <span class="order.details.location">
                  Room 1204 - Johnny Krakowsky
                </span>
                <span class="order.details.timestamp">
                  <span class="tools-chat-mobile-msg-text03">02/05/22</span>
                  <br />
                  <span class="tools-chat-mobile-msg-text05">13:59PM</span>
                </span>
              </div>
              <div
                class="
                  tools.boxcolor.neworders
                  order.details.topbar
                  order.details.confirmed
                "
              >
                <span class="order.details.restaurant">
                  <span>Room Service</span>
                  <br />
                  <span>Wasabi</span>
                </span>
                <div class="order.details.itemsnum">
                  <span class="order.details.itemlabel">
                    <span>total amount</span>
                  </span>
                  <span class="order.details.item.number">$328.00</span>
                </div>
                <div class="order.details.itemsnum">
                  <span class="order.details.itemlabel"><span>items</span></span>
                  <span class="order.details.item.number"><span>7</span></span>
                </div>
              </div>
              <div class="order.details.item.panel">
                <span class="order.item.restaurant.title">Room Service</span>
                <app-orderitemcard
                  image_src="/playground_assets/244-2446054_ninja-chicken-burger-ninja-burger-mcdonalds-singapore-1500h.png"
                  item_desc="Mustard, Ketchup, No Pickles, Extra Onions"
                  item_name="Charcoal Chicken Burger"
                  item_price="$24.00"
                ></app-orderitemcard>
                <app-orderitemcard
                  image_src="https://images.unsplash.com/photo-1455853739633-8c94c03d8121?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGJpZyUyMGJyZWFrZmFzdHxlbnwwfHx8fDE2NTE0OTc4NTk&amp;ixlib=rb-1.2.1&amp;h=1500"
                  item_desc="Scrambled Eggs, No toast"
                  item_name="Big Breakfast"
                  item_price="$19.00"
                ></app-orderitemcard>
                <span class="order.item.restaurant.title">Wasabi</span>
                <app-orderitemcard
                  image_src="https://images.unsplash.com/photo-1623341214825-9f4f963727da?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHJhbWVufGVufDB8fHx8MTY1MTEzNDMwNA&amp;ixlib=rb-1.2.1&amp;h=1500"
                  item_name="Ramen Tonkatsu"
                  item_price="$28.00"
                ></app-orderitemcard>
                <app-orderitemcard
                  image_src="https://images.unsplash.com/photo-1588182728399-e8f2df121744?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGd5b3phfGVufDB8fHx8MTY1MTEyMzgyNA&amp;ixlib=rb-1.2.1&amp;h=1500"
                  item_name="Vegetarian Gyoza"
                  item_price="$19.00"
                ></app-orderitemcard>
                <app-orderitemcard
                  image_src="https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fHN1c2hpfGVufDB8fHx8MTY1MTQ5OTEzMA&amp;ixlib=rb-1.2.1&amp;h=1500"
                  item_name="Roe Sushi"
                  item_price="$29.00"
                ></app-orderitemcard>
                <app-orderitemcard
                  image_src="https://images.unsplash.com/photo-1583623025817-d180a2221d0a?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE0fHxzYXNoaW1pfGVufDB8fHx8MTY1MTQ5OTE3Ng&amp;ixlib=rb-1.2.1&amp;h=1500"
                  item_name="Sashimi Plate"
                  item_price="$39.00"
                ></app-orderitemcard>
                <app-orderitemcard
                  image_src="https://images.unsplash.com/photo-1610393069309-2607fcf74146?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fG1pc28lMjBzb3VwfGVufDB8fHx8MTY1MTQ5OTMwMw&amp;ixlib=rb-1.2.1&amp;h=1500"
                  item_name="Miso Soup"
                  item_price="$9.00"
                ></app-orderitemcard>
              </div>
              <span class="order.respondbutton.text order.respond.timertext">
                Confirmed 15 mins ago
              </span>
              <div class="order.details.respond.box">
                <div
                  class="
                    order.response.button
                    order.respondbutton.color
                    hide_order_details
                  "
                >
                  <span class="order.respondbutton.text">
                    <span>
                      Cancel
                      <span v-html="rawn72z"></span>
                    </span>
                    <span>Order</span>
                  </span>
                </div>
                <div class="order.response.button hide_order_details">
                  <span class="order.respondbutton.text">
                    <span>
                      10
                      <span v-html="rawd2dl"></span>
                    </span>
                    <br />
                    <span>mins</span>
                  </span>
                </div>
                <div class="order.response.button hide_order_details">
                  <span class="order.respondbutton.text">
                    <span>20</span>
                    <br />
                    <span>mins</span>
                  </span>
                </div>
                <div class="order.response.button hide_order_details">
                  <span class="order.respondbutton.text">
                    <span>30</span>
                    <br />
                    <span>mins</span>
                  </span>
                </div>
                <div class="order.response.button hide_order_details">
                  <span class="order.respondbutton.text">
                    <span>No</span>
                    <br />
                    <span>Estimates</span>
                  </span>
                </div>
                <div class="order.response.button delay.button">
                  <span class="order.respondbutton.text">
                    <span>Delay</span>
                    <br />
                    <span>10 mins</span>
                  </span>
                </div>
                <div class="order.response.button delay.button">
                  <span class="order.respondbutton.text">
                    <span>Delay</span>
                    <br />
                    <span>20 mins</span>
                  </span>
                </div>
                <div class="delivered.button order.response.button">
                  <span class="order.respondbutton.text">
                    <span>Delivered</span>
                  </span>
                </div>
              </div>
            </div>
            <app-toolsmsghotel
              msgtext="Hi! Welcome to the hotel. I am Jen and please drop me a message here if you need any assistance."
              image_src="/playground_assets/double-tick-1500h.png"
              timestamp="Ms. Sequisha - 13:59 PM"
              rootClassName="toolsmsghotel-root-class-name1"
            ></app-toolsmsghotel>
            <app-toolsmsgguest
              msgtext="Hi Jen. Thanks. will sure do. BY the way do you have any toothbrush"
              timestamp="Room 1204 Nick - 13:58 PM"
              msgtranslate="嗨，珍。谢谢。一定会的。顺便问一下你有牙刷吗"
              rootClassName="toolsmsgguest-root-class-name2"
            ></app-toolsmsgguest>
            <app-toolsmsgguestimg
              image_src="https://images.unsplash.com/photo-1651174233411-deececc508b3?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY1MTI3NTExOA&amp;ixlib=rb-1.2.1&amp;h=200"
              timestamp="Room 1204 Nick - 13:59 PM"
            ></app-toolsmsgguestimg>
            <app-toolsmsghotelimg
              image_src="https://images.unsplash.com/photo-1596036753691-6fef728e62cc?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx2ZXNwYXxlbnwwfHx8fDE2NTEzMjgzOTU&amp;ixlib=rb-1.2.1&amp;h=200"
              timestamp="Ms. Sequisha 14:12 PM"
              image_src1="/playground_assets/double-tick-1500h.png"
            ></app-toolsmsghotelimg>
            <app-toolsmsghotelbutton
              button="promos"
              msgtext="Do check out our latest deals and promos."
              timestamp="Mr. Safiz - 14:32 PM"
            ></app-toolsmsghotelbutton>
            <app-toolsmsgguest
              msgtext="嘿！我一直在等我的水在哪里"
              timestamp="Pool TB06 NIck - 12:35 PM"
              msgtranslate="Hey! I have been waiting for my water where is it"
              rootClassName="toolsmsgguest-root-class-name3"
            ></app-toolsmsgguest>
            <app-toolsmsgguestorder></app-toolsmsgguestorder>
            <app-toolsmsghotel
              msgtext="Your Food order is confirmed and estimated time is 25 mins."
              image_src="/playground_assets/double-tick-1500h.png"
              timestamp="Mr. Nathan - 12:54 PM"
              rootClassName="toolsmsghotel-root-class-name2"
            ></app-toolsmsghotel>
            <app-toolsmsghotelbutton
              button="Received"
              msgtext="Your order has been delivered. Bon appetit!"
              image_src="/playground_assets/double-tick-1500h.png"
              timestamp="Ms. Nathan - 13:12 PM"
              rootClassName="toolsmsghotelbutton-root-class-name1"
            ></app-toolsmsghotelbutton>
          </div>
          <div class="input.group">
            <div class="input.container tools-chat-mobile-msg-container1">
              <input
                type="text"
                placeholder="type message"
                class="msg.text input msg.text.pc.nomargin"
              />
              <svg viewBox="0 0 1024 1024" class="chat.msg.icon">
                <path
                  d="M1024 810.667v-469.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-147.84l-72.661-109.013c-7.765-11.52-20.736-18.987-35.499-18.987h-256c-13.909 0.085-27.307 6.741-35.499 18.987l-72.661 109.013h-147.84c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v469.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h768c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496zM938.667 810.667c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-768c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-469.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h170.667c14.763 0 27.733-7.467 35.499-18.987l72.661-109.013h210.347l72.661 109.013c8.192 12.245 21.589 18.901 35.499 18.987h170.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165zM725.333 554.667c0-58.88-23.936-112.299-62.464-150.869s-91.989-62.464-150.869-62.464-112.299 23.936-150.869 62.464-62.464 91.989-62.464 150.869 23.936 112.299 62.464 150.869 91.989 62.464 150.869 62.464 112.299-23.936 150.869-62.464 62.464-91.989 62.464-150.869zM640 554.667c0 35.371-14.293 67.285-37.504 90.496s-55.125 37.504-90.496 37.504-67.285-14.293-90.496-37.504-37.504-55.125-37.504-90.496 14.293-67.285 37.504-90.496 55.125-37.504 90.496-37.504 67.285 14.293 90.496 37.504 37.504 55.125 37.504 90.496z"
                ></path></svg
              ><svg viewBox="0 0 1024 1024" class="chat.msg.icon">
                <path
                  d="M213.333 85.333c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h597.333c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504zM469.333 362.667c0-29.44-11.989-56.149-31.232-75.435s-45.995-31.232-75.435-31.232-56.149 11.989-75.435 31.232-31.232 45.995-31.232 75.435 11.989 56.149 31.232 75.435 45.995 31.232 75.435 31.232 56.149-11.989 75.435-31.232 31.232-45.995 31.232-75.435zM384 362.667c0 5.888-2.347 11.179-6.229 15.104s-9.216 6.229-15.104 6.229-11.179-2.347-15.104-6.229-6.229-9.216-6.229-15.104 2.347-11.179 6.229-15.104 9.216-6.229 15.104-6.229 11.179 2.347 15.104 6.229 6.229 9.216 6.229 15.104zM316.331 853.333l366.336-366.336 170.667 170.667v153.003c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501zM853.333 537.003l-140.501-140.501c-16.683-16.683-43.691-16.683-60.331 0l-454.144 454.144c-5.76-2.133-10.88-5.504-15.189-9.813-7.765-7.765-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501h597.333c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165z"
                ></path></svg
              ><svg viewBox="0 0 1024 1024" class="chat.msg.icon">
                <path
                  d="M298.667 213.333c0 23.552 9.6 44.928 25.003 60.331s36.779 25.003 60.331 25.003h256c23.552 0 44.928-9.6 60.331-25.003s25.003-36.779 25.003-60.331h42.667c11.776 0 22.4 4.736 30.165 12.501s12.501 18.389 12.501 30.165v597.333c0 11.776-4.736 22.4-12.501 30.165s-18.389 12.501-30.165 12.501h-512c-11.776 0-22.4-4.736-30.165-12.501s-12.501-18.389-12.501-30.165v-597.333c0-11.776 4.736-22.4 12.501-30.165s18.389-12.501 30.165-12.501zM384 42.667c-23.552 0-44.928 9.6-60.331 25.003s-25.003 36.779-25.003 60.331h-42.667c-35.328 0-67.413 14.379-90.496 37.504s-37.504 55.168-37.504 90.496v597.333c0 35.328 14.379 67.413 37.504 90.496s55.168 37.504 90.496 37.504h512c35.328 0 67.413-14.379 90.496-37.504s37.504-55.168 37.504-90.496v-597.333c0-35.328-14.379-67.413-37.504-90.496s-55.168-37.504-90.496-37.504h-42.667c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003zM384 128h256v85.333h-256z"
                ></path>
              </svg>
            </div>
            <svg viewBox="0 0 1024 1024" class="chat.send.icon">
              <path d="M86 896v-298l640-86-640-86v-298l896 384z"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppToolssessiontagdelivered from '../components/toolssessiontagdelivered'
import AppToolssessiontagconfirmed from '../components/toolssessiontagconfirmed'
import AppToolssessiontagneworder from '../components/toolssessiontagneworder'
import AppSettingsmenu from '../components/settingsmenu'
import AppOrderitemcard from '../components/orderitemcard'
import AppToolsmsghotel from '../components/toolsmsghotel'
import AppToolsmsgguest from '../components/toolsmsgguest'
import AppToolsmsgguestimg from '../components/toolsmsgguestimg'
import AppToolsmsghotelimg from '../components/toolsmsghotelimg'
import AppToolsmsghotelbutton from '../components/toolsmsghotelbutton'
import AppToolsmsgguestorder from '../components/toolsmsgguestorder'

export default {
  name: 'ToolsChatMobileMsg',
  components: {
    AppToolssessiontagdelivered,
    AppToolssessiontagconfirmed,
    AppToolssessiontagneworder,
    AppSettingsmenu,
    AppOrderitemcard,
    AppToolsmsghotel,
    AppToolsmsgguest,
    AppToolsmsgguestimg,
    AppToolsmsghotelimg,
    AppToolsmsghotelbutton,
    AppToolsmsgguestorder,
  },

  data() {
    return {
      rawn72z: ' ',
      rawd2dl: ' ',
    }
  },

  metaInfo: {
    title: 'tools-chat-mobile-msg - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'tools-chat-mobile-msg - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.tools-chat-mobile-msg-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.tools-chat-mobile-msg-text03 {
  text-align: right;
}
.tools-chat-mobile-msg-text05 {
  text-align: right;
}
@media(max-width: 991px) {
  .tools-chat-mobile-msg-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .tools-chat-mobile-msg-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .tools-chat-mobile-msg-container {
    height: 100vh;
  }
  .tools-chat-mobile-msg-container1 {
    position: relative;
  }
}
</style>
