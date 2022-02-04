// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbpZu-sJfnRWYziCg43gpn3OqzGL23vBo",
  authDomain: "comics-app-techno.firebaseapp.com",
  projectId: "comics-app-techno",
  storageBucket: "comics-app-techno.appspot.com",
  messagingSenderId: "397406949352",
  appId: "1:397406949352:web:aaef17637162143ebd9e5d",
  measurementId: "G-HMWT7CCBG5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);