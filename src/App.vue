<template>
  <div class="app">
    <div v-if="!isCoinListLoaded" class="backdrop">
      Loading...
    </div>
    <c-header/>
    <div class="main-body">
      <router-view/>
    </div>
  </div>
</template>

<script>
import CHeader from "./components/CHeader.vue";
import { CoinList } from "./store/services/CoinList.js";
import { getCoinList } from "./api.js";

export default {
  components: {
    CHeader
  },
  
  data() {
    return {
      isCoinListLoaded: false,
    }
  },  

  created() {
    getCoinList().then(loadedList => {
      CoinList.set(loadedList);
      this.isCoinListLoaded = true;
    });
  },
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

html, body {
    height:100%;
}

.app {
  min-height: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: rgb(245, 245, 245);
}

.backdrop {
  position: fixed;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 80%;
  background: rgb(15, 124, 12);
  color:honeydew;
}

.main-body {
  margin: 0 auto;
  max-width: 920px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>