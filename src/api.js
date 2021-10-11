const singlePriceURL = new URL('https://min-api.cryptocompare.com/data/price?tsyms=USD');
const multiPriceURL = new URL('https://min-api.cryptocompare.com/data/pricemulti?tsyms=USD');

const tickersHandlers = new Map();

export const getCoinPrice = async (coinName) => {
  singlePriceURL.searchParams.set('fsym', coinName);

  try {
    const resolve = await fetch(singlePriceURL);
    const price = await resolve.json();
    return price.USD;
    
  } catch(error) {
    console.log(error);
  }

}

export const updateTickersPrice = tickers => {
  if (!tickers.length) return

  multiPriceURL.searchParams.set('fsyms', tickers.join());

  fetch(multiPriceURL)
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
};

export const unsubscribeTicker = (ticker) => {
  tickersHandlers.delete(ticker);
};

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

export const getHourlyPairData = async (coinName) => {
  try {
    const url = new URL('https://min-api.cryptocompare.com/data/v2/histohour?tsym=USD&limit=24');
    url.searchParams.set('fsym', coinName);
    
    const resolve = await fetch(url);
    const rowData = await resolve.json();
    const hourlyData = Object.entries(rowData.Data.Data).map(item => item[1]) ?? [];
    return hourlyData;

  } catch(error) {
    console.log(error);
  }
};