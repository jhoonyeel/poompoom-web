import { useNavigate } from 'react-router-dom';
import HeaderUI from './Header.presenter';

function Header() {
  const navigate = useNavigate();

  const handleOnClick = (path) => () => {
    navigate(path);
  };

  return <HeaderUI handleOnClick={handleOnClick} />;
}

export default Header;
