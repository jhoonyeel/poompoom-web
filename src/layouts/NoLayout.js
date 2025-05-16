import { Outlet } from 'react-router-dom';
import * as S from './Layout.styles.js';

const NoLayout = () => {
  return (
    <S.AppLayout>
      <Outlet />
    </S.AppLayout>
  );
};

export default NoLayout;
