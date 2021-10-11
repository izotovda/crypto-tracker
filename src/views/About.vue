<template>
  <div class="about-page">
    <h1 class="about-page__caption">About</h1>
    <p class="about-page__paragraph">Source of data: <a href="https://www.cryptocompare.com/">cryptocompare.com</a>.</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/default.scss";

.about-page {
  @extend %default-container;

  &__caption {
    @extend %default-caption;
  }

  &__paragraph {
    @extend %default-paragraph;
  }
}
</style>