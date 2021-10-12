<template>
  <div class="ticker">
    <div class="ticker__number-container">
      {{ positionInList }}
    </div>
    <div
      class="ticker__info-container"
      @click="handleCoinClick"
      @click.middle="handleCoinClick"
      @click.right="handleCoinClick"
    >
      <img class="ticker__logo" :src="ticker.imageUrl" :alt="ticker.name + ' logo'">
      <p class="ticker__full-name">
        {{ ticker.coinName }}
      </p>
      <p class="ticker__short-name">
        {{ ticker.name }}
      </p>
    </div>
    <p class="ticker__price-container">
      <span class="ticker__price-wrapper">
        {{ formatedPrice }}
      </span>
    </p>
    <div class="ticker__button-container">
      <remove-button
        class="ticker__button"     
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
      this.$emit("remove-request");
    },

    handleCoinClick(event) {
      this.$emit("info-request", event);
    }
  }
}
</script>

<style lang="scss" scoped>
$ticker-height: 4em;
$ticker-height-390: 3.5em;
$mediaMinWidth: 402px;

.ticker {
  height: $ticker-height;
  display: grid;
  grid-template-columns: 2em min-content 8em min-content;
  border-radius: 5px;
  box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
  background-color: #fff;
  text-align: center;
  font-size: 16px;

  @media(max-width:$mediaMinWidth) {
    grid-template-columns: 1.5em min-content 7em min-content;
    height: $ticker-height-390;
  }

  &__number-container {
    align-self: center;
    color: rgb(131, 131, 131);
  }

  &__info-container {
    display: grid;
    grid-template-columns: $ticker-height 7em;
    grid-template-rows: 2em, 2em;
    column-gap: 0.1em;
    border-left: solid rgb(179, 179, 179);
    align-self: center;
    cursor: pointer;

    @media(max-width:$mediaMinWidth) {
      grid-template-columns: $ticker-height-390 4.3em;
      grid-template-rows: $ticker-height-390;
    }
  }

  &__logo {
    padding: 2px;
    grid-row: span 2;
    height: $ticker-height;
    width: $ticker-height;

    @media(max-width:$mediaMinWidth) {
      height: $ticker-height-390;
      width: $ticker-height-390;
    }
  }

  &__full-name {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
    align-self: end;
    text-align: left;
    font-weight: bold;

    @media(max-width:$mediaMinWidth) {
      display: none;
    }
  }

  &__short-name {
    align-self: start;
    text-align: left;
    color: rgb(131, 131, 131);

    @media(max-width:$mediaMinWidth) {
      min-width: 4.5em;
      max-width: 6em;
      align-self: center;
      color: #2c3e50;
      font-weight: bold;
    }
  }

  &__price-container {
    align-self: center;
  }

  &__price-wrapper {
    display: inline-block;
    line-height: 1.4em;
    width: 90%;
    border: solid 1px rgb(231, 231, 231);
    border-radius: 5px;
    background-color: rgb(248, 248, 248);
  }

  &__button-container {
    padding: 1px;
    width: 2.5em;
    text-align: right;

    @media(max-width:$mediaMinWidth) {
      width: 2.1em;
      align-self: center;
    }
  }   

  &__button {
    width: 32px;
    height: 32px;
  }
}
</style>
