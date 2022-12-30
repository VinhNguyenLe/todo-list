<template>
  <header>
    <h1>TODO</h1>
    <img
      src="../assets/images/icon-moon.svg"
      alt="moon"
      @click="$store.dispatch('changeTheme')"
      v-if="$store.state.theme === 'light'"
    />
    <img
      src="../assets/images/icon-sun.svg"
      alt="sun"
      @click="$store.dispatch('changeTheme')"
      v-else
    />
  </header>
</template>

<script lang="ts">
export default {
  app: "TodoHeader",
};
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
@import "../assets/scss/keyframes.scss";
header {
  @include flexBox($j: space-between);
  cursor: default;
  color: #fff;
  letter-spacing: 10px;

  & > img {
    cursor: pointer;
    animation: opacity 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
