import React from 'react';
import * as S from './Header.styles.js';

const HeaderUI = ({ name }) => {
  return (
    <S.HeaderContainer>
      <div>{name}header입니다.</div>
    </S.HeaderContainer>
  );
};

export default HeaderUI;
