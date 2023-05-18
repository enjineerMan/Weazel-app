import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import store from './store';


//Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBQQtxhmDg23wBrsOCBoQmbOujEH5-KkaU",
  authDomain: "weazel-321a6.firebaseapp.com",
  databaseURL: "https://weazel-321a6.firebaseio.com",
  projectId: "weazel-321a6",
  storageBucket: "weazel-321a6.appspot.com",
  messagingSenderId: "421051763550",
  appId: "1:421051763550:web:3fe01b3299c73d86a2ddcf",
};

firebase.initializeApp(firebaseConfig);

window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
