import './styles/styles.css';
import * as S from './App.styles.js';
import Header from './components/Header/Header.container.js';
import Footer from './components/Footer/Footer.container.js';

const App = () => {
  return (
    <S.AppContainer>
      <Header />
      <div>asdf</div>
      <Footer />
    </S.AppContainer>
  );
};

export default App;
