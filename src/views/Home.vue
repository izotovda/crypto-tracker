<template>
  <div>
    <div class="search__container">
      <!-- re-do with v-model later -->
      <autocomplete-search
        class="searh__autocomplete"
        :suggestions="suggestions"
        @submit="addTicker"
        @input="updateTickerToAdd"
        placeholder="Enter coin name"
        :autofocus="true"
      />
      <div class="searh__errors-container">
        <span v-if="isTickerNameInvalid">Invalid token name</span>
        <span v-if="isTickerAlreadyAdded">Token is already added</span>
      </div>
    </div>
    <ul class="tickers__list">    
      <li
        class="tickers__item"
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
      newTicker: "",
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

    newTicker() {
      this.resetErrorMessages();

      // return if input value is empty or contains only spaces
      if (!this.newTicker.trim().length || /\\/.test(this.newTicker)) { 
        return;
      }
      
      const coinList = this.coinList;
      this.suggestions = [];

      for (const coin in coinList) {
          const regexp = new RegExp(`^${this.newTicker}`, "gi"); // Переделать работу со скобками! 

          // add a suggestion if full name or short name starts with input data
          if (coinList[coin].fullName.match(regexp) || coinList[coin].name.match(regexp)) {
          this.suggestions.push(coinList[coin].fullName);
        }
      }  
    },
  },

  methods: {
    updateTickerToAdd(ticker) { //re-do with v-model later
      this.newTicker = ticker;
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
.search__container {
  height: 64px;
  width: 240px;
  margin: 0 auto;

  .searh__autocomplete {
    margin: 0 0 5px 0;
  }

  .searh__errors-container {
    line-height: 2em;
    color: rgb(235, 28, 28);
  }
}

.tickers__list {
  margin: 1.25em auto;
  width: min-content;
  list-style: none;

  .tickers__item:not(:last-child) {
    margin-bottom: 5px;  
  }
}
</style>