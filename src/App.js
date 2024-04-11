import { ThemeProvider } from 'styled-components';
import * as S from './App.styles';
import Header from './components/Header/Header.container';
import Footer from './components/Footer/Footer.container';
import { basicTheme } from './shared/Theme';

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <S.AppContainer>
        <Header />
        <div>asdf</div>
        <Footer />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
