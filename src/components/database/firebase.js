import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyB5FlgThdyfoQb4huUqEm_a5vBTQ7F6jt8",
  authDomain: "portfolio-ec85f.firebaseapp.com",
  databaseURL: "https://portfolio-ec85f-default-rtdb.firebaseio.com",
  projectId: "portfolio-ec85f",
  storageBucket: "portfolio-ec85f.appspot.com",
  messagingSenderId: "400248019614",
  appId: "1:400248019614:web:e1d6e63bce0a6cc397398f"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);

export default db;