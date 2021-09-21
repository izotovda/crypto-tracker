<template>
  <header class="header">
    <div v-if="isMenuActive" @click="toggleMenu" class="header__backdrop"></div>
    <div class="header__body">
      <div class="header__container">
        <autocomplete-search class="header__autocomplete" placeholder="Search coin"/>
        <nav class="header__menu menu">
          <menu-button 
            class="menu__button"
            :isMenuActive="isMenuActive"
            @toggle="toggleMenu"
          />
          <!-- transition is not finished yet -->
          <transition name="slide">
            <ul class="menu__list" :class="{'menu__list-hidden': !isMenuActive}">
              <li
                class="menu__item"
                v-for="(route, index) in routes"
                :key="index"
              >
                <router-link
                  class="menu__link"
                  :to="route"
                  @click.native="toggleMenu">
                  {{ route.name }}
                </router-link>              
              </li>
            </ul>
          </transition>
        </nav>
      </div>  
    </div>
  </header>
</template>

<script>
import AutocompleteSearch from "./AutocompleteSearch.vue";
import MenuButton from './MenuButton.vue';
import _ from 'lodash';
// implement custom debounce later
// import { debounce } from '../common-functions/debounce.js';

export default {
  components: {
    AutocompleteSearch,
    MenuButton,
  },

  props: { // delete later
    coinList: {
      type: Object
    }
  },

  data() {
    return {
      isMenuActive: false,
      routes: [{name: "Custom list"}, {name: "Top list"}, {name: "About"}],
      currentWindowWidth: document.documentElement.clientWidth
    }
  },

  watch: {
    // method resets menu when changed to dekstop version
    currentWindowWidth() {
      const minWidthTrreshhold = 500;
      if (this.currentWindowWidth > minWidthTrreshhold) this.isMenuActive = false;
    }
  },

  created() {
    // implement custom debounce later
    this.updateWidth = _.debounce(this.updateWidth, 150);

    // 'resize' evenListener aadded to reset menu when changed to dekstop version
    window.addEventListener("resize", this.updateWidth);
  },

  destroyed() {
    window.removeEventListener("resize", this.updateWidth);
  },

  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },

    updateWidth(event) {
      this.currentWindowWidth = event.target.innerWidth;
      console.log(`${event.target.innerWidth} - ${this.currentWindowWidth}`);
    }
  }
}
</script>

<style lang="scss" scoped>
// if "mediaMinWidth" is changed, change the value in created() for resize event handler (minWidthTrreshhold)!
$mediaMinWidth: 500px;
$background-color: #e4ebee;

.header {
  position: relative;
  z-index: 999;

  &__backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.35);
    cursor: pointer;

    @media(min-width: $mediaMinWidth + 1) {
      display: none;
    }
  }

  &__body {
    position: relative;
    height: 54px;
    background-color: $background-color;
  }

  &__container {
    position: relative;
    margin: 0 auto;
    max-width: 920px;
    height: 100%;
    display: grid;
    grid-template-columns: max-content max-content;
    column-gap: 32px;
    justify-content: center;

    @media(max-width: $mediaMinWidth) {
      justify-content: space-between;
    }
  }

  &__autocomplete {
    margin-left: 24px;
    width: 200px;
    align-self: center;

    @media(max-width: $mediaMinWidth) {
      margin-left: 24px;
      width: 180px;
    }
  }

  &__menu {
    align-self: center;
  }
}

.menu { 
  &__button {
    display: none;

    @media(max-width: $mediaMinWidth) {
      margin-right: 16px;
      display: block;
    }
  }

  &__list {
    list-style: none;
    display: grid;
    grid-auto-flow: column;
    column-gap: 15px;
    font-size: 16px;

    @media(max-width: $mediaMinWidth) {
      position: absolute;
      top: 100%;
      left: 0%;
      padding:16px 24px;
      width: 100%;
      grid-auto-flow: row;
      row-gap: 16px;
      background-color: $background-color;

      &-hidden {
        display: none;
      }

      // menu transitions
      .slide-enter-active,
      .slide-leave-active
      {
        transition: transform 0.2s ease;
      }

      .slide-enter,
      .slide-leave-to {
        transform: translateY(-100%);
        transition: all 150ms ease-in 0s
      }
    }
  }

  &__item {
    text-align: left;

    &:last-child {
      @media(min-width: $mediaMinWidth + 1) {
        margin-right: 24px;
      }
    }
  }

  &__link {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
