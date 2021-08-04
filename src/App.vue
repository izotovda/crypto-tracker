<template>
  <div id="app">
    <div v-if="!isCoinListLoaded" class="backdrop"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <input
      v-model="tickerToAdd"
      @keydown.enter="addTicker(tickerToAdd)"
      @input="resetErrorMessages"
      placeholder="DOGE..."
    />
    <div class="error-message">
      <span v-if="isTickerNameInvalid">Invalid token name.</span>
      <span v-if="isTickerAlreadyAdded">Token is already added.</span>
    </div>
    <div
      class="input-suggestions"
      v-for="(suggestedTicker, index) in suggestions"
      :key=index
      @click="addTicker(suggestedTicker.name)">
      {{ suggestedTicker.fullName }}
    </div>
    <ul>
      <li v-for="(ticker, index) in trackedTickers" :key="index">
        {{ ticker.name }} - USD: {{ ticker.price }}
        <button @click="removeTicker(ticker)">delete</button>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
import { getCoinList, subscribeTicker, unsubscribeTicker, updateTickersPrice } from "./api.js";

export default {
  //custom options
  coinList: {},

  data() {
    return {
      tickerToAdd: "",
      trackedTickers: [],
      suggestions: [],
      isCoinListLoaded: false,
      isTickerNameInvalid: false,
      isTickerAlreadyAdded: false
    };
  },

  created() {
    const coinList = JSON.parse(localStorage.getItem('coin-list'));

    if (coinList) {
      this.finishPageLoading(coinList)
    } else {
      getCoinList().then(loadedList => {
        this.finishPageLoading(loadedList);
        
        localStorage.setItem('coin-list', JSON.stringify(loadedList));
      });
    }

    const tickers = localStorage.getItem('tickers');

    if (tickers) {
      this.trackedTickers = [...JSON.parse(tickers)];
      this.trackedTickers.forEach(t => {
        t.price = "-";
        subscribeTicker(t.name, (newPrice) => this.updatePrice(t.name, newPrice));
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
      if (this.tickerToAdd.trim() == "") {
        this.suggestions = [];
        return;
      }
      
      const suggestionsAmount = 10;
      const coinList = this.$options.coinList;
      this.suggestions = [];

      for (const coin in coinList) {
        if (coinList[coin].fullName.toUpperCase().includes(this.tickerToAdd.toUpperCase())) {
          this.suggestions.push( {
            fullName: coinList[coin].fullName,
            name: coinList[coin].name
            });
          if (this.suggestions.length == suggestionsAmount) return;
        }
      } 
    }
  },

  methods: {
    addTicker(ticker) {
      if (this.tickerToAdd == "") return;

      const tickerName = this.getCorrectTickerName(ticker);

      if (!tickerName) {
        this.isTickerNameInvalid = true;
      } else {
        this.checkIfAlreadyAdded(tickerName);

        if (!this.isTickerAlreadyAdded) {
          const currentTicker = {
            name: tickerName,
            price: "-",
          };

          this.trackedTickers.push(currentTicker);

          subscribeTicker(currentTicker.name, (newPrice) => this.updatePrice(currentTicker.name, newPrice));
          }
      }

      this.tickerToAdd = "";
    },

    removeTicker(tickerToRemove) {
      this.trackedTickers = this.trackedTickers.filter(
        t => t != tickerToRemove
      );

      unsubscribeTicker(tickerToRemove.name);
    },

    updatePrice(tickerName, newPrice) {
      this.trackedTickers.forEach(t => {
        if (t.name === tickerName) {
          t.price = newPrice;
        }
      });

      const tickerToUpdate = this.trackedTickers.filter(t => t.name === tickerName).map(t => t[0]);
      tickerToUpdate.price = newPrice;
    },

    finishPageLoading(loadedData) {
      this.$options.coinList = {...loadedData};
      this.isCoinListLoaded = true;   
    },

    getCorrectTickerName(name) {
      const coinList = this.$options.coinList;

      for (const coin in coinList) {
        if (name.toUpperCase() === coinList[coin].coinName.toUpperCase() || name.toUpperCase() === coinList[coin].symbol.toUpperCase()) {
          return coinList[coin].symbol;
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
    }
  },
};
</script>

<style>
.backdrop {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 80%;
  background: blueviolet;
}

.error-message {
  color: red;
}

.input-suggestions {
  cursor: pointer;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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