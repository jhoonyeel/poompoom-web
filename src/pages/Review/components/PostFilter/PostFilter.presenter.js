import { faBarsStaggered, faFilter, faSliders } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
import * as S from './PostFilter.styles';

export default function PostFilterUI({ handleOnClick }) {
  return (
    <Wrapper>
      <AlignBox>
        <AlignFilter>
          <S.FilterIcon icon={faFilter} />
          <Span>정렬</Span>
        </AlignFilter>
        <ViewFilter>
          <S.SortIcon icon={faBarsStaggered} />
          <Span>인기순</Span>
          <Span>최신순</Span>
          <Span>추천순</Span>
        </ViewFilter>
        <PriceFilter>
          <S.SliderIcon icon={faSliders} />
          <Span>가격대</Span>
        </PriceFilter>
      </AlignBox>
      <Button type="button" onClick={handleOnClick('/review/write')}>
        리뷰글 작성
      </Button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AlignBox = styled.div`
  width: 40%;
  display: flex;
  gap: 10%;
`;
const AlignFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ViewFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PriceFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Span = styled.span`
  font-size: 18px;
`;
const Button = styled.button`
  font-size: 18px;
  font-weight: bold;
  padding: 0.5rem;
  border-radius: 20px;
`;
