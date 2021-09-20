<template>
  <header class="header">
    <!-- find better solution for backdrop later -->
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
            <!-- set event listeners for everi Li -->
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
// import _ from 'lodash';

export default {
 ROUTES: ["/custom-list", "/top list", "/about"],
 
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
      routes: [{name: "Custom list"}, {name: "Top list"}, {name: "About"}]
      // currentWindowWidth: document.documentElement.clientWidth
    }
  },

  // computed: {
  //   isWidthLessThenTreshhold() {
  //     const mediaMinWidth = 430;
  //     if (this.currentWindowWidth <= mediaMinWidth) return true;
  //     else return false;
  //   }
  // },

  // watch: {
  //   isWidthLessThenTreshhold() {
  //     console.log(`${this.currentWindowWidth} <= 430 - ${this.isWidthLessThenTreshhold}`)
  //   }
  // },

  // created() {
  //   // re-do eventListener with usage of throttling later
  //   window.addEventListener("resize", this.updateWindowWidth);
  // },

  // destroyed() {
  //   window.removeEventListener("resize", this.updateWindowWidth);
  // },

  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },

    // updateWindowWidth(event) {
    //   _.debounce(() => {this.currentWindowWidth = event.target.innerWidth}, 2000);  
    // }
  }
}
</script>

<style lang="scss" scoped>
// if "mediaMinWidth" is changed, change the value in the method for resize event handler!
$mediaMinWidth: 430px;
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

    @media(min-width: $mediaMinWidth) {
      display: none;
    }
  }

  &__body {
    position: relative;
    height: 46px;
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
    // border: solid 1px black;

    @media(max-width: $mediaMinWidth) {
      justify-content: space-between;
    }
  }

  &__autocomplete {
    width: 200px;
    align-self: center;

    @media(max-width: $mediaMinWidth) {
      margin-left: 9px;
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
      margin-right: 9px;
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

  &__item {
    text-align: left;

    &:last-child {
      @media(min-width: $mediaMinWidth + 1) {
        margin-right: 16px;
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
