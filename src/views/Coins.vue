<template>
  <div class="coin-page">
    <h1 class="coin-page__caption">{{ coinData.coinName }} ({{ coinData.name }})</h1>
    <div class="coin-page__content-container">
      <div class="coin-card">
        <img class="coin-card__logo" :src="coinData.imageUrl" alt="Coin logo">
        <div class="coin-card__price">{{ formatedPrice }}</div>
        <button class="coin-card__button">Start tracking</button>
      </div>
      <div class="main-content">
        <div class="main-content__buttons-container">
          <a
            class="main-content__button"
            :class="{'main-content__button_active': activeWindow === 'description'}"
            @click="switchToDescription"
            @keydown.enter="switchToDescription"
            tabindex="0"
            >Description</a> |
          <a
            class="main-content__button"
            :class="{'main-content__button_active': activeWindow === 'hourlyChart'}"
            @click="switchToHourlyChart"
            @keydown.enter="switchToHourlyChart"
            tabindex="0"
            >Historical Data</a>
        </div>
        <div class="main-content__data-container">
          <template v-if="activeWindow === 'description'">
            <p class="main-content__text">{{ coinData.description }}</p>
          </template>
          <template v-if="activeWindow === 'hourlyChart'"> 
            <p v-if="isDataNotFound">Data not found</p>
            <line-chart
              class="main-content__line-chart"
              v-if="isChartDataLoaded && !isDataNotFound"
              label="Price, $"
              :chartData="chartData"
            />           
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import { CoinList } from "../store/services/CoinList.js";
import { getCoinPrice, getHourlyPairData } from "../api.js";

export default {
  components: { 
    LineChart 
  },

  props: {
    coin: {
      type: String,
      required: true
    },
  },

  data() {
    return {
      price: null,
      activeWindow: "description",
      hourlyData: [],
      isChartDataLoaded: false,
    }
  },

  computed: {
    coinData() {
      return CoinList.getCoinData(this.coin.toUpperCase()) || {};
    },

    formatedPrice() {
      return !this.price ? "-" : "$ " + this.price
    },

    chartData() {
      if (this.hourlyData) {
        return this.hourlyData.map(priceData => {
          const timestamp = priceData.time * 1000; //converting unix timestamp to ms
          const time = new Date(timestamp); //open-time for each period

          let formatedTime = time.getHours() + ":00"; //to string "HH:MM"

          return {
            x: formatedTime,
            y: priceData.open
          };
        });
      } else {
        return [{x: 0, y: 0}];
      }
    },

    isDataNotFound() {
      return this.hourlyData ? false : true;
    }
  },

  watch: {
    coinData() {
      this.updatePrice();
    }
  },

  created() {
    if (!this.coinData.name) this.$router.push({ name: "NotFound" });

    this.updatePrice();
    // set interval for price update
    const tickerUpdateInterval = 10000;

    this.$options.intervalId = setInterval(this.updatePrice, tickerUpdateInterval);
  },

  beforeDestroy() {
    clearInterval(this.$options.intervalId);
  },

  beforeRouteUpdate(to, from, next) {
    // check if coin exists, push to 404 if not
    const nextCoinData = CoinList.getCoinData(to.params.coin.toUpperCase());
    if (nextCoinData) {
      next();

      // update line chart
      this.isChartDataLoaded = false;
      this.getHourlyData(nextCoinData.name).then(() => this.isChartDataLoaded = true);
    }
    else this.$router.push({ name: "NotFound" });
  },

  methods: {
    async switchToHourlyChart() {
      this.activeWindow = "hourlyChart";
      await this.getHourlyData(this.coinData.name);
      this.isChartDataLoaded = true;     
    },

    switchToDescription() {
      this.activeWindow = "description";
      this.isChartDataLoaded = false;
    },

    async getHourlyData(coinName) {
      this.hourlyData = await getHourlyPairData(coinName); 
    },

    async updatePrice() {
      this.price = await getCoinPrice(this.coinData.name);
    }
  },  
}
</script>

<style lang="scss" scoped>
@import "../styles/default.scss";

$mediaMinWidth: 653px;

.coin-page {
  @extend %default-container;

  &__caption {
    @extend %default-caption;
  }

  &__content-container {
    margin-top: 16px;
    display: grid;
    grid-template-columns: max-content 1fr;
    column-gap: 20px;

    @media(max-width: $mediaMinWidth) {
      display: block;
    } 
  }
}

.coin-card { 
  width: 150px;
  height: max-content;
  display: grid;
  row-gap: 6px;
  font-size: 16px;
  background-color: rgb(250, 250, 250);

  @media(max-width: $mediaMinWidth) {
    margin-bottom: 12px;
    grid-template-columns: 150px 140px;
    grid-template-rows: min-content 1fr;
    column-gap: 6px;
    justify-content: start;
  } 

  &__logo {
    width: 100%;
    height: 150px;
    border: solid 1px rgb(200, 200, 200);

    @media(max-width: $mediaMinWidth) {
      grid-row: span 2;
    }
  }

  &__price {
    height: 1.6em;
    line-height: 1.6em;
    text-align: center;
    font-weight: bold;
    border: solid 1px rgb(200, 200, 200);
    background-color: inherit;
  }

  &__button {
    width: 100%;
    height: 2.4em;
    border:0.16em solid rgb(250, 250, 250);
    cursor: pointer;
    background-color: #42b983;
    font-weight: bold;
    color:rgb(250, 250, 250);
    transition: all 0.15s;

    &:hover {
      border-color:#DDDDDD;
    }

    &:active {
      color:#cecece;
      border-color:#cecece;
    }
  }
}

.main-content {
  &__buttons-container {
    margin-bottom: 12px;
    height: max-content;
  }

  &__button {
    margin-bottom: 20px;
    text-transform: uppercase;
    font-weight: 800;
    letter-spacing: 1px;
    transition: all 200ms linear;
    cursor: pointer;

    @media(max-width: 356px) {
      font-size: 15px;
      letter-spacing: 0.2px;
    } 

    &:not(:first-child) {
      margin-left: 5px;
    }

    &:not(:last-child) {
      margin-right: 5px;
    }

    &:hover {
      color: #42b983;
    } 

    &_active {
      border-bottom: 1px solid;
    }
  }

  &__text {
    @extend %default-paragraph;

    @media(max-width: 356px) {
      font-size: 15px;
    } 
  }
}
</style>
