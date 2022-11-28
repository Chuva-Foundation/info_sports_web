import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
//import { createRoot } from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
//const root = createRoot(document.querySelector('root'));

root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

