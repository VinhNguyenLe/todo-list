<template>
  <main :class="$store.state.theme === 'dark' ? 'dark-theme' : 'light-theme'">
    <section class="bg">
      <div class="bg-top"></div>
      <div class="bg-bottom"></div>
    </section>
    <section class="todo-wrap">
      <todo-header />
      <todo-input />
      <todos />
    </section>
  </main>
</template>

<script lang="ts">
import TodoHeader from "./components/TodoHeader.vue";
import TodoInput from "./components/TodoInput.vue";
import Todos from "./components/Todos.vue";
export default {
  components: {
    TodoHeader,
    TodoInput,
    Todos,
  },
};
</script>

<style lang="scss" scoped>
@import "./assets/scss/mixins.scss";

main {
  position: relative;
}

.bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  display: flex;
  flex-flow: column;
  min-height: 100vh;
  height: 100%;

  & .bg-top {
    min-height: 280px;
    background-size: cover;
    background-repeat: no-repeat;
  }

  & .bg-bottom {
    flex-grow: 1;
  }
}

.todo-wrap {
  max-width: 542px;
  margin: 0px auto;
  width: 100%;
  padding-block: 75px;

  @include maxDevice(570px) {
    padding-inline: 24px;
  }
}
</style>
