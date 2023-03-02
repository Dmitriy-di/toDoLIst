import { onMounted, ref } from 'vue'
// import { useStore } from 'vuex'
import { collection, onSnapshot } from "firebase/firestore";
import { db } from "@/firebase";

// export default {
// 	setup() {
// 		const store = useStore()
// 		const todosCollectionRef = collection(db, "todos");

// 		return {
// 			// access a state in computed function
// 			count: computed(() => store.state.count),

// 			// access a getter in computed function
// 			double: computed(() => store.getters.double),

// 			// access a mutation
// 			increment: () => store.commit('increment'),

// 			// access an action
// 			asyncIncrement: () => store.dispatch('asyncIncrement')
// 		}
// 	}
// }

export function useTodos() {
	const todos = ref([]);
	const fetching = async () => {
		try {
			await onSnapshot(collection(db, "todos"), (querySnapshot) => {
				let fbTodos = [];
				querySnapshot.forEach((doc) => {
					const todo = {
						id: doc.id,
						content: doc.data().content,
						done: doc.data().done,
					};
					fbTodos.push(todo);
				});
				todos.value = fbTodos;
			});
		}
		catch (e) {
			console.log("Ошибка: ", e)
		}
	}
	onMounted(fetching)
	return {
		todos
	}

}