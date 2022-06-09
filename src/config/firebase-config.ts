// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDmbxuPsrh4zq6P5hCwrkP2-9I2FFm2JOM",
    authDomain: "courses-2de44.firebaseapp.com",
    projectId: "courses-2de44",
    storageBucket: "courses-2de44.appspot.com",
    messagingSenderId: "582096522078",
    appId: "1:582096522078:web:f4e6e56a58b0ea550eddcf",
    measurementId: "G-2Z7DGQR93G"
};

// Initialize Firebase
const appFire = initializeApp(firebaseConfig);

export default appFire;