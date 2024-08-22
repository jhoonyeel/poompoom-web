import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import App from './App';

const basename = process.env.NODE_ENV === 'production' ? '/poompoom-web' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={basename}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </BrowserRouter>,
);
