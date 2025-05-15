import Header from '@widgets/header/ui/Header.container';
import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';

const HeaderOnlyLayout = () => {
  return (
    <S.AppLayout>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <Outlet />
    </S.AppLayout>
  );
};

export default HeaderOnlyLayout;
