// import { createStore, Store } from "vuex";
import { uuid } from "vue-uuid";
// import type { InjectionKey } from "vue";
import type { InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, Store } from "vuex";

export interface State {
  theme: string;
  inputText: string;
  todos: ITodo[];
}

export interface ITodo {
  id: string;
  name: string;
  completed: boolean;
}

export default createStore<State>({
  state: {
    theme: "light",
    inputText: "",
    todos: [
      {
        id: uuid.v4(),
        name: "Complete online JavaScript course",
        completed: true,
      },
      {
        id: uuid.v4(),
        name: "Jog around the park 3x",
        completed: false,
      },
      {
        id: uuid.v4(),
        name: "10 minutes meditation",
        completed: false,
      },
      {
        id: uuid.v4(),
        name: "Read for 1 hour",
        completed: false,
      },
    ],
  },
  getters: {
    getLengthTodos(state) {
      return state.todos.length;
    },
    getLengthUnCompleted(state) {
      return state.todos.filter((todo) => todo.completed === false).length;
    },
  },
  mutations: {
    changeThemeMutation(state) {
      if (state.theme === "light") {
        state.theme = "dark";
      } else {
        state.theme = "light";
      }
    },
    completeTodoMutation(state, index) {
      state.todos.map((todo) => {
        if (todo.id === index) {
          todo.completed = !todo.completed;
        }
      });
    },
    removeTodoMutation(state, index) {
      state.todos = state.todos.filter((todo) => todo.id !== index);
    },
    submitTodoMutation(state, [todoName, completed]) {
      state.todos.push({
        id: uuid.v4(),
        name: todoName,
        completed: completed,
      });
    },
    clearCompletedMutations(state) {
      state.todos = state.todos.filter((todo) => todo.completed !== true);
    },
  },
  actions: {
    changeTheme({ commit }) {
      commit("changeThemeMutation");
    },
    completeTodo({ commit }, id) {
      commit("completeTodoMutation", id);
    },
    removeTodo({ commit }, id) {
      commit("removeTodoMutation", id);
    },
    submitTodo({ commit }, [todoName, completed]) {
      commit("submitTodoMutation", [todoName, completed]);
      this.state.inputText = "";
    },
    clearCompleted({ commit }) {
      commit("clearCompletedMutations");
    },
  },
  modules: {},
});
