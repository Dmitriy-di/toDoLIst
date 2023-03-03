import { createStore } from 'vuex'
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "@/firebase";
import { ref } from "vue";

export default createStore({
	state: {
		todos: ref([]),
	},
	mutation: {
		SET_TODOS(state, todos) {
			state.todos.value = todos
		}
	},
	actions: {
		GET_TODOS({ commit, state }) {
			const fetching = async () => {
				const todoCollectionRef = collection(db, "todos");
				const todoCollectionQuery = query(
					todoCollectionRef,
					orderBy("data", "desc"),
				);
				try {
					await onSnapshot(todoCollectionQuery, (querySnapshot) => {
						let fbTodos = [];
						querySnapshot.forEach((doc) => {
							const todo = {
								id: doc.id,
								content: doc.data().content,
								done: doc.data().done,
							};
							fbTodos.push(todo);
						});
						state.todos.value = fbTodos
						//commit('SET_TODOS', fbTodos)
					});
				}
				catch (e) {
					console.log("Ошибка: ", e)
				}
			}
			fetching()
		}
	},
	getters: {
		TODOS(state) {
			return state.todos.value
		}
	},
	modules: {}
})