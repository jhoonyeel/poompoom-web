import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import LoverProfileEx from '../../assets/HeaderLoverProfile.svg';
import SearchBar from '../SearchBar/SearchBar.container';
import * as S from './Header.styles';

export default function HeaderUI({ showSearchBar, navigatePath }) {
  return (
    <S.HeaderWrapper className="sticky">
      <S.HeaderContent>
        <S.LogoBox onClick={navigatePath('/')}>
          <S.LogoSvg />
        </S.LogoBox>
        {showSearchBar && <SearchBar />}
        <S.IconBox>
          <AuthorCircleBox onClick={navigatePath('/lovers-profile')}>
            <WhiteCircleIcon icon={faCircle} />
            <AuthorImgBox>
              <AuthorImg src={LoverProfileEx} alt="프로필 사진" />
            </AuthorImgBox>
          </AuthorCircleBox>
          <S.MenuBar>
            <S.MenuItem onClick={navigatePath('/review')}>MOOD VIEW</S.MenuItem>
            <S.MenuItem onClick={navigatePath('/lovers-profile')}>MY LOVER</S.MenuItem>
            <S.MenuItem onClick={navigatePath('/profile')}>OPTIOIN</S.MenuItem>
          </S.MenuBar>
        </S.IconBox>
      </S.HeaderContent>
    </S.HeaderWrapper>
  );
}

const AuthorCircleBox = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
const WhiteCircleIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 60px;
  position: absolute;
  z-index: 1;
`;
const AuthorImgBox = styled.div`
  width: 87%;
  height: 87%;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  z-index: 2;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;
