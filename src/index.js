import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/reset.css';
import {Router} from "./routes.js";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
