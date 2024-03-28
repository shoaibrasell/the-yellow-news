// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB3AxtzGLGLg6RUeitIeFHrsSMyecO9W3Y",
  authDomain: "the-yellow-news.firebaseapp.com",
  projectId: "the-yellow-news",
  storageBucket: "the-yellow-news.appspot.com",
  messagingSenderId: "503949923736",
  appId: "1:503949923736:web:991754e0a490aa4fc447ed"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;