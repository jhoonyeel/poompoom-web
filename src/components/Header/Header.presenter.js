import React from 'react';
import LoverProfileEx from '../../assets/HeaderLoverProfile.svg';
import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';

export default function HeaderUI({ showSearchBar, navigatePath }) {
  return (
    <S.HeaderWrapper className="sticky">
      <S.HeaderContent>
        <ReissueButton />
        <S.LogoBox onClick={handleOnClick('/')}>
          <S.LogoSvg />
        </S.LogoBox>
        {showSearchBar && <SearchBar />}
        <S.IconBox>
          <AuthorCircleBox onClick={handleOnClick('/lovers-profile')}>
            <WhiteCircleIcon icon={faCircle} />
            <AuthorImgBox>
              <AuthorImg src={LoverProfileEx} alt="프로필 사진" />
            </AuthorImgBox>
          </AuthorCircleBox>
          <S.MenuBar>
            <S.MenuItem onClick={handleOnClick('/review')}>MOOD VIEW</S.MenuItem>
            <S.MenuItem onClick={handleOnClick('/lovers-profile')}>MY LOVER</S.MenuItem>
            <S.MenuItem onClick={handleOnClick('/profile')}>OPTIOIN</S.MenuItem>
          </S.MenuBar>
        </S.IconBox>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}
