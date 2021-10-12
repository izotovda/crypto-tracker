import store from "../index.js";

class CustomTickersService {

  static getList() {
    return store.state.customTickerList;
  }

  static setList(newList) {
    store.dispatch("setCustomList", newList);
  }

  static add(ticker) {
    store.dispatch("addTickerToCustomList", ticker);
  }

  static remove(ticker) {
    store.dispatch("removeTickerFromCustomList", ticker);
  }

  static setPrice(ticker, newPrice) {
    store.dispatch("setTickerPrice", {ticker, newPrice});
  }
}

export { CustomTickersService };