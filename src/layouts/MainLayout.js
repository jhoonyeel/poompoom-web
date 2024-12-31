import { Outlet } from 'react-router-dom';
import * as S from '../App.styles';
import Footer from '../components/Footer/Footer.container';
import Header from '../components/Header/Header.container';

export function MainLayout() {
  return (
    <>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <Outlet />
      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </>
  );
}
