// frontend/src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client'; // Import createRoot
import App from './App';
//import './index.css';

const root = createRoot(document.getElementById('root')); // Use createRoot to create a root
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
