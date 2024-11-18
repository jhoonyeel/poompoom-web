import { useState } from 'react';
import Slider from 'react-slider';
import styled from 'styled-components';
// import { ReactComponent as Under } from '../../assets/Lover/Pants.svg';

export default function Clothes() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(130);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  const sliderWidth = 800; // 슬라이더의 총 길이
  const thumbWidth = 40; // 썸네일의 너비 (40px로 설정)

  // 슬라이더의 현재 위치를 계산해서 값이 표시되는 위치를 동적으로 설정
  const minLeftPosition = ((minValue - 0) / 130) * (sliderWidth - thumbWidth);
  const maxLeftPosition = ((maxValue - 0) / 130) * (sliderWidth - thumbWidth);

  return (
    <SliderWrapper>
      <StyledSlider
        value={[minValue, maxValue]}
        min={0}
        max={130}
        onChange={handleSliderChange}
        withTracks
        pearling
        minDistance={1}
      />
      <ValuesWrapper>
        <ValueLabel style={{ left: `calc(${minLeftPosition}px)` }}>팬티 사이즈:{minValue}</ValueLabel>
        <ValueLabel style={{ left: `calc(${maxLeftPosition}px)` }}>브라 사이즈:{maxValue}</ValueLabel>
      </ValuesWrapper>
    </SliderWrapper>
  );
}

const SliderWrapper = styled.div`
  width: 800px;
  margin: 50px auto;
  position: relative;
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 25px;

  .track {
    top: 3px;
    height: 17px;
    background: #e0e0e0;
    border-radius: 10px;
  }

  .track-1 {
    background: #0e5649;
  }

  .thumb {
    height: 40px;
    width: 40px;
    background-color: #fff;
    border: 2px solid #0e5649;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    margin-top: -7px;
    position: relative;
  }

  .thumb:hover {
    box-shadow: 0px 0px 3px #0e5649;
  }
`;

const ValuesWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  display: flex;
  justify-content: space-between;
`;

const ValueLabel = styled.div`
  font-size: 20px;
  color: #06564e;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #06564e;
  padding: 2px 8px;
  border-radius: 5px;
  margin: 10px 0;
  position: absolute;
`;
