<template>
  <div class="not-found-page">
    <h1 class="not-found-page__caption">404 error</h1>
    <p class="not-found-page__paragraph">
      Page doesn't exist.
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/default.scss";

.not-found-page {
  @extend %default-container;

  &__caption {
    @extend %default-caption;
  }

  &__paragraph {
    @extend %default-paragraph;
  }
}
</style>