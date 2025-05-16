import profileDummyPhoto from '@shared/assets/ProfilePhoto.svg';
import { useEffect, useState } from 'react';
import { getUserProfile } from '../api/getUserProfile.js';
import { USER_PROFILE_INITIAL_STATE } from '../model/userProfileInitialState.js';
import * as S from './Header.styles.js';
import SearchBar from './search-bar/SearchBar.container.js';

const HeaderUI = ({ showSearchBar, navigatePath }) => {
  const [profile, setProfile] = useState(USER_PROFILE_INITIAL_STATE);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const profileData = await getUserProfile(); // 서비스 함수 호출
        setProfile(profileData);
      } catch (err) {
        console.error('프로필 가져오기 에러:', err.message);
      }
    };

    fetchProfile(); // 컴포넌트 마운트 시 프로필 데이터 가져오기
  }, []);

  console.log(profile.profileImagePath);

  return (
    <S.Wrapper>
      <S.LogoIcon onClick={navigatePath('/')} />
      {showSearchBar && <SearchBar />}
      <S.RightBox>
        <S.LoverImgBox onClick={navigatePath('/profile/latest')}>
          <S.LoverImg src={profile.profileImagePath || profileDummyPhoto} alt="프로필 이미지" />
        </S.LoverImgBox>
        <S.MenuBar>
          <S.MenuItem onClick={navigatePath('/review')}>MOOD VIEW</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/profile/latest')}>OPTIOIN</S.MenuItem>
        </S.MenuBar>
      </S.RightBox>
    </S.Wrapper>
  );
};

export default HeaderUI;
