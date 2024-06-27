import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LatestProfileGallery from './components/Section/LatestProfileGallery/LatestProfileGallery.container';
import MineProfileGallery from './components/Section/MineProfileGallery/MineProfileGallery.container';

export default function ProfilePage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPath, setCurrentPath] = useState('/profile');

  useEffect(() => {
    const path = location.pathname === '/profile' ? '/profile/bookmark' : location.pathname;
    setCurrentPath(path);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/profile') {
      navigate('/profile/bookmark');
    }
  }, [location.pathname, navigate]);
  let profileContent;
  switch (currentPath) {
    case '/profile/bookmark':
      profileContent = <MineProfileGallery />;
      break;
    case '/profile/like':
      profileContent = <MineProfileGallery />;
      break;
    case '/profile/latest':
      profileContent = <LatestProfileGallery />;
      break;
    case '/profile/wrote':
      profileContent = <MineProfileGallery />;
      break;
    default:
      break;
  }

  return (
    <div>
      <ProfileBody />
    </div>
  );
}

export default ProfilePage;
