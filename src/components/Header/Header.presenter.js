import axios from 'axios';
import React, { useEffect, useState } from 'react';
import profileDummyPhoto from '../../assets/ProfilePhoto.svg';
import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';

export default function HeaderUI({ showSearchBar, navigatePath }) {
  const [profile, setProfile] = useState('');
  const fetchData = async () => {
    try {
      const response = await axios.get(`profile/my`);
      setProfile(response.data);
      console.log(profile);
    } catch (error) {
      console.log('프로필 에러', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(profile.profileImagePath);

  return (
    <S.Wrapper className="sticky">
      <S.LogoIcon onClick={navigatePath('/')} />
      {showSearchBar && <SearchBar />}
      <S.RightBox>
        <S.LoverImgBox onClick={navigatePath('/lovers-profile')}>
          <S.LoverImg
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWhkDAMzHzBXvWnJTeTRAx6OkLGDLJVn3lYQ&s' ||
              profileDummyPhoto
            }
            alt="프로필 이미지"
          />
          {/* <S.LoverImg src={profile.profileImagePath || profileDummyPhoto} alt="프로필 이미지" /> */}
        </S.LoverImgBox>
        <S.MenuBar>
          <S.MenuItem onClick={navigatePath('/review')}>MOOD VIEW</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/lover/connect/guide')}>MY LOVER</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/profile/latest')}>OPTIOIN</S.MenuItem>
        </S.MenuBar>
      </S.RightBox>
    </S.Wrapper>
  );
}
