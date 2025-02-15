import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIRESTORE_APIKEY,
  appId: import.meta.env.VITE_FIRESTORE_APPID,
  authDomain: "tienda-react-ecdd5.firebaseapp.com",
  projectId: "tienda-react-ecdd5",
  storageBucket: "tienda-react-ecdd5.firebasestorage.app",
  messagingSenderId: "123663021521",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
console.log(db)