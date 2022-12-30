<template>
  <div class="todos">
    <div class="todo-item-wrap">
      <todo-item
        v-for="todo in todos"
        :key="todo.id"
        :nameProps="todo.name"
        :completedProps="todo.completed"
        :keyProps="todo.id"
      />
    </div>
    <todo-holder @display-todos="handleDisplay" />
  </div>
</template>

<script lang="ts">
import TodoItem from "./TodoItem.vue";
import TodoHolder from "./TodoHolder.vue";
import { useStore } from "vuex";

declare interface IShow {
  showing: number;
}

export default {
  app: "Todos",
  components: {
    TodoItem,
    TodoHolder,
  },

  data(): IShow {
    return {
      showing: 1,
    };
  },

  computed: {
    todos() {
      const store = useStore();
      switch (this.$data.showing) {
        case 1:
          return store.state.todos;
        case 2:
          return store.state.todos.filter(
            (todo: any) => todo.completed === false
          );
        case 3:
          return store.state.todos.filter(
            (todo: any) => todo.completed === true
          );
        default:
          return store.state.todos;
      }
    },
  },

  methods: {
    handleDisplay(numb: number) {
      this.$data.showing = numb;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins.scss";

.todos {
  width: 100%;
  border-radius: 4px;
  margin-top: 20px;
}

.todo-item-wrap {
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  overflow: hidden;
}
</style>
