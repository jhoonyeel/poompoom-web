import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles';

export function NoLayout() {
  return (
    <S.AppLayout>
      <Outlet />
    </S.AppLayout>
  );
}
