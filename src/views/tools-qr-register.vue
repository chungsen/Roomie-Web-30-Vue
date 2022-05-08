<template>
  <div class="tools-qr-register-container">
    <div class="page.overlay">
      <div class="tools.chat.header.panel">
        <div class="tools.chat.activeuser.panel">
          <div class="tools.chat.activeuser.info">
            <svg viewBox="0 0 1024 1024" class="tools.back.button">
              <path d="M498 166l-346 346 346 346-76 76-422-422 422-422z"></path>
            </svg>
            <div class="activeuser.box">
              <svg viewBox="0 0 804.5714285714286 1024" class="qr.icon">
                <path
                  d="M219.429 658.286v73.143h-73.143v-73.143h73.143zM219.429 219.429v73.143h-73.143v-73.143h73.143zM658.286 219.429v73.143h-73.143v-73.143h73.143zM73.143 804h219.429v-218.857h-219.429v218.857zM73.143 365.714h219.429v-219.429h-219.429v219.429zM512 365.714h219.429v-219.429h-219.429v219.429zM365.714 512v365.714h-365.714v-365.714h365.714zM658.286 804.571v73.143h-73.143v-73.143h73.143zM804.571 804.571v73.143h-73.143v-73.143h73.143zM804.571 512v219.429h-219.429v-73.143h-73.143v219.429h-73.143v-365.714h219.429v73.143h73.143v-73.143h73.143zM365.714 73.143v365.714h-365.714v-365.714h365.714zM804.571 73.143v365.714h-365.714v-365.714h365.714z"
                ></path>
              </svg>
              <span class="text.45.bold.black">Register QR Code Location</span>
            </div>
          </div>
        </div>
      </div>
      <div class="tools-qr-register-bodypanel tools.body.panel">
        <img
          alt="image"
          src="https://images.unsplash.com/photo-1632435404858-40b82be50439?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDExfHxxciUyMGNvZGV8ZW58MHx8fHwxNjUxODkwNDMw&amp;ixlib=rb-1.2.1&amp;w=1500"
          class="tools-qr-register-image"
        />
        <div class="tools-qr-register-container1">
          <div class="tools-qr-register-container2">
            <select class="tools-qr-register-select">
              <option value="Room" selected>Room</option>
              <option value="Pool">Pool</option>
              <option value="Gym">Gym</option>
              <option value="Lobby">Lobby</option>
              <option value="Wasabi">Wasabi</option>
            </select>
          </div>
          <span class="tools-qr-register-text">-</span>
          <div class="tools-qr-register-container3">
            <input
              type="text"
              required
              placeholder="room or table number"
              class="input"
            />
          </div>
          <svg
            viewBox="0 0 1024 1024"
            class="tools-qr-register-icon4 max.icon.grey"
          >
            <path
              d="M992 384h-352v-352c0-17.672-14.328-32-32-32h-192c-17.672 0-32 14.328-32 32v352h-352c-17.672 0-32 14.328-32 32v192c0 17.672 14.328 32 32 32h352v352c0 17.672 14.328 32 32 32h192c17.672 0 32-14.328 32-32v-352h352c17.672 0 32-14.328 32-32v-192c0-17.672-14.328-32-32-32z"
            ></path>
          </svg>
        </div>
        <div class="tools-qr-register-container4">
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
          <app-toolsqrcard title="Room - 1204"></app-toolsqrcard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AppToolsqrcard from '../components/toolsqrcard'

export default {
  name: 'ToolsQrRegister',
  components: {
    AppToolsqrcard,
  },
  metaInfo: {
    title: 'tools-qr-register - Roomie Web 3.0',
    meta: [
      {
        property: 'og:title',
        content: 'tools-qr-register - Roomie Web 3.0',
      },
    ],
  },
}
</script>

<style scoped>
.tools-qr-register-container {
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: auto;
  min-height: 100vh;
  align-items: center;
  flex-direction: column;
}
.tools-qr-register-bodypanel {
  flex-direction: column;
}
.tools-qr-register-image {
  width: 100%;
  height: 40%;
  object-fit: cover;
}
.tools-qr-register-container1 {
  flex: 0 0 auto;
  width: 100%;
  height: 4rem;
  display: flex;
  padding: 1.2rem 1rem 1.2rem 0.5rem;
  font-size: 1rem;
  align-items: center;
  flex-direction: row;
  justify-content: flex-start;
  background-color: var(--dl-color-gray-900);
}
.tools-qr-register-container2 {
  width: autp;
  border-radius: 0.6rem;
  padding-right: 0.5rem;
  background-color: var(--dl-color-gray-white);
}
.tools-qr-register-select {
  width: 100%;
  outline: none;
  padding: 0.3rem 1rem;
  border-radius: 0.6rem;
}
.tools-qr-register-text {
  font-size: 2rem;
  margin-left: 0.5rem;
  margin-right: 0.5rem;
}
.tools-qr-register-container3 {
  flex: 1;
  border-radius: 0.6rem;
  background-color: var(--dl-color-gray-white);
}
.tools-qr-register-icon4 {
  width: auto;
  height: 100%;
  margin-left: 1rem;
}
.tools-qr-register-container4 {
  flex: 1;
  width: 100%;
  display: flex;
  padding: 1.5rem;
  overflow: scroll;
  flex-wrap: wrap;
  overflow-x: hidden;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-around;
}
@media(max-width: 991px) {
  .tools-qr-register-container {
    height: 100vh;
  }
}
@media(max-width: 767px) {
  .tools-qr-register-container {
    height: 100vh;
  }
}
@media(max-width: 479px) {
  .tools-qr-register-container {
    height: 100vh;
  }
}
</style>
