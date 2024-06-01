import { faFilter, faSliders, faAlignCenter } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import * as S from './PostFilter.styles';

export default function PostFilterUI({ handleOnClick }) {
  return (
    <Layout>
      <div>
        <S.FilterIcon icon={faFilter} />
        <span>정렬</span>
      </div>
      <div>
        <S.SortIcon icon={faAlignCenter} rotation={180} />
        <span>인기순</span>
        <span>최신순</span>
        <span>추천순</span>
      </div>
      <div>
        <S.SliderIcon icon={faSliders} />
        <span>가격대</span>
      </div>
      <button type="button" onClick={handleOnClick('/review/writetest')}>
        리뷰글 작성
      </button>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 50px;
  border: 3px solid #aaa;
`;
