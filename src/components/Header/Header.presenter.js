import React from 'react';
import * as S from './Header.styles';
import SearchBar from '../SearchBar/SearchBar.container';

export default function HeaderUI({ handleOnClick }) {
  return (
    <S.HeaderContainer>
      <S.LogoImgBox>
        로고 <S.LogoImg src="" alt="로고 사진" /> {/** 추후에 컴포넌트 사용 */}
      </S.LogoImgBox>
      <SearchBar />
      <S.ProfileImgBox onClick={handleOnClick('/profile')}>
        프로필 버튼 <S.ProfileImg src="" alt="프로필 사진" /> {/** 추후에 컴포넌트 사용 */}
      </S.ProfileImgBox>
      <S.MenuBox>
        <span>메뉴바</span> {/** 추후에 컴포넌트 사용 */}
      </S.MenuBox>
    </S.HeaderContainer>
  );
}
