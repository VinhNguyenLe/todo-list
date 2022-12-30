<template>
  <form @submit.prevent="handleSubmit">
    <div class="todo-item">
      <div
        :class="completedProps ? 'check-btn checked' : 'check-btn'"
        @click="$store.dispatch('completeTodo', keyProps)"
      ></div>
      <div class="todo-context">
        <span
          @click="toggleRemove"
          :class="completedProps && 'complete-todo'"
          >{{ nameProps }}</span
        >
        <img
          src="../assets/images/icon-cross.svg"
          alt="remove"
          v-if="isShowRemoveBtn"
          @click="$store.dispatch('removeTodo', keyProps)"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
export default {
  app: "TodoItem",
  data() {
    return {
      input: "",
      isChecked: false,
      isShowRemoveBtn: false,
    };
  },
  props: ["nameProps", "completedProps", "keyProps"],
  methods: {
    handleSubmit() {},
    handleCheck() {
      this.isChecked = !this.isChecked;
    },
    toggleRemove() {
      this.isShowRemoveBtn = !this.isShowRemoveBtn;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
@import "../assets/scss/keyframes.scss";

.todo-item {
  @include flexBox();
  background-color: #fff;
  // border-radius: 4px;
  overflow: hidden;
  padding-block: 20px;
  border-bottom: 1px solid var(--LVeryLightGrayishBlue);
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
  @include circle($w: 22px, $bg: none, $b: 1px solid var(--LLightGrayishBlue));
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

.todo-context {
  @include flexBox($j: space-between);
  width: 100%;
  padding-right: 20px;

  & span {
    line-height: 1;
    padding-top: 3px;
    cursor: pointer;
    font-size: 16px;
    color: #484b6a;

    &:hover {
      color: #000;
    }
  }

  & img {
    width: 16px;
    aspect-ratio: 1 / 1;
    cursor: pointer;
    animation: opacity 0.3s ease;
  }
}
</style>
