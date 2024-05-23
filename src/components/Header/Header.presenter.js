import React from 'react';
import * as S from './Header.styles';
import PostSearch from '../PostSearch/PostSearch.container';

export default function HeaderUI() {
  return (
    <S.HeaderContainer>
      <S.LogoBox>
        <span>로고</span> {/** 추후에 컴포넌트 사용 */}
      </S.LogoBox>
      <PostSearch />
      <S.ProfileBox>
        <span>프로필 버튼</span> {/** 추후에 컴포넌트 사용 */}
      </S.ProfileBox>
      <S.MenuBox>
        <span>메뉴바</span> {/** 추후에 컴포넌트 사용 */}
      </S.MenuBox>
    </S.HeaderContainer>
  );
}
