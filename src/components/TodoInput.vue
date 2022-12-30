<template>
  <form
    @submit.prevent="
      $store.dispatch('submitTodo', [$store.state.inputText, isChecked])
    "
  >
    <div class="input-wrap">
      <div
        :class="isChecked ? 'check-btn checked' : 'check-btn'"
        @click="handleCheck"
      ></div>
      <input
        type="text"
        placeholder="Create a new todo..."
        v-model="$store.state.inputText"
        class="todo-text"
      />
    </div>
  </form>
</template>

<script lang="ts">
export default {
  app: "TodoInput",

  data() {
    return {
      inputText: "",
      isChecked: false,
    };
  },

  methods: {
    handleCheck() {
      this.isChecked = !this.isChecked;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
@import "../assets/scss/keyframes.scss";

.input-wrap {
  @include flexBox();
  background-color: #fff;
  border-radius: 4px;
  overflow: hidden;
  margin-top: 36px;
}

.todo-text {
  height: 65px;
  width: 100%;
  font-size: 18px;
  line-height: 1;
  padding-block: 20px;
  padding-right: 20px;
}

.check-btn {
  z-index: 1;
  margin-inline: 20px;
  cursor: pointer;

  &:hover {
    border-color: #a26eed;
  }
  &.checked {
    background: var(--CheckBackground);
    background-size: 100%;
    position: relative;
    animation: opacity2 0.3s ease;
    @include flexBox($j: center);

    &::after {
      content: url("../assets/images/icon-check.svg");
    }
  }
}
</style>
