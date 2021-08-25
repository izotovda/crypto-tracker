<template>
  <div class="wrapper">
    <img :src="coinData.imageUrl" alt="Token icon">
    <h1>{{ coinData.fullName }}</h1>
    <button @click="switchToDescription">Description</button>
    <button @click="switchToHourlyChart">Hourly Data</button>
    <div
      class="coin-description"
      v-if="activeWindow === 'description'"
    >{{ coinData.description }}
    </div>
    <div v-if="activeWindow === 'hourlyChart'">
      <div>
        <p v-if="isDataNotFound">Data not found</p>
        <line-chart
          v-if="isLoaded && !isDataNotFound"
          label="24-hour chart"
          :chartData="chartData"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { getHourlyPairData } from "../api.js";
import LineChart from "../components/LineChart.vue";

export default {
  components: { LineChart },
  props: {
    coin: {
      type: String,
      required: true
    },

    coinList: {
      default: null,
    },
  },

  data() {
    return {
      activeWindow: "description",
      hourlyData: [],
      isLoaded: false,
    }
  },

  computed: {
    coinData() {
      return this.coinList?.[this.coin.toUpperCase()] || {}
    },

    chartData() {
      if (this.hourlyData) {
        return this.hourlyData.map(priceData => {
          const timestamp = priceData.time * 1000; //converting unix timestamp into ms
          const time = new Date(timestamp); //open time for each period

          let formatedTime = time.getHours() + ":00"; //to string "HH:MM"

          return {
            xData: formatedTime,
            yData: priceData.open
          };
        });
      } else {
        return [{xData: 0, yData: 0}];
      }
    },

    isDataNotFound() {
      return this.hourlyData ? false : true;
    }
  },

  methods: {
    switchToHourlyChart() {
      this.activeWindow = "hourlyChart";
      this.getHourlyData();     
    },

    switchToDescription() {
      this.activeWindow = "description";
    },

    async getHourlyData() {
      this.hourlyData = await getHourlyPairData(this.coinData.name);
      this.isLoaded = true;
    },
  },  
}
</script>

<style scoped>
.wrapper {
  margin: 0 auto;
  max-width: 1000px;
}

.coin-description {
  padding: 0 20px;
  text-align: justify;
}
</style>  
