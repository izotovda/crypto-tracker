<template>
  <div>
    <img :src="coinData.imageUrl" alt="Token icon">
    <h1>{{ coinData.fullName }}</h1>
    <p class="coin-description">{{ coinData.description }}</p>
  </div>
</template>

<script>

export default {
  props: {
    coin: {
      type: String,
      required: true
    },

    coinList: {
      default: null,
    },
  },

  computed: {
    coinData() {
      return this.coinList?.[this.coin] || {}
    }
  }
}
</script>

<style scoped>
.coin-description {
  padding: 0 20px;
  text-align: justify;
}
</style>  
