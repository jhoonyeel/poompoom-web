import * as S from './App.styles';
import HeaderUI from './components/Header/Header.presenter';
import FooterUI from './components/Footer/Footer.presenter';

function App() {
  return (
    <S.AppContainer>
      <HeaderUI />
      <div>asdf</div>
      <FooterUI />
    </S.AppContainer>
  );
}

export default App;
