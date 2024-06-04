import React from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import * as S from './Header.styles';
import SearchBar from '../SearchBar/SearchBar.container';

export default function HeaderUI({ showSearchBar, handleOnClick }) {
  return (
    <S.HeaderWrapper>
      <S.HeaderContent>
        <S.LogoImgBox onClick={handleOnClick('/')}>
          <S.LogoImg src="" alt="로고 사진" /> {/** 추후에 컴포넌트 사용 */}
        </S.LogoImgBox>
        {showSearchBar && <SearchBar />}
        <S.IconBox>
          <S.ProfileBox onClick={handleOnClick('/profile')}>
            <S.ProfileIcon icon={faUser} />
            <S.ProfileButton type="button">연인 프로필 생성 +</S.ProfileButton>
          </S.ProfileBox>
          <S.MenuBox>
            <S.MenuIcon icon={faBars} onClick={handleOnClick('/review')} />
          </S.MenuBox>
        </S.IconBox>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}
