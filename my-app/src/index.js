import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD5WfXtbNmL7WhY07KLc5ZaXKsx6c_wh24",
  authDomain: "marine-rescue-seaquel.firebaseapp.com",
  projectId: "marine-rescue-seaquel",
  storageBucket: "marine-rescue-seaquel.appspot.com",
  messagingSenderId: "52813694511",
  appId: "1:52813694511:web:782d074ac79b2e387ba8da",
  measurementId: "G-92M0XHFNDL"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
      <App/>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
