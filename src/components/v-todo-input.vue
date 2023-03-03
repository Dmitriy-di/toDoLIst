<template>
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
        <button :disabled="!newtoDoContent" class="button is-info">Add</button>
      </p>
    </div>
  </form>
</template>

<script>
// import
import { ref } from "vue";
import { collection, addDoc, query, orderBy, limit } from "firebase/firestore";
import { db } from "@/firebase";

export default {
  name: "todoInput",
  setup() {
    const newtoDoContent = ref("");

    const addToDo = () => {
      addDoc(collection(db, "todos"), {
        content: newtoDoContent.value,
        done: false,
        data: Date.now(),
      });
      newtoDoContent.value = "";
    };

    return {
      newtoDoContent,
      addToDo,
    };
  },
};
</script>

<style></style>
