import { ThemeProvider } from 'styled-components';
import * as S from './App.styles';
import Header from './components/Header/Header.container';
import Footer from './components/Footer/Footer.container';
import { basicTheme } from './shared/Theme';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <S.AppContainer>
        <Header />
        <div>본문입니다.</div>
        <Footer />
        <ReviewPage />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
