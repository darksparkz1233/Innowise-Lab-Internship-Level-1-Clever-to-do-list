import { createApp } from 'vue'
import App from './App.vue'
// import Vue from "vue";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHrVos3hd-j8GjKoTY6_oh-fPKO0XNs6U",
    authDomain: "clever-todo-754fc.firebaseapp.com",
    projectId: "clever-todo-754fc",
    storageBucket: "clever-todo-754fc.appspot.com",
    messagingSenderId: "233676974664",
    appId: "1:233676974664:web:a7288f32ed7b75b2e3467d",
    measurementId: "G-JXWB1METB0"
  };
// Initialize Firebase
initializeApp(firebaseConfig);



createApp(App).mount('#app')
