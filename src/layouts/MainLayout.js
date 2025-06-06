import Footer from '@widgets/footer/ui/Footer.container.js';
import Header from '@widgets/header/ui/Header.container.js';
import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles.js';

const MainLayout = () => {
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
};

export default MainLayout;
