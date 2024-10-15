// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBuRN3pAiGi4fSOyXxn8_yL6IhrfwtP8G4",
    authDomain: "appmusica-d3397.firebaseapp.com",
    projectId: "appmusica-d3397",
    storageBucket: "appmusica-d3397.appspot.com",
    messagingSenderId: "764942609254",
    appId: "1:764942609254:web:8753cecf7eba89d26eb6a7"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Firestore e a autenticação
const db = getFirestore(app);
const auth = getAuth(app);

// Exporta o Firestore e a autenticação para uso em outros arquivos
export { db, auth };
