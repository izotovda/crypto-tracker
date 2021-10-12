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
import { CustomTickersService } from "./store/services/CustomTickersService.js";
import { CoinService } from "./store/services/CoinService.js";
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
      return CustomTickersService.getList();
    }
  },

  watch: {
    // update local storage on CustomTickerList (store) change
    CustomTickerList() {
      localStorage.setItem("tickers", JSON.stringify(this.CustomTickerList));
    }
  },

  created() {
    // push tickers from local storage to CustomTickerList (store)
    const tickers = localStorage.getItem("tickers");
    
    if (tickers) {  
      CustomTickersService.setList(JSON.parse(tickers));
    }

    // load list of all available coins and save it in store
    this.loadCoinList();
  },

  methods: {
    async loadCoinList() {
      const list = await getCoinList();
      CoinService.setCoinList(list);
      this.isCoinListLoaded = true;

      // fill custiom ticker list with default tickers if empty
      if (!this.CustomTickerList.length) this.addDefaultTickers();
    },

    addDefaultTickers() {
      const defaultTickers = [ "BTC", "ETH", "DOGE" ];

      defaultTickers.forEach(coinName => {
        const coinData = CoinService.getCoinData(coinName);
        CustomTickersService.add(coinData);
      })
    }
  }
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
