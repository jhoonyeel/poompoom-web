import { Outlet } from 'react-router-dom';
import Footer from '../widgets/footer/ui/Footer.container';
import Header from '../widgets/header/ui/Header.container';
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
