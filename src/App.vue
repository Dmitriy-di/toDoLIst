<template>
  <div class="wrapper-todo">
    <div class="title has-text-centered">ToDo List</div>
    <todoInput />
    <todoItem />
  </div>
</template>

<script setup>
// import
import { db } from "@/firebase";
import { useStore } from "vuex";
import todoItem from "./components/v-todo-item.vue";
import todoInput from "./components/v-todo-input.vue";
</script>

<style>
@import "bulma/css/bulma.min.css";

.wrapper-todo {
  max-width: 400px;
  margin: 50px auto;
}
</style>
