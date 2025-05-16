import { useState } from 'react';
import styled from 'styled-components';

const AgeRangeSelector = ({ setSelectedButton, setSelectedAgeLabel }) => {
  const spots = [
    { label: '10대 후반', position: 10, key: 'teen' },
    { label: '20대 초반', position: 30, key: 'early20s' },
    { label: '20대 중반', position: 50, key: 'mid20s' },
    { label: '20대 후반', position: 70, key: 'late20s' },
    { label: '30대 초반', position: 90, key: 'early30s' },
  ];

  const [value, setValue] = useState(spots[0].position);

  const handleChange = (e) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    const currentSpot = spots.find((spot) => spot.position === newValue);
    setSelectedButton(currentSpot.label);
    setSelectedAgeLabel(currentSpot.label); // 추가된 부분
  };

  return (
    <SlideBarContainer>
      <RangeInput type="range" min={10} max={90} step={20} value={value} onChange={handleChange} />
    </SlideBarContainer>
  );
};

export default AgeRangeSelector;

const SlideBarContainer = styled.div`
  position: relative;
  width: 534px;
  height: 10px;
  background: wheat;
  border-radius: 5px;
  margin: 50px auto;
`;

const RangeInput = styled.input`
  width: 100%;
  -webkit-appearance: none;
  appearance: none;
  height: 10px;
  background: transparent;
  position: absolute;
  top: -5px;
  left: 0;
  pointer-events: none;

  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 30px;
    height: 30px;
    background: #0e5649;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
  }

  &::-moz-range-thumb {
    width: 30px;
    height: 30px;
    background: #0e5649;
    border-radius: 50%;
    cursor: pointer;
    pointer-events: auto;
    transition:
      transform 0.2s ease,
      background-color 0.2s ease;
  }

  &:focus::-webkit-slider-thumb {
    background: #0e5649;
    transform: scale(1.1);
  }

  &:focus::-moz-range-thumb {
    background: #0e5649;
    transform: scale(1.1);
  }
`;
