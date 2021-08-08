const API_KEY = `893bab5ecbccecb436271b0f965e0efac90f674f38d5d0c4955dd78a9877e235`;

const tickersHandlers = new Map();

const url = new URL('https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD');
url.searchParams.set('api_key', API_KEY);

export const getCoinList = () => {
  return fetch('https://min-api.cryptocompare.com/data/all/coinlist')
    .then(resolve => resolve.json())
    .then(coinList => {
      for (let coin in coinList.Data) {
        const { CoinName: coinName, Description: description, FullName: fullName, Name: name } = coinList.Data[coin];
        const imageUrl = "https://www.cryptocompare.com" + coinList.Data[coin].ImageUrl
        coinList.Data[coin] = {...{coinName, description, fullName, imageUrl, name}};
      }

      return coinList.Data;
    })
    .catch(error => console.log(error));
};

export const updateTickersPrice = tickers => {
  if (!tickers.length) return

  url.searchParams.set('fsyms', tickers.join());

  fetch(url)
    .then(resolve => resolve.json())
    .then(priceList => {
      tickersHandlers.forEach((fn, coinName) => {
        if (priceList[coinName]) fn(priceList[coinName].USD);
      });
    })
    .catch(error => console.log(error));
};

export const subscribeTicker = (ticker, fn) => {
  tickersHandlers.set(ticker, fn);
}

export const unsubscribeTicker = (ticker) => {
  tickersHandlers.delete(ticker);
}