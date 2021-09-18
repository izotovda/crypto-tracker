<template>
  <div class="autocomplete-search__container">
    <input
      class="autocomplete-search__input"
      v-model="inputValue"
      @focus="showSuggestions"
      @blur="hideSuggestions"
      @keydown.down="selectNextSuggestion"
      @keydown.up="selectPreviousSuggestion"
      @mouseover="selectedSuggestion = null"
      @click="selectedSuggestion = null"
      @keydown.enter="submitValue"
      @keydown.escape="blur"
      @input="handleInput"
      :autofocus="autofocus === true"
      :placeholder="placeholder"
    /> 
    <div 
      class="autocomplete-search__suggestions-list"
      v-if="isSuggestionListShown"
      ref="suggestionsList"
    >
      <div
        class="autocomplete-search__suggestion"
        :class="{'autocomplete-search__suggestion_selected': suggestion === selectedSuggestion}"
        v-for="(suggestion, index) in suggestionsList"
        :key="index"
        @mouseover="selectedSuggestion = suggestion"
        @click="submitValue"
        @mousedown.prevent
      >
        {{ suggestion }}  
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    suggestions: {
      type: Array
    },

    autofocus: {
      type: Boolean,
      default: false
    },

    placeholder: {
      type: String
    }
  },

  data() {
    return {
      inputValue: "",
      suggestionsList: [],
      isSuggestionListShown: false,
      selectedSuggestion: null
    }
  },

  watch: {
    suggestions() {
      this.suggestionsList = [...this.suggestions];
    }
  },

  methods: {
    showSuggestions() {
      this.isSuggestionListShown = true;
    },

    hideSuggestions() {
      this.isSuggestionListShown = false;
      this.selectedSuggestion = null;
    },

    selectNextSuggestion() {
      const listLength = this.suggestionsList.length;
      const currentIndex = this.suggestionsList.indexOf(this.selectedSuggestion);

      if (listLength) {
        this.selectedSuggestion = this.selectedSuggestion === null
          ? this.suggestionsList[0]
          : currentIndex >= listLength - 1
            ? null
            : this.suggestionsList[currentIndex + 1];

        this.scrollSuggestionsList();
      }
    },

    selectPreviousSuggestion() {
      const listLength = this.suggestionsList.length;
      const currentIndex = this.suggestionsList.indexOf(this.selectedSuggestion);

      if (listLength) {
        this.selectedSuggestion = this.selectedSuggestion === null
          ? this.suggestionsList[listLength - 1]
          : currentIndex === 0
            ? null
            : this.suggestionsList[currentIndex - 1];

        this.scrollSuggestionsList();
      }
    },

    scrollSuggestionsList() {
      this.$nextTick(() => {
        if (this.selectedSuggestion !== null) {
          const suggestionsList = this.$refs.suggestionsList;
          const selectedItem = suggestionsList.querySelector('.autocomplete-search__suggestion_selected');

          const itemCoords = selectedItem.getBoundingClientRect();
          const listCoords = suggestionsList.getBoundingClientRect();

          if (itemCoords.bottom > listCoords.bottom) selectedItem.scrollIntoView(false);
          else if (itemCoords.top < listCoords.top) selectedItem.scrollIntoView(true);
        }
      });
    },

    handleInput() {
      this.$emit("input", this.inputValue);
      this.resetSuggestionList();
    },

    submitValue() {
      if (!this.inputValue.length) return;

      const valueToPass = this.selectedSuggestion === null
        ? this.inputValue
        : this.selectedSuggestion;

      this.$emit('submit', valueToPass);

      this.resetInputValue();
      this.resetSuggestionList();
    },

    resetInputValue() {
      this.inputValue = "";
    },

    resetSuggestionList() {
      this.suggestionsList = [];
    },

    blur(event) {
      event.target.blur();
    }
  }
}
</script>

<style lang="scss" scoped>
.autocomplete-search__container {
  width: 240px;
  background-color: white;
  font-size: 16px;

  .autocomplete-search__input {
    position: relative;
    padding: 4px 8px;
    width: inherit;
    line-height: 1.6em;
    border: none;
    outline: none;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
    font-size: inherit;
    background-color: inherit;
  }

  .autocomplete-search__suggestions-list {
    position: absolute;
    z-index: 1;
    width: inherit;
    max-height: 200px;
    overflow: auto;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
    background-color: inherit;

    .autocomplete-search__suggestion {
      padding: 6px 8px;
      text-align: left;
      cursor: pointer;
      font-size: 14px;

      &_selected {
        background: rgb(232, 245, 232);
      }
    }
  }
}
</style>  