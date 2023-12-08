import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAGCV8gt79bc5aczEP2i8X8IFoXZlFovO4",
  authDomain: "atherstoneapp.firebaseapp.com",
  projectId: "atherstoneapp",
  storageBucket: "atherstoneapp.appspot.com",
  messagingSenderId: "327421777778",
  appId: "1:327421777778:web:9597e97f3e293b88d66feb",
  measurementId: "G-4P95K37FLX",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
