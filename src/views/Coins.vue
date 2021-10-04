<template>
  <div>
    <img :src="coinData.imageUrl" alt="Token icon">
    <h1>{{ coinData.coinName }} ({{ coinData.name }})</h1>
    <a
      class="coin-info__button"
      :class="{'coin-info__button_active': activeWindow === 'description'}"
      @click="switchToDescription"
      @keydown.enter="switchToDescription"
      tabindex="0"
      >Description
    </a> |
    <a
      class="coin-info__button"
      :class="{'coin-info__button_active': activeWindow === 'hourlyChart'}"
      @click="switchToHourlyChart"
      @keydown.enter="switchToHourlyChart"
      tabindex="0"
      >Hourly Data
    </a>
    <div class="coin-info__container">
    <template v-if="activeWindow === 'description'">
      <p class="coin-info__content">{{ coinData.description }}</p>
    </template>
    <template v-if="activeWindow === 'hourlyChart'">
      <div>
        <p v-if="isDataNotFound">Data not found</p>
        <line-chart
          v-if="isChartDataLoaded && !isDataNotFound"
          label="Price, $"
          :chartData="chartData"
        />
      </div>
    </template>
    </div>
  </div>
</template>

<script>
import LineChart from "../components/LineChart.vue";
import { CoinList } from "../store/services/CoinList.js";
import { getHourlyPairData } from "../api.js";


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

  created() {
    if (!this.coinData.name) this.$router.push({ name: "NotFound" });
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

  data() {
    return {
      activeWindow: "description",
      hourlyData: [],
      isChartDataLoaded: false,
    }
  },

  computed: {
    coinData() {
      return CoinList.getCoinData(this.coin.toUpperCase()) || {};
    },

    chartData() {
      if (this.hourlyData) {
        return this.hourlyData.map(priceData => {
          const timestamp = priceData.time * 1000; //converting unix timestamp to ms
          const time = new Date(timestamp); //open time for each period

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
  },  
}
</script>

<style scoped>
.coin-info__container {
  margin-top: 10px;
}

.coin-info__header {
 margin-bottom: 5px;
}

.coin-info__content {
  padding: 0 20px;
  text-align: justify;
}

.coin-info__button {
  margin: 0 5px;
  cursor: pointer;
  line-height: 45px;
  max-width: 160px; 
  text-transform: uppercase;
  font-weight: 800;
  letter-spacing: 1px;
  transition: all 200ms linear;
}

.coin-info__button:hover {
  color: #42b983; 
}

.coin-info__button_active {
  border-bottom: 1px solid;
}
</style>
