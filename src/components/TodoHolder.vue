<template>
  <div class="todo-holder">
    <div class="item-left">
      {{ $store.getters.getLengthUnCompleted }} items left
    </div>
    <div class="view-mode">
      <p :class="isActive === 1 && `active`" @click="() => displayTodos(1)">
        All
      </p>
      <p :class="isActive === 2 && `active`" @click="() => displayTodos(2)">
        Active
      </p>
      <p :class="isActive === 3 && `active`" @click="() => displayTodos(3)">
        Completed
      </p>
    </div>
    <p class="clear" @click="$store.dispatch('clearCompleted')">
      Clear Completed
    </p>
  </div>
</template>

<script lang="ts">
import { ref } from "@vue/reactivity";

export default {
  app: "TodoHolder",

  setup(props, context) {
    const isActive = ref(1);

    const displayTodos = (numb: number) => {
      isActive.value = numb;
      context.emit("display-todos", numb);
    };

    return { displayTodos, isActive };
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins.scss";

.todo-holder {
  @include flexBox($j: space-between);
  padding: 16px 20px;
  position: relative;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;

  @include maxDevice(520px) {
    & .view-mode {
      position: absolute;
      width: 100%;
      left: 0;
      top: 70px;
      padding: 20px;
      border-radius: 4px;
      justify-content: center;
    }
  }
}

.item-left {
  font-size: 15px;
  line-height: 1;
  color: var(--LDarkGrayishBlue);
  cursor: default;
}

p {
  font-size: 15px;
  line-height: 1;
  color: var(--LDarkGrayishBlue);
  cursor: pointer;

  &:hover {
    color: var(--LVeryDarkGrayishBlue);
  }
}

.view-mode {
  @include flexBox($j: space-between, $g: 20px);

  & p.active {
    color: var(--BrightBlue);
  }
}
</style>
