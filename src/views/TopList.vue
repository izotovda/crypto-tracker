<template>
  <div class="top-list">
    <h1 class="top-list__caption">Top coins</h1>
    <p class="top-list__paragraph">Page is not developed yet.</p>
  </div>
</template>

<style lang="scss" scoped>
@import "../styles/default.scss";

.top-list {
  @extend %default-container;

  &__caption {
    @extend %default-caption;
  }

  &__paragraph {
    @extend %default-paragraph;
  }
}
</style>