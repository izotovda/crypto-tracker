<template>
  <div class="container">
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
        ref="matchList"
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
    <ul class="tickers__list">    
      <li
        class="tickers__item"
        v-for="(ticker, index) in trackedTickers"
        :key="index"
      >
        <currency-ticker
          :ticker="ticker"
          :listPosition="index + 1"
          @remove-request="removeTicker(ticker)"
          @info-request="openCoinPage($event, ticker.name)"
        />
      </li>
    </ul>  
  </div>
</template>

<script>
import { subscribeTicker, unsubscribeTicker, updateTickersPrice } from "../api.js";
import CurrencyTicker from "../components/CurrencyTicker.vue";

export default {
  components: {
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
      trackedTickers: [],
      matchList: [],
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
    },
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
      if (!this.tickerToAdd.trim().length || /\\/.test(this.tickerToAdd)) {
        this.matchList = [];
        return;
      }
      
      const coinList = this.coinList;
      this.matchList = [];

      for (const coin in coinList) {
          const regexp = new RegExp(`^${this.tickerToAdd}`, "gi");

          if (coinList[coin].fullName.match(regexp) || coinList[coin].name.match(regexp)) {
          this.matchList.push( {
            fullName: coinList[coin].fullName,
            name: coinList[coin].name
          });
        }
      }
    }
  },

  methods: {
    addTicker(ticker) {
      if (!this.tickerToAdd) return;

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

      this.tickerToAdd = "";
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
        if (name.toUpperCase() === coinList[coin].coinName.toUpperCase() || name.toUpperCase() === coinList[coin].name.toUpperCase()) {
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

        this.handleMatchListScrolling();
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

        this.handleMatchListScrolling()
      }
    },

    handleMatchListScrolling() {
      this.$nextTick(() => {
        if (this.selectedMatch !== null) {
          const matchList = this.$refs.matchList;
          const selectedItem = this.$refs.matchList.querySelector('.match-item_selected');

          const itemCoords = selectedItem.getBoundingClientRect();
          const listCoords = matchList.getBoundingClientRect();

          if (itemCoords.bottom > listCoords.bottom) {
            selectedItem.scrollIntoView(false);
          } else if (itemCoords.top < listCoords.top) {
            selectedItem.scrollIntoView(true);
          }
        }
      });  
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
.search-container {
  position: relative;
  height: 64px;
  max-width: 240px;
  margin: 0 auto;
}

.search-input-wrapper {
  width: 100%;
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
  z-index: 1;
  width: 100%;
  max-height: 200px;
  overflow: auto;
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

.tickers__list {
  margin: 1.25em auto;
  width: min-content;
  list-style: none;

  .tickers__item:not(:last-child) {
    margin-bottom: 5px;  
  }
}
</style>