<template>
  <div class="app">
    <div v-if="!isCoinListLoaded" class="backdrop">
      Loading...
    </div>
    <div id="nav">
      <router-link :to="{name: 'Home', params: {coinList: coinList}}"> Home </router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view :coinList="coinList"/>
  </div>
</template>

<script>
import { getCoinList } from "./api.js";

export default ({
  data() {
    return {
      isCoinListLoaded: false,
      coinList: null,
    }
  },

  created() {
    getCoinList().then(loadedList => {
      this.coinList = loadedList;
      this.isCoinListLoaded = true;
    });
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

html, body {
    height:100%; /*both html and body*/
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
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 80%;
  background: rgb(15, 124, 12);
  color:honeydew;
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