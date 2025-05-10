import { useEffect, useState } from 'react';
import Slider from 'react-slider';
import styled from 'styled-components';

export default function PriceSlider() {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100000); // 기본 최대값 설정
  const [step, setStep] = useState(1000); // 기본 스텝 설정

  useEffect(() => {
    // 최소값과 최대값에 따라 step을 설정합니다.
    if (minValue >= 10000 || maxValue >= 100000) {
      setStep(10000); // 5자리에서 6자리인 경우 10,000원 단위로 끊기도록 설정
    } else {
      setStep(1000); // 4자리에서 5자리인 경우 1,000원 단위로 설정
    }
  }, [minValue, maxValue]);

  const handleSliderChange = (values) => {
    setMinValue(values[0]);
    setMaxValue(values[1]);
  };

  return (
    <Wrapper>
      <StyledSlider
        value={[minValue, maxValue]}
        min={0}
        max={100000}
        step={step}
        onChange={handleSliderChange}
        withTracks
        pearling
        minDistance={step}
      />
      <PriceRange>
        {minValue.toLocaleString()}원 ~ {maxValue.toLocaleString()}원
      </PriceRange>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: absolute;
  top: calc(100% + 10px);
  left: 50%;
  transform: translateX(-50%);
  width: 300px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledSlider = styled(Slider)`
  width: 100%;
  height: 25px;
  margin: 20px 0;

  .track {
    top: 10px;
    height: 5px;
    background: #e0e0e0;
    border-radius: 2px;
  }

  .track-1 {
    background: #0e5649;
  }

  .thumb {
    height: 20px;
    width: 20px;
    background-color: #fff;
    border: 2px solid #0e5649;
    border-radius: 50%;
    cursor: pointer;
    outline: none;
    margin-top: -7px;
  }

  .thumb:hover {
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
  }
`;

const PriceRange = styled.div`
  font-size: 16px;
  text-align: center;
  font-weight: bold;
  color: #0e5649;
`;
