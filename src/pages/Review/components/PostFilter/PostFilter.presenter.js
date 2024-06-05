import { faBarsStaggered, faFilter, faSliders } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import styled from 'styled-components';
// import ReactSlider from 'react-slider';
import * as S from './PostFilter.styles';

export default function PostFilterUI({ marks, priceRange, setPriceRange, handleOnClick }) {
  const renderThumb = (props, state) => {
    const value = state.valueNow === 51 ? '50만원 이상' : `${state.valueNow}만원`;
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Thumb {...props}>{value}</Thumb>;
  };

  return (
    <Wrapper>
      <div>
        <S.FilterIcon icon={faFilter} />
        <span>정렬</span>
      </div>
      <div>
        <S.SortIcon icon={faBarsStaggered} />
        <span>인기순</span>
        <span>최신순</span>
        <span>추천순</span>
      </div>
      <PriceFilter>
        <S.SliderIcon icon={faSliders} />
        <span>가격대</span>
        <ReactSlider
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
        </div>
      </PriceFilter>
      <button type="button" onClick={handleOnClick('/review/write')}>
        리뷰글 작성
      </button>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
  gap: 50px;
`;
const ReactSlider = styled.div``;

const PriceFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-direction: column;
  position: relative;

  .horizontal-slider {
    width: 300px;
    height: 10px;
  }
`;

const Thumb = styled.div`
  height: 30px;
  width: 60px;
  background-color: #007bff;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: grab;
  margin-top: -10px;
`;

const PriceMarks = styled.div`
  position: relative;
  width: 300px;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
`;

const Mark = styled.div`
  position: absolute;
  transform: translateX(-50%);
  white-space: nowrap;
  font-size: 12px;
`;
