import store from "../index.js";

class CustomTickerList {

  static get() {
    return store.state.customTickerList;
  }

  static set(newList) {
    store.dispatch('setCustomList', newList);
  }

  static add(ticker) {
    store.dispatch('addTickerToCustomList', ticker);
  }

  static remove(ticker) {
    store.dispatch('removeTickerFromCustomList', ticker);
  }

  static setPrice(ticker, newPrice) {
    store.dispatch('setTickerPrice', {ticker, newPrice});
  }
}

export { CustomTickerList };