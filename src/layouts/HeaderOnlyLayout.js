import { Outlet } from 'react-router-dom';
import Header from '../widgets/header/ui/Header.container';
import * as S from './Layout.styles';

export function HeaderOnlyLayout() {
  return (
    <S.AppLayout>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <Outlet />
    </S.AppLayout>
  );
}
