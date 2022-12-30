
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB5aK8bVO41lVBfj4RLjhrB1ZAihFgSKC0",
  authDomain: "netflix-frontend-4b6b7.firebaseapp.com",
  projectId: "netflix-frontend-4b6b7",
  storageBucket: "netflix-frontend-4b6b7.appspot.com",
  messagingSenderId: "755994399576",
  appId: "1:755994399576:web:7257c2fe3adec41860cb2d",
  measurementId: "G-MGY60GBTL0"
};


const app = initializeApp(firebaseConfig);

export const firebaseAuth= getAuth(app);