import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

function useFirebase() {
  const firebaseConfig = {
    apiKey: "AIzaSyA4U9qF4ylzwapZbRe491CeUCzJAahgWXs",
    authDomain: "irga-772d8.firebaseapp.com",
    databaseURL: "https://irga-772d8-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "irga-772d8",
    storageBucket: "irga-772d8.appspot.com",
    messagingSenderId: "233506493456",
    appId: "1:233506493456:web:ca42aa12e510809f28a695",
  };

  const app = initializeApp(firebaseConfig);
  return getDatabase(app);
}

export { useFirebase };
