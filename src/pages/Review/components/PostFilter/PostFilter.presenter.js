import { faBarsStaggered, faFilter, faSliders } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
// import ReactSlider from 'react-slider';
import * as S from './PostFilter.styles';

// marks, priceRange, setPriceRange
export default function PostFilterUI({ handleOnClick }) {
  // const renderThumb = (props, state) => {
  //   const value = state.valueNow === 51 ? '50만원 이상' : `${state.valueNow}만원`;
  //   // eslint-disable-next-line react/jsx-props-no-spreading
  //   return <Thumb {...props}>{value}</Thumb>;
  // };

  return (
    <Wrapper>
      <Align>
        <div>
          <S.FilterIcon icon={faFilter} />
          <Span>정렬</Span>
        </div>
        <div>
          <S.SortIcon icon={faBarsStaggered} />
          <Span>인기순</Span>
          <Span>최신순</Span>
          <Span>추천순</Span>
        </div>
        <PriceFilter>
          <S.SliderIcon icon={faSliders} />
          <Span>가격대</Span>
          {/* <ReactSlider
          className="horizontal-slider"
          min={0}
          max={51}
          step={1}
          value={priceRange}
          onChange={setPriceRange}
          renderThumb={renderThumb}
          pearling
          minDistance={1}
        />
        <PriceMarks>
          {Object.entries(marks).map(([value, label]) => (
            <Mark key={value} style={{ left: `${(value / 51) * 100}%` }}>
              {label}
            </Mark>
          ))}
        </PriceMarks>
        <div>
          <span>{marks[priceRange[0]]}</span>
          <span> - </span>
          <span>{marks[priceRange[1]]}</span>
        </div> */}
        </PriceFilter>
      </Align>
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
  gap: 50px;
`;
// const ReactSlider = styled.div``;
const Align = styled.div`
  width: 40%;
  display: flex;
  gap: 10%;
`;
const PriceFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;

  .horizontal-slider {
    width: 300px;
    height: 10px;
  }
`;

// const Thumb = styled.div`
//   height: 30px;
//   width: 60px;
//   background-color: #007bff;
//   border-radius: 5px;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   color: white;
//   cursor: grab;
//   margin-top: -10px;
// `;

// const PriceMarks = styled.div`
//   position: relative;
//   width: 300px;
//   display: flex;
//   justify-content: space-between;
//   margin-top: 10px;
// `;

// const Mark = styled.div`
//   position: absolute;
//   transform: translateX(-50%);
//   white-space: nowrap;
//   font-size: 12px;
// `;

const Button = styled.button`
  font-size: 18px;
  padding: 5px;
`;
const Span = styled.span`
  font-size: 18px;
  margin-right: 5px;
`;
