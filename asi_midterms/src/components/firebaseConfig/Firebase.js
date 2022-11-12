import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDqz1Z0ranAKpR5MWMHIIxPnzsXbb6P1dQ",
    authDomain: "asi-midterms-75e89.firebaseapp.com",
    databaseURL: "https://asi-midterms-75e89-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "asi-midterms-75e89",
    storageBucket: "asi-midterms-75e89.appspot.com",
    messagingSenderId: "717764249188",
    appId: "1:717764249188:web:fed545bfdd1cff54bd0171"
};
    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


export {auth};