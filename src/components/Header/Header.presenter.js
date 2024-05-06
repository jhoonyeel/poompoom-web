import React from 'react';
import styled from 'styled-components';
import * as S from './Header.styles';
import PostSearch from '../PostSearch/PostSearch';

function HeaderUI() {
  return (
    <S.HeaderContainer>
      <LogoBox>
        <span>로고</span> {/** 추후에 컴포넌트 사용 */}
      </LogoBox>
      <div>
        <input type="text" />
      </div>
      <PostSearch />
      <ProfileBox>
        <span>프로필 버튼</span> {/** 추후에 컴포넌트 사용 */}
      </ProfileBox>
      <MenuBox>
        <span>메뉴바</span> {/** 추후에 컴포넌트 사용 */}
      </MenuBox>
    </S.HeaderContainer>
  );
}

export default HeaderUI;

const LogoBox = styled.div`
  width: 15%;
`;

const ProfileBox = styled.div`
  width: 15%;
`;

const MenuBox = styled.div`
  width: 15%;
`;
