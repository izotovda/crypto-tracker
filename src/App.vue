<template>
  <div class="app">
    <div v-if="!isCoinListLoaded" class="backdrop">
      Loading...
    </div>

    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>

    <div class="search-container">
      <div class="search-input-wrapper">
        <input
        class="search-input"
        v-model="tickerToAdd"
        @keydown.enter="addTicker(searchInputData)"
        @keydown.escape="tickerToAdd = ''  "
        @input="resetErrorMessages"
        @focus="showMatches"
        @blur="hideMatches"
        @keydown.down="selectNextMatch"
        @keydown.up="selectPreviousMatch"
        @mouseover="selectedMatch = null"
        @click="selectedMatch = null"
        placeholder="DOGE..."
        autofocus
        />
      </div>
      <div 
        class="match-list"
        v-if="isSearchFocused"
        >
        <div
          class="match-item"
          :class="{'match-item_selected': match === selectedMatch}"
          v-for="(match, index) in matchList"
          :key="index"
          @mouseover="selectedMatch = match"
          @mousedown.prevent
          @click="addTicker(searchInputData)"
        >
          {{ match.fullName }}  
        </div>
      </div>
      <div class="error-message-wrapper">
        <span v-if="isTickerNameInvalid">Invalid token name</span>
        <span v-if="isTickerAlreadyAdded">Token is already added</span>
      </div>
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
  coinList: null,
  MAX_MATCHLIST_LENGTH: 6,

  data() {
    return {
      tickerToAdd: "",
      trackedTickers: [],
      matchList: [],
      isCoinListLoaded: false,
      isTickerNameInvalid: false,
      isTickerAlreadyAdded: false,
      isSearchFocused: false,
      selectedMatch: null
    };
  },

  computed: {
    searchInputData() {
      return this.selectedMatch === null
        ? this.tickerToAdd
        : this.selectedMatch.name;
    }
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
      if (this.tickerToAdd.trim() == "") {
        this.matchList = [];
        return;
      }
      
      const maxListLength = this.$options.MAX_MATCHLIST_LENGTH;
      const coinList = this.$options.coinList;
      this.matchList = [];

      for (const coin in coinList) {
          const regexp = new RegExp(`^${this.tickerToAdd}`, "gi");

          if (coinList[coin].fullName.match(regexp) || coinList[coin].name.match(regexp)) {
          this.matchList.push( {
            fullName: coinList[coin].fullName,
            name: coinList[coin].name
          });
          if (this.matchList.length == maxListLength) return;
        }
      } 
    }
  },

  methods: {
    addTicker(ticker) {
      if (!this.tickerToAdd) return;

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

          subscribeTicker(currentTicker.name, (newPrice) => this.updateTickerPrice(currentTicker.name, newPrice));
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

    updateTickerPrice(tickerName, newPrice) {
      this.trackedTickers.forEach(t => {
        if (t.name === tickerName) {
          t.price = newPrice;
        }
      });

      const tickerToUpdate = this.trackedTickers.filter(t => t.name === tickerName).map(t => t[0]);
      tickerToUpdate.price = newPrice;
    },

    getCorrectTickerName(name) {
      const coinList = this.$options.coinList;

      for (const coin in coinList) {
        if (name.toUpperCase() === coinList[coin].coinName.toUpperCase() || name.toUpperCase() === coinList[coin].name.toUpperCase()) {
          return coinList[coin].name;
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

    finishPageLoading(loadedData) {
      this.$options.coinList = {...loadedData};
      this.isCoinListLoaded = true;   
    },

    resetErrorMessages() {
      this.isTickerAlreadyAdded = false;
      this.isTickerNameInvalid = false;
    },

    hideMatches() {
      setTimeout(() => {
        this.isSearchFocused = false;
        this.selectedMatch = null;
      });
    },

    showMatches() {
      this.isSearchFocused = true;      
    },

    selectNextMatch() {
      const listLength = this.matchList.length;
      const currentIndex = this.matchList.indexOf(this.selectedMatch);

      if (listLength) {
        this.selectedMatch = this.selectedMatch === null
          ? this.matchList[0]
          : currentIndex >= listLength - 1
            ? null
            : this.matchList[currentIndex + 1];
      }
    },

    selectPreviousMatch() {
      const listLength = this.matchList.length;
      const currentIndex = this.matchList.indexOf(this.selectedMatch);

      if (listLength) {
        this.selectedMatch = this.selectedMatch === null
          ? this.matchList[listLength - 1]
          : currentIndex === 0
            ? null
            : this.matchList[currentIndex - 1];
      }
    }
  },
};
</script> 

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

.app {
  height: 500px;
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

.search-container {
  position: relative;
  height: 64px;
  max-width: 240px;
  margin: 0 auto;
  
}

.search-input-wrapper {
  width: 100%;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
}

.search-input {
  width: 100%;
  padding: 4px 8px;
  line-height: 1.6em;
  border: none;
  outline: none;
  font-size: 16px;
}

.match-list {
  position: absolute;
  width: 100%;
  border-radius: 0 0 5px 5px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
  background: white;
}

.match-item {
  padding: 6px 8px;
  text-align: left;
  cursor: pointer;
  font-size: 14px;
}

.match-item_selected {
  background: rgb(232, 245, 232);
}

.error-message-wrapper {
  line-height: 2em;
  color: rgb(235, 28, 28);
}

li {
  list-style: none;
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