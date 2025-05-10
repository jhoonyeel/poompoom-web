import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigatePath } from '../../../shared/hooks/useNavigatePath';
import ProfileHeader from './ProfileHeader/ProfileHeader.container';
import ProfileMenuBox from './ProfileMenuBox/ProfileMenuBox.container';
import Category from './Section/Category/Category';
import LatestProfileGallery from './Section/LatestProfileGallery/LatestProfileGallery.container';
import MineProfileGallery from './Section/MineProfileGallery/MineProfileGallery.container';

export default function Profile() {
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
