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

    <div class="card mb-5" v-for="todo in todos" :key="todo.id">
      <div class="card-content">
        <div class="columns is-mobile is-vcentered">
          <div class="column">
            <div class="content">{{ todo.content }}</div>
          </div>
          <div class="column is-5 has-text-right">
            <div class="button is-light">&#10004;</div>
            <div class="button is-danger">&#10799;</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import
import { ref } from "vue";
import { v4 as uuidv4 } from "uuid";

const todos = ref([
  //   {
  //     id: "id1",
  //     content: "Hello my friend!",
  //     done: false,
  //   },
  //   {
  //     id: "id2",
  //     content: "What a wonderful world!",
  //     done: false,
  //   },
]);
//ref принимает значение и возвращает реактивный мутированный ref-объект с одним свойством - value
const newtoDoContent = ref("");

const addToDo = () => {
  const newToDo = {
    id: uuidv4(),
    content: newtoDoContent.value,
    done: false,
  };
  todos.value.unshift(newToDo);
  newtoDoContent.value = "";
};
</script>

<style>
@import "bulma/css/bulma.min.css";

.wrapper-todo {
  max-width: 400px;
  margin: 50px auto;
}
</style>
