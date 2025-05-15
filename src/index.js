import App from '@app/App';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// const basename = process.env.NODE_ENV === 'production' ? '/poompoom-web' : '';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
);
