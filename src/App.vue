<template>
  <div class="app">
    <img src="./assets/bg0.jpg" class="bg" />
    <div id="scrollEle"></div>
    <AnchorList :scrollY="scrollY" />
    <Page0 :scrollY="scrollY" :winHeight="winHeight" />
    <Page1 :scrollY="scrollY" :winHeight="winHeight" :winWidth="winWidth" />
    <Page2 :scrollY="scrollY" :winHeight="winHeight" />
    <Page3 :scrollY="scrollY" :winHeight="winHeight" />
    <Page4 :scrollY="scrollY" />
  </div>
</template>

<script>
import Page0 from './components/Page0.vue'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'
import Page3 from './components/Page3.vue'
import Page4 from './components/Page4.vue'
import AnchorList from './components/AnchorList.vue'

export default {
  name: 'App',
  components: {
    Page0,
    Page1,
    Page2,
    Page3,
    Page4,
    AnchorList
},
  mounted() {
    window.onscroll = () => {
      const scrollY = window.scrollY / window.innerHeight;
      this.scrollY = scrollY;
    }
    window.onresize = () => {
      this.winWidth = window.document.body.clientWidth;
      this.winHeight = window.innerHeight;
    }
    this.winWidth = window.document.body.clientWidth;
    this.winHeight = window.innerHeight;
  },
  data() {
    return {
      scrollY: 0,
      // 不包括滚动条宽度
      winWidth: window.document.body.clientWidth,
      winHeight: window.innerHeight
    }
  },
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
}

#scrollEle {
  height: 2000vh;
}

.bg {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: fixed;
  left: 0;
  top: 0;
  z-index: -1;
}

div.page {
  display: none;
  width: 100%;
  position: fixed;
  top: 0;
}

.page > p.title {
  padding-top: 40px;
  margin: 0;
  font-size: 2rem;
  font-weight: lighter;
}

.page > p.subtitle {
  font-size: 1rem;
}
</style>