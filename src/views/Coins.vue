<template>
  <div class="wrapper">
    <img :src="coinData.imageUrl" alt="Token icon">
    <h1>{{ coinData.fullName }}</h1>
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
          v-if="isLoaded && !isDataNotFound"
          label="Price, $"
          :chartData="chartData"
        />
      </div>
    </template>
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
