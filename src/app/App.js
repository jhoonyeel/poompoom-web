import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from '../shared/styles/GlobalStyle';
import { basicTheme } from '../shared/theme/Theme';
import { AppRouter } from './router/AppRouter';

export default function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<AppRouter />} />
      </Routes>
    </ThemeProvider>
  );
}
