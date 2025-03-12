// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDH3TsdJhdHxAbBFabyCNs6TvE08IP0rdA",
    authDomain: "myreactapp-83cb3.firebaseapp.com",
    databaseURL: "https://myreactapp-83cb3-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "myreactapp-83cb3",
    storageBucket: "myreactapp-83cb3.firebasestorage.app",
    messagingSenderId: "1037883484562",
    appId: "1:1037883484562:web:390273670f175952fcf94b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);