import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    customTickerList: [],
    coinList: null
  },

  mutations: {
    SET_TICKER_LIST(state, newList) {
      state.customTickerList = newList;
    },

    ADD_TICKER(state, ticker) {
      state.customTickerList.push(ticker);
    },

    REMOVE_TICKER(state, ticker) {
      state.customTickerList = state.customTickerList.filter(t => t !== ticker);
    },

    SET_TICKER_PRICE(state, {ticker, newPrice}) {
      const t = state.customTickerList.find(t => t === ticker);
      t.price = newPrice;
    },

    FILL_COIN_LIST(state, coinList) {
      state.coinList = {...coinList};
    }
  },

    actions: {
      setCustomList({ commit }, newList) {
      commit('SET_TICKER_LIST', newList);
    },

    addTickerToCustomList({ commit }, ticker) {
      commit('ADD_TICKER', ticker);
    },

    removeTickerFromCustomList({ commit }, ticker) {
      commit('REMOVE_TICKER', ticker);
    },

    setTickerPrice({ commit }, {ticker, newPrice}) {
      commit('SET_TICKER_PRICE', {ticker, newPrice});
    },

    fillCoinList({ commit }, list) {
      commit('FILL_COIN_LIST', list);
    },
  }
});

export default store;