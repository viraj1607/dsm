import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCZqQLZUYSz04XePeONZfYq4aayqR-J518",
  authDomain: "dsmt-7ff4e.firebaseapp.com",
  projectId: "dsmt-7ff4e",
  storageBucket: "dsmt-7ff4e.appspot.com",
  messagingSenderId: "217128544811",
  appId: "1:217128544811:web:78d7fbba6bf7534f15586e"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };