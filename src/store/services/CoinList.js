import store from "../index.js";

class CoinList {

  static set(list) {
    store.dispatch('fillCoinList', list);
  }

  static get() {
    return store.state.coinList;
  }

  static getCoinData(coinName) {
    if (!store.state.coinList) return;

    for (const coin of Object.entries(store.state.coinList)) {
      const coinData = coin[1];

      if (
        coinName.toUpperCase() === coinData.coinName.toUpperCase() ||
        coinName.toUpperCase() === coinData.fullName.toUpperCase() ||
        coinName.toUpperCase() === coinData.name.toUpperCase()
      ) {
        return {
          name: coinData.name,
          coinName: coinData.coinName,
          price: "-",
          imageUrl: coinData.imageUrl,
          description: coinData.description
        }
      }
    }
  }

  static findAllMatches(text) {
    const matches = [];

    for (const coin of Object.entries(store.state.coinList)) {
      const coinData = coin[1];
      const regexp = new RegExp(`^${text}`, "gi");

      if (coinData.fullName.match(regexp) || coinData.name.match(regexp)) {
      matches.push(coinData.fullName);
      }
    }  
    return matches;
  }
}

export { CoinList };