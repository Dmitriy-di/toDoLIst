<template>
  <div
    class="card mb-5"
    v-for="todo in todos"
    :key="todo.id"
    :class="{ 'has-background-success-light': todo.done }"
  >
    <div class="card-content">
      <div class="columns is-mobile is-vcentered">
        <div class="column">
          <div
            :class="{ 'has-text-success line-through': todo.done }"
            class="content"
          >
            {{ todo.content }}
          </div>
        </div>
        <div class="column is-5 has-text-right">
          <button
            @click="toggleDone(todo.id)"
            :class="todo.done ? 'has-background-success-dark' : 'is-light'"
            class="button is-light"
          >
            &#10004;
          </button>
          <button @click="deleteToDo(todo.id)" class="button is-danger">
            &#10799;
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import
import { useStore } from "vuex";
import { onMounted, computed } from "vue";
import { collection, doc, updateDoc, deleteDoc } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  name: "todoItem",
  setup() {
    const store = useStore();
    const todos = computed(() => store.getters.TODOS);

    //toggle Done
    const toggleDone = (id) => {
      const index = todos.value.findIndex((todo) => todo.id === id);

      updateDoc(doc(collection(db, "todos"), id), {
        done: !todos.value[index].done,
      });
    };

    //delete toDo
    const deleteToDo = (id) => {
      deleteDoc(doc(collection(db, "todos"), id));
    };

    onMounted(() => store.dispatch("GET_TODOS"));
    return {
      todos,
      toggleDone,
      deleteToDo,
    };
  },
};
</script>

<style>
@import "bulma/css/bulma.min.css";
.line-through {
  text-decoration: line-through;
}
.card {
  margin: 15px;
}
</style>
