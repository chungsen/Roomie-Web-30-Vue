<template>
  <div class="tools-chat-wide-container">
    <div class="page.overlay">
      <div class="tools.chat.header.panel">
        <div class="tools.metric.box">
          <div class="tools.session.count">
            <div class="tools.session.count.box tools.boxcolor.overdue">
              <span class="tools.session.count.txt">5</span>
            </div>
            <span class="tools.session.count.label">
              <span>Overdue Messages</span>
            </span>
          </div>
          <div class="tools.session.count">
            <div class="tools.session.count.box tools.boxcolor.delivered">
              <span class="tools.session.count.txt">3</span>
            </div>
            <span class="tools.session.count.label">
              <span>Delivered Orders</span>
            </span>
          </div>
          <div class="tools.session.count">
            <div class="tools.boxcolor.confirmed tools.session.count.box">
              <span class="tools.session.count.txt">1</span>
            </div>
            <span class="tools.session.count.label">
              <span>Confirmed Orders</span>
            </span>
          </div>
          <div class="tools.session.count">
            <div class="tools.session.count.box tools.boxcolor.neworders">
              <span class="tools.session.count.txt">2</span>
            </div>
            <span class="tools.session.count.label">
              <span>New</span>
              <br />
              <span>Orders</span>
            </span>
          </div>
        </div>
        <div class="tools.chat.activeuser.panel">
          <div class="tools.chat.activeuser.info">
            <div class="activeuser.box">
              <div class="tools.chat.ring.75 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <span class="tools.activeuser.name">
                Pool TB06 - Johnny Krawowsky
              </span>
            </div>
            <div class="activeuser.tag.box">
              <app-toolssessiontagdelivered
                rootClassName="toolssessiontagdelivered-root-class-name1"
              ></app-toolssessiontagdelivered>
              <app-toolssessiontagconfirmed
                rootClassName="toolssessiontagconfirmed-root-class-name1"
              ></app-toolssessiontagconfirmed>
              <app-toolssessiontagneworder
                rootClassName="toolssessiontagneworder-root-class-name1"
              ></app-toolssessiontagneworder>
            </div>
          </div>
          <div class="search.box.height.top search.box.container">
            <div class="chat.search.box">
              <input
                type="text"
                placeholder="search message"
                class="
                  activechat.search.input
                  input
                  msg.text.pc
                  msg.text.pc.nomargin
                "
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
            rootClassName="settingsmenu-root-class-name"
          ></app-settingsmenu>
        </div>
      </div>
      <div class="tools.body.panel">
        <div class="tools.chatlist.panel">
          <div class="tools.chatlist.bar">
            <div class="search.box.container">
              <div class="chat.search.box">
                <input
                  type="text"
                  placeholder="search users"
                  class="
                    activechat.search.input
                    input
                    msg.text.pc
                    msg.text.pc.nomargin
                  "
                />
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" class="filter.icon">
              <path
                d="M384 736c0-151.234 95.874-280.486 230.032-330.2 16.28-36.538 25.968-77.164 25.968-117.8 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h397.306c-8.664-30.53-13.306-62.732-13.306-96z"
              ></path>
              <path
                d="M736 448c-159.058 0-288 128.942-288 288s128.942 288 288 288c159.056 0 288-128.942 288-288s-128.942-288-288-288zM896 768h-128v128h-64v-128h-128v-64h128v-128h64v128h128v64z"
              ></path></svg
            ><svg viewBox="0 0 1152 1024" class="filter.icon">
              <path
                d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
              ></path>
              <path
                d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"
              ></path></svg
            ><svg viewBox="0 0 1024 1024" class="filter.icon">
              <path d="M320 768v-768h-128v768h-160l224 224 224-224h-160z"></path>
              <path d="M448 0h576v128h-576v-128z"></path>
              <path d="M448 192h448v128h-448v-128z"></path>
              <path d="M448 384h320v128h-320v-128z"></path>
              <path d="M448 576h192v128h-192v-128z"></path>
            </svg>
          </div>
          <div class="tools.chatlist.box">
            <div class="tools.chat.session">
              <div class="tools.chat.ring.50 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">location - name</span>
                <span class="tools.chat.last.text">
                  Do you have any bottles i can use to
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagconfirmed></app-toolssessiontagconfirmed>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.answered tools.user.icon.circle">
                <div class="tools.chat.inner.staff tools.chat.icon.innercircle">
                  <svg
                    viewBox="0 0 1097.142857142857 1024"
                    class="max.icon.white"
                  >
                    <path
                      d="M338.857 512c-59.429 1.714-113.143 27.429-151.429 73.143h-76.571c-57.143 0-110.857-27.429-110.857-90.857 0-46.286-1.714-201.714 70.857-201.714 12 0 71.429 48.571 148.571 48.571 26.286 0 51.429-4.571 76-13.143-1.714 12.571-2.857 25.143-2.857 37.714 0 52 16.571 103.429 46.286 146.286zM950.857 876c0 92.571-61.143 148-152.571 148h-499.429c-91.429 0-152.571-55.429-152.571-148 0-129.143 30.286-327.429 197.714-327.429 19.429 0 90.286 79.429 204.571 79.429s185.143-79.429 204.571-79.429c167.429 0 197.714 198.286 197.714 327.429zM365.714 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286zM768 365.714c0 121.143-98.286 219.429-219.429 219.429s-219.429-98.286-219.429-219.429 98.286-219.429 219.429-219.429 219.429 98.286 219.429 219.429zM1097.143 494.286c0 63.429-53.714 90.857-110.857 90.857h-76.571c-38.286-45.714-92-71.429-151.429-73.143 29.714-42.857 46.286-94.286 46.286-146.286 0-12.571-1.143-25.143-2.857-37.714 24.571 8.571 49.714 13.143 76 13.143 77.143 0 136.571-48.571 148.571-48.571 72.571 0 70.857 155.429 70.857 201.714zM1024 146.286c0 80.571-65.714 146.286-146.286 146.286s-146.286-65.714-146.286-146.286 65.714-146.286 146.286-146.286 146.286 65.714 146.286 146.286z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">
                  Staff Group - Housekeeping
                </span>
                <span class="tools.chat.last.text tools.chat.msg.answered">
                  Yes SIr!
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">27/04/22</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.answered tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Lobby - John</span>
                <span class="tools.chat.last.text tools.chat.msg.answered">
                  Yes we have
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagconfirmed></app-toolssessiontagconfirmed>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.answered tools.user.icon.circle">
                <div class="tools.chat.inner.staff tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M320 192c0-106.039 85.961-192 192-192s192 85.961 192 192c0 106.039-85.961 192-192 192s-192-85.961-192-192zM768.078 448h-35.424l-199.104 404.244 74.45-372.244-96-96-96 96 74.45 372.244-199.102-404.244h-35.424c-127.924 0-127.924 85.986-127.924 192v320h768v-320c0-106.014 0-192-127.922-192z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Staff - Sequisha</span>
                <span class="tools.chat.last.text tools.chat.msg.answered">
                  Ok.will handle it
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.75 tools.user.icon.circle">
                <div class="tools.chat.icon.innercircle tools.chat.inner.website">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M512 0c-282.77 0-512 229.23-512 512s229.23 512 512 512 512-229.23 512-512-229.23-512-512-512zM512 960.002c-62.958 0-122.872-13.012-177.23-36.452l233.148-262.29c5.206-5.858 8.082-13.422 8.082-21.26v-96c0-17.674-14.326-32-32-32-112.99 0-232.204-117.462-233.374-118.626-6-6.002-14.14-9.374-22.626-9.374h-128c-17.672 0-32 14.328-32 32v192c0 12.122 6.848 23.202 17.69 28.622l110.31 55.156v187.886c-116.052-80.956-192-215.432-192-367.664 0-68.714 15.49-133.806 43.138-192h116.862c8.488 0 16.626-3.372 22.628-9.372l128-128c6-6.002 9.372-14.14 9.372-22.628v-77.412c40.562-12.074 83.518-18.588 128-18.588 70.406 0 137.004 16.26 196.282 45.2-4.144 3.502-8.176 7.164-12.046 11.036-36.266 36.264-56.236 84.478-56.236 135.764s19.97 99.5 56.236 135.764c36.434 36.432 85.218 56.264 135.634 56.26 3.166 0 6.342-0.080 9.518-0.236 13.814 51.802 38.752 186.656-8.404 372.334-0.444 1.744-0.696 3.488-0.842 5.224-81.324 83.080-194.7 134.656-320.142 134.656z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Web - Guest 1</span>
                <span class="tools.chat.last.text tools.chat.msg.answered">
                  Do you have any more rooms for this
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.answered tools.user.icon.circle">
                <div class="tools.chat.inner.fb tools.chat.icon.innercircle">
                  <svg
                    viewBox="0 0 602.2582857142856 1024"
                    class="max.icon.white"
                  >
                    <path
                      d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">FB - Joshua Fisher</span>
                <span class="tools.chat.last.text tools.chat.msg.answered">
                  Thanks Joshua. See you at the hotel
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.50 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Lobby TB03 - Melanie</span>
                <span class="tools.chat.last.text">Thanks!</span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagneworder></app-toolssessiontagneworder>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.50 tools.user.icon.circle">
                <div class="tools.chat.icon.innercircle tools.chat.inner.wechat">
                  <svg
                    viewBox="0 0 1170.2857142857142 1024"
                    class="max.icon.white"
                  >
                    <path
                      d="M331.429 263.429c0-31.429-20.571-52-52-52-30.857 0-62.286 20.571-62.286 52 0 30.857 31.429 51.429 62.286 51.429 31.429 0 52-20.571 52-51.429zM756 553.143c0-20.571-20.571-41.143-52-41.143-20.571 0-41.143 20.571-41.143 41.143 0 21.143 20.571 41.714 41.143 41.714 31.429 0 52-20.571 52-41.714zM621.143 263.429c0-31.429-20.571-52-51.429-52-31.429 0-62.286 20.571-62.286 52 0 30.857 30.857 51.429 62.286 51.429 30.857 0 51.429-20.571 51.429-51.429zM984 553.143c0-20.571-21.143-41.143-52-41.143-20.571 0-41.143 20.571-41.143 41.143 0 21.143 20.571 41.714 41.143 41.714 30.857 0 52-20.571 52-41.714zM832 326.286c-13.143-1.714-26.286-2.286-40-2.286-196.571 0-352 146.857-352 327.429 0 30.286 4.571 59.429 13.143 86.857-13.143 1.143-25.714 1.714-38.857 1.714-52 0-93.143-10.286-145.143-20.571l-144.571 72.571 41.143-124.571c-103.429-72.571-165.714-166.286-165.714-280 0-197.143 186.286-352 414.286-352 203.429 0 382.286 124 417.714 290.857zM1170.286 646.857c0 93.143-61.714 176-145.143 238.286l31.429 103.429-113.714-62.286c-41.714 10.286-83.429 21.143-124.571 21.143-197.143 0-352-134.857-352-300.571s154.857-300.571 352-300.571c186.286 0 352 134.857 352 300.571z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">WeChat - June</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
            <div class="tools.chat.session.focus tools.chat.session">
              <div class="tools.chat.ring.75 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Pool TB06- John</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagdelivered></app-toolssessiontagdelivered>
                  <app-toolssessiontagconfirmed></app-toolssessiontagconfirmed>
                  <app-toolssessiontagneworder></app-toolssessiontagneworder>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.25 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Rest Wasabi - Nicholas</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagneworder></app-toolssessiontagneworder>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.100 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Room 1404 - Nicholas</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagdelivered
                    text="2"
                  ></app-toolssessiontagdelivered>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.75 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Guest - Melanie</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.50 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Guest - Melanie</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagdelivered
                    text="1"
                  ></app-toolssessiontagdelivered>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.100 tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Guest - John</span>
                <span class="tools.chat.last.text">
                  Hey i have been waiting for my water bottle for the past
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons">
                  <app-toolssessiontagdelivered></app-toolssessiontagdelivered>
                </div>
              </div>
            </div>
            <div class="tools.chat.session">
              <div class="tools.chat.ring.answered tools.user.icon.circle">
                <div class="tools.chat.inner.guest tools.chat.icon.innercircle">
                  <svg viewBox="0 0 1024 1024" class="max.icon.white">
                    <path
                      d="M576 706.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                    ></path>
                  </svg>
                </div>
              </div>
              <div class="tools.chat.user.info">
                <span class="tools.chat.user.name">Guest - John</span>
                <span class="tools.chat.last.text tools.chat.msg.answered">
                  Sure sir
                </span>
              </div>
              <div class="tools.chat.sessioninfo">
                <span class="tools.chat.session.timestamp">17:32</span>
                <div class="tools.chat.session.statusicons"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="tools.msgwindow.panel">
          <div class="chat.window msg.container.received">
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
                  <span></span>
                  <span>order</span>
                </span>
                <span class="order.details.location">
                  <span>
                    Room
                    <span v-html="raw30xu"></span>
                  </span>
                  <span>1204 -</span>
                  <br />
                  <span>Johnny Krawowsky</span>
                </span>
                <span class="order.details.timestamp">
                  <span class="tools-chat-wide-text22">02/05/22</span>
                  <br />
                  <span class="tools-chat-wide-text24">13:59PM</span>
                </span>
              </div>
              <div class="tools.boxcolor.neworders order.details.topbar">
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
                Ordered 8 mins ago
              </span>
              <div class="order.details.respond.box">
                <div class="order.response.button order.respondbutton.color">
                  <span class="order.respondbutton.text">
                    <span>Cancel</span>
                    <br />
                    <span>Order</span>
                  </span>
                </div>
                <div class="order.response.button">
                  <span class="order.respondbutton.text">
                    <span>
                      10
                      <span v-html="rawhaas"></span>
                    </span>
                    <br />
                    <span>mins</span>
                  </span>
                </div>
                <div class="order.response.button">
                  <span class="order.respondbutton.text">
                    <span>20</span>
                    <br />
                    <span>mins</span>
                  </span>
                </div>
                <div class="order.response.button">
                  <span class="order.respondbutton.text">
                    <span>30</span>
                    <br />
                    <span>mins</span>
                  </span>
                </div>
                <div class="order.response.button">
                  <span class="order.respondbutton.text">
                    <span>No</span>
                    <br />
                    <span>Estimates</span>
                  </span>
                </div>
              </div>
            </div>
            <app-toolsmsghotel
              msgtext="Hi! Welcome to the hotel. I am Jen and please drop me a message here if you need any assistance."
              image_src="/playground_assets/double-tick-1500h.png"
              timestamp="Ms. Sequisha - 13:59 PM"
            ></app-toolsmsghotel>
            <app-toolsmsgguest
              msgtext="Hi Jen. Thanks. will sure do. BY the way do you have any toothbrush"
              timestamp="Room 1204 Nick - 13:58 PM"
              msgtranslate="嗨，珍。谢谢。一定会的。顺便问一下你有牙刷吗"
              rootClassName="toolsmsgguest-root-class-name"
            ></app-toolsmsgguest>
            <app-toolsmsgguestimg
              image_src="https://images.unsplash.com/photo-1651174233411-deececc508b3?ixid=Mnw5MTMyMXwwfDF8YWxsfDE1fHx8fHx8Mnx8MTY1MTI3NTExOA&amp;ixlib=rb-1.2.1&amp;h=200"
              timestamp="Room 1204 Nick - 13:59 PM"
            ></app-toolsmsgguestimg>
            <app-toolsmsghotelimg
              image_src="https://images.unsplash.com/photo-1596036753691-6fef728e62cc?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDEzfHx2ZXNwYXxlbnwwfHx8fDE2NTEzMjgzOTU&amp;ixlib=rb-1.2.1&amp;h=200"
              timestamp="Ms. Sequisha 14:12 PM"
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
              rootClassName="toolsmsgguest-root-class-name1"
            ></app-toolsmsgguest>
            <app-toolsmsgguestorder></app-toolsmsgguestorder>
            <app-toolsmsghotel
              msgtext="Your Food order is confirmed and estimated time is 25 mins."
              image_src="/playground_assets/double-tick-1500h.png"
              timestamp="Mr. Nathan - 12:54 PM"
              rootClassName="toolsmsghotel-root-class-name"
            ></app-toolsmsghotel>
            <app-toolsmsghotelbutton
              button="Received"
              msgtext="Your order has been delivered. Bon appetit!"
              image_src="/playground_assets/double-tick-1500h.png"
              timestamp="Ms. Nathan - 13:12 PM"
              rootClassName="toolsmsghotelbutton-root-class-name"
            ></app-toolsmsghotelbutton>
          </div>
          <div class="input.group">
            <div class="input.container">
              <input
                type="text"
                placeholder="type message"
                class="input msg.text.pc msg.text.pc.nomargin"
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
        <div class="tools.filter.panel">
          <div class="tools.filter.group">
            <div class="tools.filter.title">
              <span
                class="
                  filter.panel.section.title
                  msg.text.pc
                  msg.text.pc.nomargin
                "
              >
                user filters
              </span>
              <svg viewBox="0 0 1152 1024" class="tools.filter.icon">
                <path
                  d="M768 770.612v-52.78c70.498-39.728 128-138.772 128-237.832 0-159.058 0-288-192-288s-192 128.942-192 288c0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h896c0-128.968-166.898-235.64-384-253.388z"
                ></path>
                <path
                  d="M327.196 795.328c55.31-36.15 124.080-63.636 199.788-80.414-15.054-17.784-28.708-37.622-40.492-59.020-30.414-55.234-46.492-116.058-46.492-175.894 0-86.042 0-167.31 30.6-233.762 29.706-64.504 83.128-104.496 159.222-119.488-16.914-76.48-61.94-126.75-181.822-126.75-192 0-192 128.942-192 288 0 99.060 57.502 198.104 128 237.832v52.78c-217.102 17.748-384 124.42-384 253.388h279.006c14.518-12.91 30.596-25.172 48.19-36.672z"
                ></path>
              </svg>
            </div>
            <div class="tools.filter.box">
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Facebook</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Website</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">WeChat</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Skype</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Whatsapp</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">ROOMIE</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Staff</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Group</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
            </div>
          </div>
          <div class="tools.filter.group">
            <div class="tools.filter.title">
              <span
                class="
                  filter.panel.section.title
                  msg.text.pc
                  msg.text.pc.nomargin
                "
              >
                chat type filters
              </span>
              <svg viewBox="0 0 1152 1024" class="tools.filter.icon">
                <path
                  d="M1088 901.166c0 45.5 26.028 84.908 64 104.184v15.938c-10.626 1.454-21.472 2.224-32.5 2.224-68.008 0-129.348-28.528-172.722-74.264-26.222 6.982-54.002 10.752-82.778 10.752-159.058 0-288-114.616-288-256s128.942-256 288-256c159.058 0 288 114.616 288 256 0 55.348-19.764 106.592-53.356 148.466-6.824 14.824-10.644 31.312-10.644 48.7zM512 0c278.458 0 504.992 180.614 511.836 405.52-49.182-21.92-103.586-33.52-159.836-33.52-95.56 0-185.816 33.446-254.138 94.178-70.846 62.972-109.862 147.434-109.862 237.822 0 44.672 9.544 87.888 27.736 127.788-5.228 0.126-10.468 0.212-15.736 0.212-27.156 0-53.81-1.734-79.824-5.044-109.978 109.978-241.25 129.7-368.176 132.596v-26.916c68.536-33.578 128-94.74 128-164.636 0-9.754-0.758-19.33-2.164-28.696-115.796-76.264-189.836-192.754-189.836-323.304 0-229.75 229.23-416 512-416z"
                ></path>
              </svg>
            </div>
            <div class="tools.filter.box">
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">New Orders</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">
                  Confirmed Orders
                </span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Non Orders</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Answered</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
            </div>
          </div>
          <div class="tools.filter.group">
            <div class="tools.filter.title">
              <span
                class="
                  filter.panel.section.title
                  msg.text.pc
                  msg.text.pc.nomargin
                "
              >
                location filters
              </span>
              <svg viewBox="0 0 1024 1024" class="tools.filter.icon">
                <path
                  d="M753.365 226.304c-133.291-131.115-349.397-131.115-482.688 0-133.291 131.157-133.291 343.765 0 474.88l241.323 237.44 241.365-237.44c133.291-131.115 133.291-343.723 0-474.88zM512 575.957c-28.501 0-55.253-11.093-75.435-31.232-41.6-41.6-41.6-109.269 0-150.869 20.139-20.139 46.933-31.232 75.435-31.232s55.296 11.093 75.435 31.232c41.6 41.6 41.6 109.312 0 150.869-20.139 20.139-46.933 31.232-75.435 31.232z"
                ></path>
              </svg>
            </div>
            <div class="tools.filter.box">
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Rooms</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Lobby</span>
                <app-toolstoggleactive></app-toolstoggleactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Pool</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Wasabi</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">
                  Grill &amp; Bar
                </span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">
                  Coffee Lounge
                </span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">Tien Yang</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
              <div class="tools.filter.card">
                <span class="msg.text.pc msg.text.pc.nomargin">No location</span>
                <app-toolstoggleinactive></app-toolstoggleinactive>
              </div>
            </div>
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
import AppToolstoggleactive from '../components/toolstoggleactive'
import AppToolstoggleinactive from '../components/toolstoggleinactive'

export default {
  name: 'ToolsChatWide',
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
    AppToolstoggleactive,
    AppToolstoggleinactive,
  },

  data() {
    return {
      raw30xu: ' ',
      rawhaas: ' ',
    }
  },

  metaInfo: {
    title: 'tools-chat-wide - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'tools-chat-wide - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.tools-chat-wide-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.tools-chat-wide-text22 {
  text-align: right;
}
.tools-chat-wide-text24 {
  text-align: right;
}
@media(max-width: 991px) {
  .tools-chat-wide-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .tools-chat-wide-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .tools-chat-wide-container {
    height: 100vh;
  }
}
</style>
