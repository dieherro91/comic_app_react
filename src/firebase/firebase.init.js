// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import firebaseConfig from './firebase-config.js'
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export const initializeAuththentication=()=>{
    initializeApp(firebaseConfig);
    
}
const app= initializeApp(firebaseConfig);
export const db=getDatabase(app);
export const auth=getAuth();





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const database = getDatabase(initializeApp(firebaseConfig));

// Initialize Firebase
export default database ;