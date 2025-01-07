import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer/Footer.container';
import Header from '../components/Header/Header.container';
import * as S from './Layout.styles';

export function MainLayout() {
  return (
    <S.AppLayout>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <Outlet />
      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </S.AppLayout>
  );
}
