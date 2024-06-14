import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppConnector from './Routes';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppConnector/>
  </React.StrictMode>
);