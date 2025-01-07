import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './GlobalStyle';
import { AppRoutes } from './routes/AppRoutes';
import { basicTheme } from './shared/Theme';

export default function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <GlobalStyle />
      <Routes>
        <Route path="/*" element={<AppRoutes />} />
      </Routes>
    </ThemeProvider>
  );
}
