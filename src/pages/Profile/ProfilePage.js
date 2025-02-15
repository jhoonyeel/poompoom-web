import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigatePath } from '../../hooks/useNavigatePath';
import ProfileHeader from './components/ProfileHeader/ProfileHeader.container';
import ProfileMenuBox from './components/ProfileMenuBox/ProfileMenuBox.container';
import Category from './components/Section/Category/Category';
import LatestProfileGallery from './components/Section/LatestProfileGallery/LatestProfileGallery.container';
import MineProfileGallery from './components/Section/MineProfileGallery/MineProfileGallery.container';

export default function ProfilePage() {
  const location = useLocation();
  const navigatePath = useNavigatePath();
  const [currentPath, setCurrentPath] = useState('/profile');

  useEffect(() => {
    const path = location.pathname === '/profile' ? '/profile/bookmark' : location.pathname;
    setCurrentPath(path);
  }, [location.pathname]);

  useEffect(() => {
    if (location.pathname === '/profile') {
      navigatePath('/profile/bookmark');
    }
  }, [location.pathname, navigatePath]);
  let profileContent;
  switch (currentPath) {
    case '/profile/bookmark':
      profileContent = <Category />;
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
  width: 80%;
  min-width: 1028px;
  margin: 0 auto;
`;
