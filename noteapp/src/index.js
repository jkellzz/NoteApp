import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const firebase = require('firebase')
require('firebase/firestore')

  const firebaseConfig = {
    apiKey: "AIzaSyBdP0mh5WYIHa8fXDFWqdYWaq5j2y4wD0A",
    authDomain: "noteapp-e0e5c.firebaseapp.com",
    databaseURL: "https://noteapp-e0e5c.firebaseio.com",
    projectId: "noteapp-e0e5c",
    storageBucket: "noteapp-e0e5c.appspot.com",
    messagingSenderId: "165172776892",
    appId: "1:165172776892:web:64db418efcb7addeb625b9",
    measurementId: "G-5WX5ET5DLD"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
