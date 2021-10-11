<template>
  <div class="app">
    <div class="backdrop" v-if="!isCoinListLoaded">
      Loading...
    </div>
    <c-header/>
    <router-view class="content" v-if="isCoinListLoaded"/>
  </div>
</template>

<script>
import CHeader from "./components/CHeader.vue";
import { CustomTickerList } from "./store/services/CustomTickerList.js";
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
  
  computed: {
    CustomTickerList() {
      return CustomTickerList.get();
    }
  },

  watch: {
    // update local storage on CustomTickerList (store) change
    CustomTickerList() {
      localStorage.setItem('tickers', JSON.stringify(this.CustomTickerList));
    }
  },

  created() {
    // load list of all available coins and save it in store
    getCoinList().then(loadedList => {
      CoinList.set(loadedList);
      this.isCoinListLoaded = true;
    });

    // push tickers from local storage to CustomTickerList (store)
    const tickers = localStorage.getItem('tickers');
    
    if (tickers) {  
      CustomTickerList.set(JSON.parse(tickers));
    }
  },
}
</script>

<style lang="scss">
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
  min-width: 320px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
  opacity: 60%;
  background: rgba(77, 177, 76);
  color:honeydew;
}

.content {
  margin: 0 auto;
  max-width: 800px;
}
</style>
