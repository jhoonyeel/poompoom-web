import React from 'react';
import { faBars, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
          <S.ProfileImgBox onClick={handleOnClick('/profile')}>
            <FontAwesomeIcon icon={faUserPlus} />
            <S.ProfileImg src="" alt="프로필 사진" /> {/** 추후에 컴포넌트 사용 */}
          </S.ProfileImgBox>
          <S.MenuBox>
            <S.MenuIcon icon={faBars} onClick={handleOnClick('/review')} />
          </S.MenuBox>
        </S.IconBox>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}
