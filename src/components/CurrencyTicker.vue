<template>
  <div class="ticker__container">
    <div class="ticker__number">
      {{ positionInList }}
    </div>
    <div
      class="ticker__coin-info"
      @click="handleCoinClick"
      @click.middle="handleCoinClick"
      @click.right="handleCoinClick"
    >
      <img class="ticker__image" :src="ticker.imageUrl" :alt="ticker.name + ' logo'">
      <p class="ticker__full-name">
        {{ ticker.coinName }}
      </p>
      <p class="ticker__short-name">
        {{ ticker.name }}
      </p>
    </div>
    <p class="ticker__price">
      <span class="ticker__price-wrapper">
        {{ formatedPrice }}
      </span>
    </p>
    <div class="ticker__button-container">
      <remove-button
        class="ticker__remove-button"
        v-if="isRemovable"     
        @click.native="handleRemoveButtonClick"
      />
    </div>
  </div>
</template>

<script>
import RemoveButton from "./RemoveButton.vue";

export default {
  components: {
    RemoveButton
  },

  props: {
    isRemovable: {
      type: Boolean,
      default: true
    },
    
    positionInList: {
      type: Number
    },

    ticker: {
      type: Object,
      default: null
    }
  },

  computed: {
    formatedPrice() {
      return this.ticker.price === "-"
        ? this.ticker.price
        : "$ " + this.ticker.price;
    }
  },

  methods: {
    handleRemoveButtonClick() {
      this.$emit('remove-request');
    },

    handleCoinClick(event) {
      this.$emit('info-request', event);
    }
  }
}
</script>

<style lang="scss" scoped>
$ticker-height: 4em;

.ticker__container {
  height: $ticker-height;
  display: grid;
  grid-template-columns: 2em min-content 8em min-content;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  font-size: 16px;

  .ticker__number {
    align-self: center;
    color: rgb(131, 131, 131);
  }

  .ticker__coin-info {
    display: grid;
    grid-template-columns: $ticker-height 7em;
    grid-template-rows: 2em, 2em;
    column-gap: 0.1em;
    border-left: solid rgb(179, 179, 179);
    align-self: center;
    cursor: pointer;

    .ticker__image {
      padding: 2px;
      grid-row: span 2;
      max-height: $ticker-height;
      max-width: $ticker-height;
    }

    .ticker__full-name {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      overflow: hidden;
      text-overflow: ellipsis;
      align-self: end;
      text-align: left;
      font-weight: bold;
    }

    .ticker__short-name {
      align-self: start;
      text-align: left;
      color: rgb(131, 131, 131);
    }
  }

  .ticker__price {
    align-self: center;

    .ticker__price-wrapper {
      display: inline-block;
      line-height: 1.4em;
      width: 90%;
      border: solid 1px rgb(231, 231, 231);
      border-radius: 5px;
      background-color: rgb(248, 248, 248);
      text-align: center;
    }
  }

  .ticker__button-container {
    padding: 1px;
    width: 2.5em;
    text-align: right;

    .ticker__remove-button {
      width: 32px;
      height: 32px;
    }
  }   
}
</style>