import { useLocation, useNavigate } from 'react-router-dom';
import HeaderUI from './Header.presenter';

export default function Header() {
  const location = useLocation();
  const showSearchBar = location.pathname === '/review' || location.pathname === '/review/query-result';

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  return <HeaderUI showSearchBar={showSearchBar} handleOnClick={handleOnClick} />;
}
