<template>
  <header class="header">
    <div class="header__backdrop" v-if="isMenuActive" @click="closeMenu"></div>
    <div class="header__body">
      <div class="header__logo logo" @click="goToDefaultPage" @click.middle="openNewDeafaultTab">
        <img class="logo__image" src="../assets/header-logo.png" alt="logo">
        <p class="logo__title">CryptoTracker</p>
      </div>
      <autocomplete-search
        class="header__autocomplete"
        :suggestions="suggestions"
        @input-change="updateInputValue"
        @submit="openCoinPage"
        placeholder="Search coin"
      />
      <nav class="header__menu menu">
        <menu-button 
          class="menu__button"
          :isMenuActive="isMenuActive"
          @toggle="toggleMenu"
        />
        <ul class="menu__list" :class="{'menu__list_hidden': !isMenuActive}">
          <li
            class="menu__item"
            v-for="(route, index) in $options.routes"
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
  </header>
</template>

<script>
import AutocompleteSearch from "./AutocompleteSearch.vue";
import MenuButton from "./MenuButton.vue";
import { debounce } from "../common-methods/debounce.js";
import { CoinService } from "../store/services/CoinService.js";

export default {
  // custom options
  routes: [{name: "Custom list"}, {name: "Top list"}, {name: "About"}],

  components: {
    AutocompleteSearch,
    MenuButton,
  },

  data() {
    return {
      searchInputValue: "",
      suggestions: [],
      isMenuActive: false,
      currentWindowWidth: document.documentElement.clientWidth
    }
  },

  watch: {
    searchInputValue() {
      if (!this.searchInputValue.trim().length || /\\/.test(this.searchInputValue)) { 
        return;
      }
      this.suggestions = CoinService.findAllMatches(this.searchInputValue);
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

    closeMenu() {
      this.isMenuActive = false;
    },

    updateInputValue(inputValue) {
      this.searchInputValue = inputValue;
    },

    async openCoinPage(coinName) {
      const routerProperties = {name: "Coins", params: {coin: coinName}};
      this.$router.push(routerProperties, () => {});
      this.closeMenu();
    },

    updateWidth(event) {
      this.currentWindowWidth = event.target.innerWidth;
    },

    goToDefaultPage() {
      this.$router.push({name: "Default"}, ()=>{});
    },

    openNewDeafaultTab() {
      const routerProperties = {name: "Default"};
      const newRoute = this.$router.resolve(routerProperties);
      window.open(newRoute.href);
    }
  }
}
</script>

<style lang="scss" scoped>
// if "mediaMinWidth" is changed, change the value in created() for resize event handler (minWidthTrreshhold)!
$mediaMaxWidth: 653px;
$mediaMinWidth: 449px;
$background-color: #fdfdfd;
$height: 54px;

.header {
  position: relative;
  z-index: 900;
  height: $height;
  background-color: $background-color;
  border-bottom: solid 1px #e0e0e0;

  &__backdrop {
    position: fixed;
    width: 100vw;
    height: 100vh;
    top: $height;
    left: 0;
    background-color: rgba(0,0,0,0.35);
    cursor: pointer;

    @media(min-width: $mediaMaxWidth + 1) {
      display: none;
    }
  }

  &__body {
    margin: 0 auto;
    padding: 0 12px;
    max-width: 800px;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr max-content max-content;
    column-gap: 20px;
    justify-content: space-between;
  }

  // &__logo {

  // }

  &__autocomplete {
    position: relative;
    z-index: 1;
    width: 170px;
    align-self: center;
  }

  &__menu {
    align-self: center;
  }
}

.logo {
  width: fit-content;
  display: grid;
  grid-template-columns: min-content min-content;
  column-gap: 8px;
  cursor:pointer;

  @media(max-width: $mediaMinWidth) {
    column-gap: 0px;
  } 

  &__image {
    height: 42px;
    width: 42px;
    align-self: center;
  }

  &__title {
    align-self: center;
    font-weight: bold;
    font-size: 18px;

    @media(max-width: $mediaMinWidth) {
      display: none;
    }
  }
}

.menu { 
  &__button {
    display: none;

    @media(max-width: $mediaMaxWidth) {
      display: block;
    }
  }

  &__list {
    display: grid;
    grid-auto-flow: column;
    column-gap: 16px;
    list-style: none;
    font-size: 16px;

    @media(max-width: $mediaMaxWidth) {
      position: absolute;
      top: 100%;
      left: 0%;
      padding: 16px 24px;
      width: 100%;
      grid-auto-flow: row;
      row-gap: 16px;
      background-color: $background-color;

      &_hidden {
        display: none;
      }
    }
  }

  &__item {
    text-align: left;
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
