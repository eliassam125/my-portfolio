import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './components/navbar';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from "react-router-dom";
import Gallery from './components/gallery';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);


reportWebVitals();
/* despues de configurar gallery poner esto dentro del react strictmode

*/ 