import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './templates/App/App.jsx';
import { GlobalStyles } from './styles/GlobalStyles.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
);
