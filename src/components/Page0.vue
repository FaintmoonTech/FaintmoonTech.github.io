<template>
  <div class="page0 page" :style="pageStyle">
    <p class="title">
      星迷
    </p>
    <p class="subtitle">
      漫步满天繁星，探寻宇宙之迷
    </p>
    <div class="downloads">
      <div class="android" v-on:click="goToMarket">
        <img src="../assets/android-logo.svg" />
        Android
      </div>
      <div class="ios">
        <img src="../assets/apple-logo.svg" />
        App Store
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageZero',
  props: {
    scrollY: Number,
    winHeight: Number
  },
  computed: {
    pageStyle() {
      return {
        opacity: 1 - 3 * this.scrollY,
        top: `${-this.scrollY * this.winHeight * 0.2}px`
      }
    }
  },
  methods: {
    goToMarket() {
      window.open("market://detail?id=com.tencent.mm")
    }
  }
}
</script>

<style>
div.app>div.page0 {
  color: #ffffff;
  height: 100vh;
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

div.app>div.page0>p {
  animation-name: show;
  animation-duration: 3s;
}

div.app>div.page0>p.subtitle {
  color: #ffffffaa;
}

div.downloads {
  display: flex;
  flex-direction: row;
  animation-name: show;
  animation-duration: 3s;
}

div.downloads>div {
  height: 2rem;
  margin: 1rem;
  border: 2px solid #ffffff55;
  border-radius: 2rem;
  margin-top: 5rem;
  display: flex;
  align-items: center;
  padding-left: 1rem;
  padding-right: 1rem;
  font-size: 0.8rem;
  cursor: pointer;
}

div.downloads>div.android:hover {
  background: #ffffff33;
}

div.downloads>div.ios {
  color: #ffffff77;
  cursor: auto;
}

div.downloads>div>img {
  width: 1.1rem;
  margin-right: 0.4rem;
}

@keyframes show {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}
</style>