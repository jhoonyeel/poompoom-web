import React from 'react';
import { useRecoilValue } from 'recoil';

import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';
import { useFetchProfilePicture } from '../../hooks/useFetchProfilePicture';
import { profilePictureState } from '../../recoil/atoms';

export default function HeaderUI({ showSearchBar, navigatePath }) {
  useFetchProfilePicture(); // 프로필 사진을 가져오는 커스텀 훅 호출
  const profilePhoto = useRecoilValue(profilePictureState); // Recoil 전역 상태에서 프로필 사진 경로를 읽어옴
  return (
    <S.Wrapper className="sticky">
      <S.LogoIcon onClick={navigatePath('/')} />
      {showSearchBar && <SearchBar />}
      <S.RightBox>
        <S.LoverImgBox onClick={navigatePath('/lovers-profile')}>
          <S.LoverImg src={profilePhoto} alt="프로필 이미지" />
        </S.LoverImgBox>
        <S.MenuBar>
          <S.MenuItem onClick={navigatePath('/review')}>MOOD VIEW</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/lover/connect/guide')}>MY LOVER</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/profile/wrote')}>PROFILE</S.MenuItem>
        </S.MenuBar>
      </S.RightBox>
    </S.Wrapper>
  );
}
