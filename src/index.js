import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import GlobalProvider from './shared/provider/GlobalProvider';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style/global.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <GlobalProvider>
    <App />
    <ToastContainer/>
  </GlobalProvider>
);

