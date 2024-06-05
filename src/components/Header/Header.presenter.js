import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';

export default function HeaderUI({ showSearchBar, handleOnClick }) {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.LogoBox onClick={handleOnClick('/')}>
          <S.LogoSvg />
        </S.LogoBox>
        {showSearchBar && <SearchBar />}
        <S.IconBox>
          <S.ProfileBox onClick={handleOnClick('/profile')}>
            <S.ProfileIcon icon={faUser} />
            <S.ProfileParagraph>연인 프로필 생성 +</S.ProfileParagraph>
          </S.ProfileBox>
          <S.MenuBox onClick={handleOnClick('/review')}>
            <S.MenuIcon icon={faBars} />
          </S.MenuBox>
        </S.IconBox>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}
