import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import HeaderUI from './Header.presenter';

export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const location = useLocation();
  const showSearchBar = location.pathname === '/review' || location.pathname === '/review/query-result';

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  return (
    <HeaderUI
      showSearchBar={showSearchBar}
      handleOnClick={handleOnClick}
      isHovered={isHovered}
      handleMouseEnter={handleMouseEnter}
      handleMouseLeave={handleMouseLeave}
    />
  );
}
