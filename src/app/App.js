import GlobalStyle from '@shared/styles/GlobalStyle.js';
import { basicTheme } from '@shared/theme/Theme.js';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AppRouter from './router/AppRouter.js';

const App = () => {
  return (
    <ThemeProvider theme={basicTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
