<template>
  <div class="adv.card-advpanel" v-bind:class="rootClassName">
    <img :alt="advimg_alt" :src="img" class="adv.card-advimg" />
    <div class="adv.card-advmask">
      <div class="adv.card-advtext">
        <span class="adv.card-title">{{ title }}</span>
        <span class="adv.card-desc">{{ desc }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Advcard',
  props: {
    desc: String,
    rootClassName: String,
    advimg_alt: {
      type: String,
      default: 'image',
    },
    title: {
      type: String,
      default: 'title',
    },
    img: String,
  },
}
</script>

<style scoped>
.adv\.card-advpanel {
  flex: 0 0 auto;
  width: 80%;
  height: 100%;
  display: flex;
  overflow: hidden;
  position: relative;
  max-width: 80vw;
  box-shadow: 0px 0px 10px 3px rgba(121, 121, 121, 0.12);
  align-items: center;
  border-radius: 3.5vmin;
}
.adv\.card-advimg {
  width: 60%;
  height: 100%;
  object-fit: cover;
  margin-right: 2vw;
  object-position: center;
}
.adv\.card-advmask {
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  align-items: flex-start;
  border-color: var(--dl-color-gray-900);
  border-width: 1px;
  border-radius: inherit;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(90deg, rgba(255, 255, 255, 0) 0.00%,rgba(255, 255, 255, 0.2) 22.00%,rgba(255, 255, 255, 0.3) 31.00%,rgba(255, 255, 255, 0.5) 39.00%,rgba(255, 255, 255, 0.8) 47.00%,rgb(255, 255, 255) 60.00%,rgba(255, 255, 255, 0.9) 80.00%,rgb(255, 255, 255) 100.00%);
}
.adv\.card-advtext {
  height: 100%;
  display: flex;
  padding: 1vh;
  margin-left: 50%;
  flex-direction: column;
  justify-content: center;
}
.adv\.card-title {
  font-size: 1.8vh;
  font-weight: 500;
  margin-bottom: 0.5vh;
}
.adv\.card-desc {
  overflow: hidden;
  font-size: 1.2vh;
  text-overflow: clip;
}




@media(max-width: 991px) {
  .adv\.card-advpanel {
    width: 100%;
  }
}
@media(max-width: 767px) {
  .adv\.card-advpanel {
    width: 100%;
  }
}
@media(max-width: 479px) {
  .adv\.card-advpanel {
    width: 100%;
  }
  .adv\.card-root-class-name {
    width: 100%;
    height: 100%;
  }
  .adv\.card-root-class-name1 {
    width: 100%;
    height: 100%;
  }
  .adv\.card-root-class-name2 {
    width: 100%;
    height: 100%;
  }
  .adv\.card-root-class-name3 {
    width: 100%;
    height: 100%;
  }
}
</style>
