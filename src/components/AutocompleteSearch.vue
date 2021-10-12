<template>
  <div class="autocomplete">
    <input
      class="autocomplete__input"
      v-model="inputValue"
      @input="handleInput"
      @focus="showSuggestions"
      @blur="hideSuggestions"
      @keydown.down="selectNextSuggestion"
      @keydown.up="selectPreviousSuggestion"
      @mouseover="selectedSuggestion = null"
      @click="selectedSuggestion = null"
      @keydown.enter="submitValue"
      @keydown.escape="blur"
      :placeholder="placeholder"
    /> 
    <div 
      class="autocomplete__suggestions-list"
      v-if="isSuggestionListShown"
      ref="suggestionsList"
    >
      <div
        class="autocomplete__suggestion"
        :class="{'autocomplete__suggestion_selected': suggestion === selectedSuggestion}"
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
          const selectedItem = suggestionsList.querySelector(".autocomplete__suggestion_selected");

          const itemCoords = selectedItem.getBoundingClientRect();
          const listCoords = suggestionsList.getBoundingClientRect();

          if (itemCoords.bottom > listCoords.bottom) selectedItem.scrollIntoView(false);
          else if (itemCoords.top < listCoords.top) selectedItem.scrollIntoView(true);
        }
      });
    },

    handleInput() {
      this.$emit("input-change", this.inputValue);
      this.resetSuggestionList();
    },

    submitValue() {
      if (!this.inputValue.length) return;

      const valueToPass = this.selectedSuggestion === null
        ? this.inputValue
        : this.selectedSuggestion;

      this.resetInputValue();
      this.resetSuggestionList();

      this.$emit("submit", valueToPass);
    },

    resetInputValue() {
      this.inputValue = "";
      this.$emit("input-change", this.inputValue);
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
$height: 32px;

.autocomplete {
  width: 240px;
  height: $height;
  background-color: white;

  &__input {
    position: relative;
    padding: 0 8px;
    width: 100%;
    height: $height;
    line-height: $height;
    border: none;
    outline: none;
    background-color: inherit;
    -webkit-appearance: none;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
    font-size: 16px;
  }

  &__suggestions-list {
    position: absolute; // added to have priority in stacking. add z-index if needed
    width: inherit; // "inherit" over "100%" since "%" doesnt work properly with "position: absolute"
    max-height: 200px;
    overflow: auto;
    border-radius: 0 0 5px 5px;
    box-shadow: 0px 1px 2px 1px rgba(0, 0, 0, 0.12);
    background-color: inherit;
  }

  &__suggestion {
    padding: 6px 8px;
    text-align: left;
    cursor: pointer;
    font-size: 14px;

    &_selected {
      background: rgb(232, 245, 232);
    }
  }
}
</style>  