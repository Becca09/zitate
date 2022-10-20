// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products 
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBN5umVCvSG_sgC3uimUSw0UTDgEtlYCH0",
  authDomain: "quotes-7e6a2.firebaseapp.com",
  projectId: "quotes-7e6a2",
  storageBucket: "quotes-7e6a2.appspot.com",
  messagingSenderId: "591351005784",
  appId: "1:591351005784:web:e82fac7ac0f4d145bdc02d",
  measurementId: "G-4SBVKSZEM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); 

export {app}