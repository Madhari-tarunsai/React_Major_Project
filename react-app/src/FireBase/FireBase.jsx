import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyCB5M0Lpg6joc11mu5XSPHm696APWP9dRo",
  authDomain: "react-app-f219f.firebaseapp.com",
  projectId: "react-app-f219f",
  storageBucket: "react-app-f219f.firebasestorage.app",
  messagingSenderId: "618568108584",
  appId: "1:618568108584:web:b31ecdd893c69fe943431d",
  measurementId: "G-YS1Q6Y6SYH"
};

const app = initializeApp(firebaseConfig);
export const Authentication=getAuth(app)