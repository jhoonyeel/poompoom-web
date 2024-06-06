import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';

export default function HeaderUI({ showSearchBar, handleOnClick, isHovered, handleMouseEnter, handleMouseLeave }) {
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
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {isHovered ? (
              <S.MenuSpreadBox>
                <S.MenuSpan onClick={handleOnClick('/')}>HOME</S.MenuSpan>
                <S.MenuSpan onClick={handleOnClick('/review')}>MOOD VIEW</S.MenuSpan>
                <S.MenuSpan onClick={handleOnClick('/lovers-profile')}>MY LOVER</S.MenuSpan>
                <S.MenuSpan onClick={handleOnClick('/profile')}>OPTIOIN</S.MenuSpan>
              </S.MenuSpreadBox>
            ) : (
              <S.MenuBox>
                <S.MenuIcon icon={faBars} />
              </S.MenuBox>
            )}
          </Box>
        </S.IconBox>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}

const Box = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
