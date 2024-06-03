import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import axios from 'axios';
import App from './App';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.defaults.withCredentials = true; // refreshToken cookie를 주고받기 위함

const basename = process.env.NODE_ENV === 'production' ? 'https://TwoSSome.github.io/poompoom-web' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter basename={basename}>
    <App />
  </HashRouter>,
);
