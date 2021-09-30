<template>
  <header class="header">
    <div v-if="isMenuActive" @click="toggleMenu" class="header__backdrop"></div>
    <div class="header__body">
      <div class="header__container">
        <autocomplete-search
          class="header__autocomplete"
          :suggestions="suggestions"
          @input="updateInputValue"
          @submit="openCoinPage"
          placeholder="Search coin"
        />
        <nav class="header__menu menu">
          <menu-button 
            class="menu__button"
            :isMenuActive="isMenuActive"
            @toggle="toggleMenu"
          />
          <ul class="menu__list" :class="{'menu__list-hidden': !isMenuActive}">
            <li
              class="menu__item"
              v-for="(route, index) in routes"
              :key="index"
            >
              <router-link
                class="menu__link"
                :to="route"
                @click.native="isMenuActive = false">
                {{ route.name }}
              </router-link>              
            </li>
          </ul>
        </nav>
      </div>  
    </div>
  </header>
</template>

<script>
import AutocompleteSearch from "./AutocompleteSearch.vue";
import MenuButton from './MenuButton.vue';
import { debounce } from '../common-methods/debounce.js';
import { CoinList } from '../store/services/CoinList.js';

export default {
  components: {
    AutocompleteSearch,
    MenuButton,
  },

  data() {
    return {
      isMenuActive: false,
      searchInputValue: "",
      suggestions: [],
      currentWindowWidth: document.documentElement.clientWidth,
      routes: [{name: "Custom list"}, {name: "Top list"}, {name: "About"}]
    }
  },

  watch: {
    searchInputValue() {
      if (!this.searchInputValue.trim().length || /\\/.test(this.searchInputValue)) { 
        return;
      }
      this.suggestions = CoinList.findAllMatches(this.searchInputValue);
    },

    currentWindowWidth() {
      const minWidthTrreshhold = 500;
      if (this.currentWindowWidth > minWidthTrreshhold) this.isMenuActive = false;
    }
  },

  created() {
    this.updateWidth = debounce(this.updateWidth, 150);

    // 'resize' evenListener aadded to close menu when navigation changes to dekstop version
    window.addEventListener("resize", this.updateWidth);
  },

  destroyed() {
    window.removeEventListener("resize", this.updateWidth);
  },

  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },

    updateInputValue(inputValue) {
      this.searchInputValue = inputValue;
    },

    openCoinPage(coinName) {
      const routerProperties = {name: 'Coins', params: {coin: coinName}};
      this.$router.push(routerProperties);
    },

    updateWidth(event) {
      this.currentWindowWidth = event.target.innerWidth;
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
  z-index: 900;

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
    text-decoration: none;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
