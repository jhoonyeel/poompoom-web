import { Outlet } from 'react-router-dom';
import * as S from '../App.styles';
import Header from '../components/Header/Header.container';

export function HeaderOnlyLayout() {
  return (
    <>
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <Outlet />
    </>
  );
}
