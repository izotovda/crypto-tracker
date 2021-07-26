<template>
  <div id="app">
    <div v-if="!isCoinListLoaded" class="backdrop"></div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <input
      v-model="tickerToAdd"
      @keydown.enter="addTicker"
      placeholder="DOGE..."
    />
    <ul>
      <li v-for="(ticker, index) in trackedTickers" :key="index">
        {{ ticker }}
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
      isCoinListLoaded: false,
    };
  },

  created() {
    getCoinList().then((loadedList) => {
      this.$options.coinList = { ...loadedList };
      this.isCoinListLoaded = true;
    });

    const tickerUpdateInterval = 3000;

    this.$options.intervalId = setInterval(
      () => updateTickersPrice(this.trackedTickers.map((t) => t.name)),
      tickerUpdateInterval
    );
  },

  beforeDestroy() {
    clearInterval(this.$options.intervalId);
  },

  methods: {
    addTicker() {
      const currentTicker = {
        name: this.tickerToAdd.toUpperCase(),
        price: "-",
      };

      this.trackedTickers.push(currentTicker);
      this.tickerToAdd = "";

      subscribeTicker(currentTicker.name, (newPrice) =>
        this.updatePrice(currentTicker.name, newPrice)
      );
    },

    removeTicker(tickerToRemove) {
      this.trackedTickers = this.trackedTickers.filter(
        t => t != tickerToRemove
      );

      unsubscribeTicker(tickerToRemove.name);
    },

    updatePrice(tickerName, newPrice) {
      this.trackedTickers
        .filter(t => t.name === tickerName)
        .forEach(t => t.price = newPrice);
    },
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
