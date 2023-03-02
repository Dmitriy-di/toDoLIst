import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
	apiKey: "AIzaSyCh6J5YoZeAkWzw0WN9pDf2WHF7JwjRqVc",
	authDomain: "my-project-7e8d3.firebaseapp.com",
	databaseURL: "https://my-project-7e8d3-default-rtdb.firebaseio.com",
	projectId: "my-project-7e8d3",
	storageBucket: "my-project-7e8d3.appspot.com",
	messagingSenderId: "501820670286",
	appId: "1:501820670286:web:03e97bf87a53ad17069e1f",
	measurementId: "G-2XSPESW5WK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
export {
	db
}
//123