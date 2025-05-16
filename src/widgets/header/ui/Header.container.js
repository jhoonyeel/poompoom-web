import { useNavigatePath } from '@shared/hooks/useNavigatePath.js';
import { useLocation } from 'react-router-dom';
import HeaderUI from './Header.presenter.js';

const Header = () => {
  const location = useLocation();
  const showSearchBar = location.pathname === '/review' || location.pathname === '/review/search';

  const navigatePath = useNavigatePath();

  return <HeaderUI showSearchBar={showSearchBar} navigatePath={navigatePath} />;
};
export default Header;
