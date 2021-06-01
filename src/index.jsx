import React from 'react';
import ReactDOM from 'react-dom';
import VeterinariaApp from './VeterinariaApp';
import reportWebVitals from './reportWebVitals';
import './index.css';

const elDOM = document.getElementById('veterinaria-app');

const AppRoot = (
  <React.StrictMode>
    <VeterinariaApp />
  </React.StrictMode>
);

if (elDOM.hasChildNodes()) ReactDOM.hydrate(AppRoot, elDOM);
else ReactDOM.render(AppRoot, elDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
