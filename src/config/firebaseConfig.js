import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCWS7SeKSdVCE6iFd0Bqf1b9ZWaULc0p_E",
    authDomain: "marcelo-guillamon.firebaseapp.com",
    projectId: "marcelo-guillamon",
    storageBucket: "marcelo-guillamon.appspot.com",
    storageBucket: "marcelo-guillamon.firebasestorage.app",
    messagingSenderId: "871854250134",
    appId: "1:871854250134:web:f1aba74f5590c49c47cab7"
  };


// Inicializar Firebase
const app = initializeApp(firebaseConfig);

// Inicializar Firestore
const db = getFirestore(app);

// Inicializar Firebase Storage
const storage = getStorage(app);

export const auth = getAuth(app);

export { db, storage };