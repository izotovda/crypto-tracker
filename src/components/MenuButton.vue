<template>
  <button @click="toggle" class="button">
    <svg class="button__icon">
      <use v-if="!isMenuActive" href="../assets/sprite.svg#menu"></use>
      <use v-if="isMenuActive" href="../assets/sprite.svg#cross"></use>
    </svg>
  </button>
</template>

<script>
export default{
  props: {
    isMenuActive: {
      type: Boolean,
      default: false,
      required: true
    }
  },

  methods: {
    toggle() {
      this.$emit('toggle');
    }
  }
}
</script>

<style lang="scss" scoped>
.button {
  display: block;
  height: 36px;
  width: 36px;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &__icon {
    height: 100%;
    width: 100%;
    stroke: #2c3e50;

    &:active {
      stroke: #42b983;
    }
  }
}
</style>