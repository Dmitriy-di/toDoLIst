<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">ToDo List</div>
    <form @submit.prevent="addToDo">
      <div class="field is-grouped mb-50">
        <p class="control is-expanded">
          <input
            v-model="newtoDoContent"
            class="input"
            type="text"
            placeholder="Add a todo"
          />
        </p>
        <p class="control">
          <button :disabled="!newtoDoContent" class="button is-info">
            Add
          </button>
        </p>
      </div>
    </form>

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
  </div>
</template>

<script setup>
// import
import { ref, onMounted } from "vue";
import {
  collection,
  onSnapshot,
  addDoc,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useTodos } from "@/hooks/useTodos";
import { useStore } from "vuex";

const { todos } = useTodos();

//ref принимает значение и возвращает реактивный мутированный ref-объект с одним свойством - value
const newtoDoContent = ref("");

const addToDo = () => {
  addDoc(collection(db, "todos"), {
    content: newtoDoContent.value,
    country: false,
  });
  newtoDoContent.value = "";
};

//delete toDo
const deleteToDo = (id) => {
  deleteDoc(doc(collection(db, "todos"), id));
};

//toggle Done
const toggleDone = (id) => {
  const index = todos.value.findIndex((todo) => todo.id === id);

  updateDoc(doc(collection(db, "todos"), id), {
    done: !todos.value[index].done,
  });
};
</script>

<style>
@import "bulma/css/bulma.min.css";

.wrapper-todo {
  max-width: 400px;
  margin: 50px auto;
}
.line-through {
  text-decoration: line-through;
}
.card {
  margin: 15px;
}
</style>
