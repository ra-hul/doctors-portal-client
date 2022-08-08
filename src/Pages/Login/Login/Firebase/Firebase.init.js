import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.Config";

const initializeFirebase = () => {
  const app = initializeApp(firebaseConfig);
};
export default initializeFirebase;
