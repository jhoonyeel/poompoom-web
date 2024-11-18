import React from 'react';
import LoverProfileEx from '../../assets/HeaderLoverProfile.svg';
import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';

export default function HeaderUI({ showSearchBar, navigatePath }) {
  return (
    <S.Wrapper className="sticky">
      <S.LogoIcon onClick={navigatePath('/')} />
      {showSearchBar && <SearchBar />}
      <S.RightBox>
        <S.LoverImgBox onClick={navigatePath('/lovers-profile')}>
          <S.LoverImg src={LoverProfileEx} alt="프로필 이미지" />
        </S.LoverImgBox>
        <S.MenuBar>
          <S.MenuItem onClick={navigatePath('/review')}>MOOD VIEW</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/lover/connect/guide')}>MY LOVER</S.MenuItem>
          <S.MenuItem onClick={navigatePath('/profile')}>OPTIOIN</S.MenuItem>
        </S.MenuBar>
      </S.RightBox>
    </S.Wrapper>
  );
}
