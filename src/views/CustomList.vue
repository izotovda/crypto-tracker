<template>
  <div class="container">
    <h1>Custom coin list</h1>
    <p>Enter coin name below to start tracking it. You can see additional information by clicking on coin name or logo.</p>
    <div class="search">
      <!-- re-do with v-model later -->
      <autocomplete-search
        class="searh__autocomplete"
        :suggestions="suggestions"
        @submit="handleSubmit"
        @input="updateTickerToAdd"
        placeholder="Enter coin name"
        :autofocus="true"
      />
      <div class="searh__errors-container">
        <span v-if="isTickerNameInvalid">Invalid token name</span>
        <span v-if="isTickerAlreadyAdded">Token is already added</span>
      </div>
    </div>
    <ul class="tickers-list">    
      <li
        class="tickers-list__item"
        v-for="(ticker, index) in trackedTickers"
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

export default {
  components: {
    AutocompleteSearch,
    CurrencyTicker
  },

  props: {
    coinList: {
      default: null,
    },
  },

  data() {
    return {
      tickerToAdd: "",
      suggestions: [],
      trackedTickers: [],
      isTickerNameInvalid: false,
      isTickerAlreadyAdded: false,
    };
  },

  created() {
    const tickers = localStorage.getItem('tickers');

    if (tickers) {
      this.trackedTickers = [...JSON.parse(tickers)];
      this.trackedTickers.forEach(t => {
        t.price = "-";
        subscribeTicker(t.name, (newPrice) => this.updateTickerPrice(t.name, newPrice));
      });
    }

    const tickerUpdateInterval = 2000;

    this.$options.intervalId = setInterval(
      () => updateTickersPrice(this.trackedTickers.map((t) => t.name)),
      tickerUpdateInterval
    );
  },

  beforeDestroy() {
    clearInterval(this.$options.intervalId);
  },

  watch: {
    trackedTickers() {
      localStorage.setItem('tickers', JSON.stringify(this.trackedTickers));
    },

    tickerToAdd() {
      this.resetErrorMessages();

      // return if input value is empty or contains only spaces
      if (!this.tickerToAdd.trim().length || /\\/.test(this.tickerToAdd)) { 
        return;
      }
      
      const coinList = this.coinList;
      this.suggestions = [];

      for (const coin in coinList) {
          const regexp = new RegExp(`^${this.tickerToAdd}`, "gi"); // Переделать работу со скобками! 

          // add a suggestion if full name or short name starts with input data
          if (coinList[coin].fullName.match(regexp) || coinList[coin].name.match(regexp)) {
          this.suggestions.push(coinList[coin].fullName);
        }
      }  
    },
  },

  methods: {
    updateTickerToAdd(ticker) { // re-do with v-model later
      this.tickerToAdd = ticker;
    },

    handleSubmit(ticker) { // re-do with v-model later
      this.addTicker(ticker),
      this.tickerToAdd = "";
    },

    addTicker(ticker) {
      const tickerData = this.getTickerData(ticker);

      if (!tickerData) {
        this.isTickerNameInvalid = true;
      } else {
        this.checkIfAlreadyAdded(tickerData.name);

        if (!this.isTickerAlreadyAdded) {

          this.trackedTickers.push(tickerData);

          subscribeTicker(tickerData.name, (newPrice) => this.updateTickerPrice(tickerData.name, newPrice));
          }
      }
    },

    removeTicker(tickerToRemove) {
      this.trackedTickers = this.trackedTickers.filter(t => t != tickerToRemove);

      unsubscribeTicker(tickerToRemove.name);
    },

    updateTickerPrice(tickerName, newPrice) {
      this.trackedTickers.forEach(t => {
        if (t.name === tickerName) {
          t.price = newPrice;
        }
      });

      const tickerToUpdate = this.trackedTickers.filter(t => t.name === tickerName).map(t => t[0]);
      tickerToUpdate.price = newPrice;
    },

    getTickerData(name) {
      const coinList = this.coinList;

      for (const coin in coinList) {
        if (
          name.toUpperCase() === coinList[coin].fullName.toUpperCase() ||
          name.toUpperCase() === coinList[coin].coinName.toUpperCase() ||
          name.toUpperCase() === coinList[coin].name.toUpperCase()
        ) {
          return {
            name: coinList[coin].name,
            coinName: coinList[coin].coinName,
            price: "-",
            imageUrl: coinList[coin].imageUrl
          };
        }
      } 
    },

    checkIfAlreadyAdded(tickerName) {
      let isAdded = false;

      for (const ticker of this.trackedTickers) {
        if (ticker.name === tickerName) {
          isAdded = true;
        }
      }

      this.isTickerAlreadyAdded = isAdded;
    },

    resetErrorMessages() {
      this.isTickerAlreadyAdded = false;
      this.isTickerNameInvalid = false;
    },

    openCoinPage(event, coinName) {
      const routerProperties = {name: 'Coins', params: {coin: coinName, coinList: this.coinList}};

      if (event.which === 1) this.$router.push(routerProperties);

      if (event.which === 2) {
        const newRoute = this.$router.resolve(routerProperties);
        window.open(newRoute.href);
      }
    }
  },
};
</script> 

<style lang="scss" scoped>
.container {
  margin-top: 16px;
  // border: solid 1px black;
}

.search {
  height: 64px;
  width: 240px;
  margin: 0 auto;

  &__autocomplete {
    margin: 0 0 5px 0;
  }

  &__errors-container {
    line-height: 2em;
    color: rgb(235, 28, 28);
  }
}

.tickers-list {
  margin: 1.25em auto;
  width: min-content;
  list-style: none;

  &__item:not(:last-child) {
    margin-bottom: 5px;  
  }
}
</style>