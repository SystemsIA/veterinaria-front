import React from 'react';
import ReactDOM from 'react-dom';
import VeterinariaApp from 'VeterinariaApp';
import reportWebVitals from 'reportWebVitals';
import 'styles/index.css';

const rootDOM = document.getElementById('veterinaria-app');

const AppRoot = (
	<React.StrictMode>
		<VeterinariaApp />
	</React.StrictMode>
);

if (rootDOM.hasChildNodes()) ReactDOM.hydrate(AppRoot, rootDOM);
else ReactDOM.render(AppRoot, rootDOM);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
