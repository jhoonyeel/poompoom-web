import { useState } from 'react';
import Slider from 'react-slider';
import styled from 'styled-components';

export default function SizeSlider() {
  const [value, setValue] = useState(0); // 슬라이더의 값을 0부터 시작하도록 설정

  const handleSliderChange = (setvalue) => {
    setValue(setvalue);
  };

  const sliderWidth = 800;
  const thumbWidth = 40;

  // 슬라이더의 현재 위치를 계산해서 값이 표시되는 위치를 동적으로 설정
  const leftPosition = (value / 13) * (sliderWidth - thumbWidth);

  return (
    <SliderWrapper>
      <StyledSlider value={value} min={0} max={13} onChange={handleSliderChange} withTracks pearling />
      <ValueWrapper>
        <ValueLabel style={{ left: `calc(${leftPosition}px)` }}>반지 사이즈: {value}</ValueLabel>
      </ValueWrapper>
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

const ValueWrapper = styled.div`
  position: absolute;
  width: 100%;
  top: 30px;
  display: flex;
  justify-content: center;
`;

const ValueLabel = styled.div`
  font-size: 20px;
  color: #06564e;
  font-weight: bold;
  background-color: #fff;
  border: 1px solid #06564e;
  padding: 2px 8px;
  border-radius: 5px;
  position: absolute;
  margin-top: 5px;
`;
