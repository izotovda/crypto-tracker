<template>
  <div class="custom-list">
    <h1 class="custom-list__caption">Custom coin list</h1>
    <p class="custom-list__user-guide">Enter coin name below to start tracking it. You can see additional information such as coin description or historical data by clicking on coin name or logo.</p>
    <div class="search">
      <autocomplete-search
        class="search__autocomplete"
        :suggestions="suggestions"
        @submit="addTicker"
        @input-change="updateTickerToAdd"
        placeholder="Enter coin name"
      />
      <div class="search__errors-container">
        <span v-if="isTickerNameInvalid">Invalid token name</span>
        <span v-if="isTickerAlreadyAdded">Token is already added</span>
      </div>
    </div>
    <ul class="tickers-list">
      <li
        class="tickers-list__item"
        v-for="(ticker, index) in CustomTickerList"
        :key="index"
      >
        <currency-ticker
          :ticker="ticker"
          :positionInList="index + 1"
          @remove-request="removeTicker(ticker)"
          @info-request="openCoinPage($event, ticker.name)"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import { subscribeTicker, unsubscribeTicker, updateTickersPrice } from "../api.js";
import AutocompleteSearch from "../components/AutocompleteSearch.vue";
import CurrencyTicker from "../components/CurrencyTicker.vue";
import { CustomTickerList } from "../store/services/CustomTickerList.js";
import { CoinList } from "../store/services/CoinList.js";

export default {
  components: {
    AutocompleteSearch,
    CurrencyTicker
  },

  data() {
    return {
      tickerToAdd: "",
      suggestions: [],
      isTickerNameInvalid: false,
      isTickerAlreadyAdded: false,
    };
  },

  computed: {
    CustomTickerList() {
      return CustomTickerList.get();
    }
  },

  created() {
    // load tickers from local storage
    const tickers = localStorage.getItem('tickers');
    
    if (tickers) {  
      CustomTickerList.set(JSON.parse(tickers));

      this.CustomTickerList.forEach(t => {
        t.price = "-";
        subscribeTicker(t.name, (newPrice) => CustomTickerList.setPrice(t, newPrice));
      })
    }

    // set interval for price update
    const tickerUpdateInterval = 2000;

    this.$options.intervalId = setInterval(
      () => updateTickersPrice(CustomTickerList.get().map((t) => t.name)),
      tickerUpdateInterval
    );
  },

  beforeDestroy() {
    clearInterval(this.$options.intervalId);
  },

  watch: {
    CustomTickerList() {
      localStorage.setItem('tickers', JSON.stringify(this.CustomTickerList));
    },

    tickerToAdd() {     
      // form suggestion list if input value is not empty nor contains only spaces
      if (!this.tickerToAdd.trim().length || /\\/.test(this.tickerToAdd)) { 
        return;
      }
      this.suggestions = CoinList.findAllMatches(this.tickerToAdd);
    },
  },

  methods: {
    updateTickerToAdd(inputValue) {
      this.tickerToAdd = inputValue;
      this.resetErrorMessages();
    },

    addTicker(tickerName) {
      const ticker = CoinList.getCoinData(tickerName);

      // check if coin with that name exists
      if (!ticker) {
        this.isTickerNameInvalid = true;
        return;
      }
      
      // check if custom-ticker-list already contains coin with that name 
      this.checkIfAlreadyAdded(ticker.name);
      if (this.isTickerAlreadyAdded) return;

      CustomTickerList.add(ticker);
      subscribeTicker(ticker.name, (newPrice) => CustomTickerList.setPrice(ticker, newPrice));
    },

    removeTicker(ticker) {
      CustomTickerList.remove(ticker);
      unsubscribeTicker(ticker.name);
    },

    checkIfAlreadyAdded(tickerName) {
      for (const ticker of this.CustomTickerList) {
        if (ticker.name === tickerName) {
          this.isTickerAlreadyAdded = true;
          return;
        }
      }
    },

    resetErrorMessages() {
      this.isTickerAlreadyAdded = false;
      this.isTickerNameInvalid = false;
    },

    openCoinPage(event, coinName) {
      const routerProperties = {name: 'Coins', params: {coin: coinName}};

      // handle left click
      if (event.which === 1) {
        this.$router.push(routerProperties);
      }

      // handle middle click
      if (event.which === 2) {
        const newRoute = this.$router.resolve(routerProperties);
        window.open(newRoute.href);
      }
    }
  },
};
</script> 

<style lang="scss" scoped>
@import "../styles/default.scss";

.custom-list {
  @extend %default-container;

  &__caption {
    @extend %default-caption;
  }

  &__user-guide {
    @extend %default-paragraph;
  }
}

.search {
  height: 64px;
  width: 240px;
  margin: 0 auto;

  &__autocomplete {
    margin: 5px 0;
  }

  &__errors-container {
    line-height: 2em;
    text-align: center;
    color: rgb(235, 28, 28);
  }
}

.tickers-list {
  margin: 1em auto;
  width: min-content;
  list-style: none;

  &__item {
    margin-bottom: 5px;  
  }
}
</style>
