<template>
  <div class="food-level1-container">
    <div class="page.overlay">
      <app-headerpanel
        rootClassName="headerpanel-root-class-name"
      ></app-headerpanel>
      <div id="categoryrow" class="category.row">
        <div class="category.group">
          <div class="rectangle.row category.card">
            <svg viewBox="0 0 1152 1024" class="icon_max">
              <path
                d="M480 128c-50.666 0-99.582 7.95-145.386 23.628-42.924 14.694-81.114 35.436-113.502 61.646-60.044 48.59-93.112 110.802-93.112 175.174 0 35.99 10.066 70.948 29.92 103.898 20.686 34.34 51.898 65.794 90.26 90.958 30.44 19.968 50.936 51.952 56.362 87.95 0.902 5.99 1.63 12.006 2.18 18.032 2.722-2.52 5.424-5.114 8.114-7.794 24.138-24.040 56.688-37.312 90.322-37.312 5.348 0 10.718 0.336 16.094 1.018 19.36 2.452 39.124 3.696 58.748 3.696 50.666 0 99.58-7.948 145.384-23.628 42.926-14.692 81.116-35.434 113.504-61.644 60.046-48.59 93.112-110.802 93.112-175.174s-33.066-126.582-93.112-175.174c-32.388-26.212-70.578-46.952-113.504-61.646-45.804-15.678-94.718-23.628-145.384-23.628zM480 0v0c265.096 0 480 173.914 480 388.448s-214.904 388.448-480 388.448c-25.458 0-50.446-1.62-74.834-4.71-103.106 102.694-222.172 121.108-341.166 123.814v-25.134c64.252-31.354 116-88.466 116-153.734 0-9.106-0.712-18.048-2.030-26.794-108.558-71.214-177.97-179.988-177.97-301.89 0-214.534 214.904-388.448 480-388.448zM996 870.686c0 55.942 36.314 104.898 92 131.772v21.542c-103.126-2.318-197.786-18.102-287.142-106.126-21.14 2.65-42.794 4.040-64.858 4.040-95.47 0-183.408-25.758-253.614-69.040 144.674-0.506 281.26-46.854 384.834-130.672 52.208-42.252 93.394-91.826 122.414-147.348 30.766-58.866 46.366-121.582 46.366-186.406 0-10.448-0.45-20.836-1.258-31.168 72.57 59.934 117.258 141.622 117.258 231.676 0 104.488-60.158 197.722-154.24 258.764-1.142 7.496-1.76 15.16-1.76 22.966z"
              ></path>
            </svg>
          </div>
          <span class="text.small.semibold">Chat</span>
        </div>
        <div class="category.group">
          <div class="rectangle.row category.card.focus category.card">
            <svg viewBox="0 0 1024 1024" class="icon_max icon.max.focus">
              <path
                d="M44 726h640v84h-640v-84zM684 640h-642q0-98 66-164t160-82 189 0 161 82 66 164zM42 938v-42h642v42q0 18-13 30t-31 12h-554q-18 0-31-12t-13-30zM770 980v-342q0-126-104-226-62-62-182-96l-12-100h212v-174h84v174h214l-72 702q-4 26-23 44t-45 18h-72z"
              ></path>
            </svg>
          </div>
          <span class="text.small.semibold">Food</span>
        </div>
        <div class="category.group">
          <div class="rectangle.row category.card">
            <svg viewBox="0 0 1024 1024" class="icon_max">
              <path
                d="M469.333 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM938.667 896c0-23.552-9.6-44.928-25.003-60.331s-36.779-25.003-60.331-25.003-44.928 9.6-60.331 25.003-25.003 36.779-25.003 60.331 9.6 44.928 25.003 60.331 36.779 25.003 60.331 25.003 44.928-9.6 60.331-25.003 25.003-36.779 25.003-60.331zM308.096 298.667h621.653l-58.496 306.816c-1.963 9.728-7.083 18.133-14.165 24.235-7.68 6.656-17.621 10.496-29.355 10.283h-415.317c-9.899 0.128-19.243-3.029-26.709-8.661-8.107-6.101-14.037-14.976-16.171-25.728zM42.667 85.333h135.68l36.181 180.864c4.608 18.645 21.419 32.469 41.472 32.469h52.096l-17.067-85.333h-35.029c-23.552 0-42.667 19.115-42.667 42.667 0 2.261 0.171 4.48 0.512 6.613 0.171 1.195 0.427 2.432 0.725 3.584l71.296 356.139c6.357 32.043 24.277 59.008 48.64 77.269 22.229 16.725 49.92 26.155 79.104 25.728h414.123c31.915 0.64 62.080-11.136 85.12-31.019 21.077-18.176 36.181-43.221 42.027-71.808l68.352-358.485c4.395-23.168-10.752-45.483-33.92-49.92-2.773-0.555-5.547-0.811-7.979-0.768h-690.347l-35.84-179.029c-4.011-19.712-21.205-34.304-41.813-34.304h-170.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"
              ></path>
            </svg>
            <div class="cart.number.corner">
              <span class="text.white.boldsmall">3</span>
            </div>
          </div>
          <span class="text.small.semibold">Cart</span>
        </div>
        <div class="category.group">
          <div class="rectangle.row category.card">
            <svg viewBox="0 0 1024 1024" class="icon_max">
              <path
                d="M780.501 183.168l-597.333 597.333c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l597.333-597.333c16.683-16.683 16.683-43.691 0-60.331s-43.691-16.683-60.331 0zM426.667 277.333c0-41.216-16.768-78.635-43.733-105.6s-64.384-43.733-105.6-43.733-78.635 16.768-105.6 43.733-43.733 64.384-43.733 105.6 16.768 78.635 43.733 105.6 64.384 43.733 105.6 43.733 78.635-16.768 105.6-43.733 43.733-64.384 43.733-105.6zM341.333 277.333c0 17.664-7.125 33.621-18.731 45.269s-27.605 18.731-45.269 18.731-33.621-7.125-45.269-18.731-18.731-27.605-18.731-45.269 7.125-33.621 18.731-45.269 27.605-18.731 45.269-18.731 33.621 7.125 45.269 18.731 18.731 27.605 18.731 45.269zM896 746.667c0-41.216-16.768-78.635-43.733-105.6s-64.384-43.733-105.6-43.733-78.635 16.768-105.6 43.733-43.733 64.384-43.733 105.6 16.768 78.635 43.733 105.6 64.384 43.733 105.6 43.733 78.635-16.768 105.6-43.733 43.733-64.384 43.733-105.6zM810.667 746.667c0 17.664-7.125 33.621-18.731 45.269s-27.605 18.731-45.269 18.731-33.621-7.125-45.269-18.731-18.731-27.605-18.731-45.269 7.125-33.621 18.731-45.269 27.605-18.731 45.269-18.731 33.621 7.125 45.269 18.731 18.731 27.605 18.731 45.269z"
              ></path>
            </svg>
          </div>
          <span class="text.small.semibold">Deals</span>
        </div>
        <div class="category.group">
          <div class="rectangle.row category.card">
            <svg viewBox="0 0 1024 1024" class="icon_max">
              <path
                d="M590 332q126 26 212 123t94 227h-768q8-130 94-227t212-123q-8-16-8-34 0-36 25-60t61-24 61 24 25 60q0 18-8 34zM86 726h852v84h-852v-84z"
              ></path>
            </svg>
          </div>
          <span class="text.small.semibold">Services</span>
        </div>
        <div class="category.group">
          <div class="rectangle.row category.card">
            <svg viewBox="0 0 1024 1024" class="icon_max">
              <path
                d="M768 384v-86h-86v86h86zM768 554v-84h-86v84h86zM768 726v-86h-86v86h86zM342 384v-86h-86v86h86zM342 554v-84h-86v84h86zM342 726v-86h-86v86h86zM768 128h86v768h-86v-86h-86v86h-340v-86h-86v86h-86v-768h86v86h86v-86h340v86h86v-86z"
              ></path>
            </svg>
          </div>
          <span class="text.small.semibold">Movies</span>
        </div>
        <div class="category.group">
          <div class="rectangle.row category.card">
            <svg viewBox="0 0 1024 1024" class="icon_max">
              <path
                d="M590.464 747.733c-0.256 0.085-23.851 7.936-44.331 7.936-11.307 0-15.872-2.347-17.323-3.371-7.168-4.992-20.48-14.336 2.304-59.733l42.667-85.077c25.301-50.517 29.056-99.371 10.453-137.6-15.189-31.275-44.331-52.736-81.92-60.416-13.525-2.773-27.264-4.139-40.875-4.139-78.891 0-132.011 46.080-134.229 48.043-7.637 6.741-9.429 17.92-4.352 26.709 5.12 8.789 15.659 12.8 25.387 9.472 0.213-0.085 23.851-7.979 44.331-7.979 11.221 0 15.744 2.347 17.152 3.328 7.211 5.035 20.565 14.507-2.176 59.819l-42.667 85.12c-25.344 50.56-29.056 99.413-10.453 137.6 15.189 31.275 44.288 52.736 81.963 60.416 13.397 2.688 27.136 4.139 40.704 4.139 78.933 0 132.096-46.080 134.315-48.043 7.637-6.699 9.429-17.92 4.352-26.709-5.12-8.747-15.744-12.672-25.301-9.515z"
              ></path>
              <path
                d="M661.333 256.043c0 58.91-47.756 106.667-106.667 106.667s-106.667-47.756-106.667-106.667c0-58.91 47.756-106.667 106.667-106.667 58.91 0 106.667 47.756 106.667 106.667z"
              ></path>
            </svg>
          </div>
          <span class="text.small.semibold">Info</span>
        </div>
      </div>
      <div class="body.panel">
        <span class="text.50.bold.black menu.title"><span>Food</span></span>
        <div class="category_row">
          <div class="rectangle.row level2.category.card food-level1-menucard">
            <span class="level2.category.title">Snacks</span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1517093602195-b40af9688b46?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fHNuYWNrc3xlbnwwfHx8fDE2NTA5ODUzNDE&amp;ixlib=rb-1.2.1&amp;h=1500"
              class="level2.category.img"
            />
            <img
              alt="image"
              src="/playground_assets/beige_mask-1500h.png"
              class="level2.category.mask"
            />
          </div>
          <div class="rectangle.row level2.category.card">
            <span class="level2.category.title">Lunch</span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1629358101753-531fa5a2f661?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE5fHxsdW5jaHxlbnwwfHx8fDE2NTA5ODUzNjQ&amp;ixlib=rb-1.2.1&amp;h=1500"
              class="level2.category.img"
            />
            <img
              alt="image"
              src="/playground_assets/pink_mask-1500h.png"
              class="level2.category.mask"
            />
          </div>
          <div class="rectangle.row level2.category.card">
            <span class="level2.category.title">Breakfast</span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1501959915551-4e8d30928317?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE1fHxicmVha2Zhc3R8ZW58MHx8fHwxNjUwOTg1Mzg3&amp;ixlib=rb-1.2.1&amp;h=1500"
              class="level2.category.img"
            />
            <img
              alt="image"
              src="/playground_assets/blue_mask-1500h.png"
              class="level2.category.mask"
            />
          </div>
          <div class="rectangle.row level2.category.card">
            <span class="level2.category.title">
              <span>Ice</span>
              <br />
              <span>Cream</span>
            </span>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1570197788417-0e82375c9371?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxpY2UlMjBjcmVhbXxlbnwwfHx8fDE2NTA5ODU0MTA&amp;ixlib=rb-1.2.1&amp;h=1500"
              class="level2.category.img"
            />
            <img
              alt="image"
              src="/playground_assets/green_mask-1500h.png"
              class="level2.category.mask"
            />
          </div>
          <div class="rectangle.row level2.category.card">
            <span class="level2.category.title">Smoothies</span>
            <img
              alt="image"
              src="/playground_assets/images-1500h.jpg"
              class="level2.category.img"
            />
            <img
              alt="image"
              src="/playground_assets/pink_mask-1500h.png"
              class="level2.category.mask"
            />
          </div>
        </div>
        <span class="recom.title">Popular Today</span>
        <div class="recom.row">
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1561724108-c66e5726c94e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxjaGVlc2UlMjBwbGF0dGVyfGVufDB8fHx8MTY1MTU0ODgwMQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Cheese Platter"
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1576843776838-032ac46fbb93?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDE2fHxjaGVlc2UlMjBidXJnZXJ8ZW58MHx8fHwxNjUxNTQ4OTAw&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Cheese Burger "
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1560008581-09826d1de69e?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDJ8fGljZSUyMGNyZWFtfGVufDB8fHx8MTY1MTU0ODk1NA&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Ice Cream"
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1568046562322-0bbc869368ba?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fGxhdHRlfGVufDB8fHx8MTY1MTU0OTAzNQ&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Cafe Latte"
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1623238912680-26fc5ffb57e4?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDIwfHxmcmVuY2glMjBmcmllc3xlbnwwfHx8fDE2NTE1NDkwNjc&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="French Fries"
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1591814468924-caf88d1232e1?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDR8fHJhbWVufGVufDB8fHx8MTY1MTQ5ODc0Ng&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Ramen Tonkatsu"
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1513456852971-30c0b8199d4d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDN8fG5hY2hvc3xlbnwwfHx8fDE2NTE1NDkxNDM&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Nachos Guacamole"
          ></app-populartodaycard>
          <app-populartodaycard
            img="https://images.unsplash.com/photo-1593412323862-55bd8bb39099?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEwfHxlc3ByZXNzb3xlbnwwfHx8fDE2NTE1NDkxODY&amp;ixlib=rb-1.2.1&amp;h=1000"
            title="Espresso"
          ></app-populartodaycard>
        </div>
        <div class="recom.row adv.row">
          <app-advcard
            img="https://images.unsplash.com/photo-1616671285410-2a676a9a433d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDF8fGZpbmUlMjBkaW5pbmd8ZW58MHx8fHwxNjUxNTgzODEw&amp;ixlib=rb-1.2.1&amp;h=1500"
            desc="a MIchelin star restaurant for the ultimate dining experience"
            title="L' Appart Restaurant"
            rootClassName="advcard-root-class-name"
          ></app-advcard>
          <app-advcard
            img="https://images.unsplash.com/photo-1601430727739-4150d4568f20?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDZ8fHNha2V8ZW58MHx8fHwxNjUxNTg0ODY1&amp;ixlib=rb-1.2.1&amp;h=1500"
            desc="World's renowned sake"
            title="Hakkaisan Tokubetsu Junmai"
            rootClassName="advcard-root-class-name1"
          ></app-advcard>
          <app-advcard
            img="https://images.unsplash.com/photo-1505583321514-5bf447e794f2?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDMwfHxDaWdhcnxlbnwwfHx8fDE2NTE1ODU4Mjk&amp;ixlib=rb-1.2.1&amp;h=1500"
            desc="Visit our brand new cigar lounge at Level 2"
            title="Cigar Lounge"
          ></app-advcard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppHeaderpanel from '../components/headerpanel'
import AppPopulartodaycard from '../components/populartodaycard'
import AppAdvcard from '../components/advcard'

export default {
  name: 'FoodLevel1',
  components: {
    AppHeaderpanel,
    AppPopulartodaycard,
    AppAdvcard,
  },
  metaInfo: {
    title: 'food_level_1 - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'food_level_1 - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.food-level1-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
@media(max-width: 991px) {
  .food-level1-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .food-level1-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .food-level1-container {
    height: 100vh;
  }
  .food-level1-menucard {
    box-shadow: 0px 0px 10px 5px rgba(121, 121, 121, 0.3);
    background-color: transparent;
  }
}
</style>
