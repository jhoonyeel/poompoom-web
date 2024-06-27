import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ProfileHeader from './components/ProfileHeader/ProfileHeader.container';
import ProfileMenuBox from './components/ProfileMenuBox/ProfileMenuBox.container';
import LatestProfileGallery from './components/section/LatestProfileGallery/LatestProfileGallery.container';
import MineProfileGallery from './components/section/MineProfileGallery/MineProfileGallery.container';

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
    <Wrapper>
      <ProfileHeader />
      <ProfileMenuBox />
      {profileContent}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
`;
