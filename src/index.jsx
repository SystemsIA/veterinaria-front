import React from 'react';
import ReactDOM from 'react-dom';
import VeterinariaApp from 'VeterinariaApp';
import 'styles/index.css';

const rootDOM = document.getElementById('veterinaria-app');

const AppRoot = (
	<React.StrictMode>
		<VeterinariaApp />
	</React.StrictMode>
);

if (rootDOM.hasChildNodes()) ReactDOM.hydrate(AppRoot, rootDOM);
else ReactDOM.render(AppRoot, rootDOM);
