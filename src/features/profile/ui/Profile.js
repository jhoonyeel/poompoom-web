import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { useNavigatePath } from '../../../shared/hooks/useNavigatePath';
import BookmarkPanel from './bookmark-panel/BookmarkPanel';
import MyReviewPanel from './my-review-panel/MyReviewPanel.container';
import ProfileHeader from './profile-header/ProfileHeader.container';
import ProfileTabMenu from './profile-tab-menu/ProfileTabMenu.container';
import RecentViewPanel from './recent-view-panel/RecentViewPanel.container';

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
      profileContent = <BookmarkPanel />;
      break;
    case '/profile/like':
      profileContent = <MyReviewPanel />;
      break;
    case '/profile/latest':
      profileContent = <RecentViewPanel />;
      break;
    case '/profile/wrote':
      profileContent = <MyReviewPanel />;
      break;
    default:
      break;
  }

  return (
    <Wrapper>
      <ProfileHeader />
      <ProfileTabMenu />
      {profileContent}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  min-width: 1028px;
  margin: 0 auto;
`;
