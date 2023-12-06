import React from 'react';
import ReactDOM from 'react-dom/client';
import { initializeApp } from "firebase/app";

import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

const firebaseConfig = {
  apiKey: "AIzaSyA5yO9eeBKyjTlbASSoBVdcbA-ltY-FY50",
  authDomain: "wior-5e549.firebaseapp.com",
  projectId: "wior-5e549",
  storageBucket: "wior-5e549.appspot.com",
  messagingSenderId: "922998151448",
  appId: "1:922998151448:web:c3688045b8b2bd1382a66d"
};

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);