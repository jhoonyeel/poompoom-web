import React from 'react';
import * as S from './Header.styles';
import PostSearch from '../PostSearch/PostSearch';

function HeaderUI({ handleOnClick }) {
  return (
    <S.HeaderContainer>
      <S.LogoBox>
        <span>로고</span> {/** 추후에 컴포넌트 사용 */}
      </S.LogoBox>
      <div>
        <input type="text" />
      </div>
      <PostSearch />
      <S.ProfileBtn onClick={handleOnClick('/profile')}>
        <span>프로필 버튼</span> {/** 추후에 컴포넌트 사용 */}
      </S.ProfileBtn>
      <S.MenuBox>
        <span>메뉴바</span> {/** 추후에 컴포넌트 사용 */}
      </S.MenuBox>
    </S.HeaderContainer>
  );
}

export default HeaderUI;
