import { faFilter, faSliders } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import styled, { css } from 'styled-components';
import writeAnimation from '../../animation/PostWrite.json';
import * as S from './PostFilter.styles';
import PriceSlider from './PriceSlider';

const HoverAnimation = React.memo(({ isHovered }) => {
  const lottieRef = useRef();

  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: writeAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  useEffect(() => {
    if (isHovered) {
      lottieRef.current.play();
    } else {
      lottieRef.current.stop();
    }
  }, [isHovered]);

  return <Lottie options={defaultOptions} height="100%" width="70%" isStopped={!isHovered} ref={lottieRef} />;
});

export default function PostFilterUI({ handleOnClick }) {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState('추천순'); // 기본으로 추천순이 선택되도록 설정
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState('품목 선택'); // 기본 선택된 품목
  const [isPriceSliderOpen, setIsPriceSliderOpen] = useState(false); // 가격 슬라이더 열림 상태 관리

  const dropdownRef = useRef(null);

  const handleFilterClick = (filter) => {
    setSelectedFilter(filter);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
  const togglePriceSlider = () => {
    setIsPriceSliderOpen(!isPriceSliderOpen);
  };
  const handleItemClick = (item) => {
    setSelectedItem(item);
    setDropdownOpen(false);
  };
  const itemOptions = ['가전/디지털', '뷰티', '생활용품', '스포츠/건강', '식품', '여행', '패션/잡화', '문구/오피스'];
  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setDropdownOpen(false);
    }
  };
  useEffect(() => {
    if (dropdownOpen) {
      document.addEventListener('mousedown', closeDropdown);
    } else {
      document.removeEventListener('mousedown', closeDropdown);
    }

    return () => {
      document.removeEventListener('mousedown', closeDropdown);
    };
  }, [dropdownOpen]);

  return (
    <Wrapper>
      <AlignBox>
        <ViewFilter>
          <S.FilterIcon icon={faFilter} />
          <AlignSequence isSelected={selectedFilter === '인기순'} onClick={() => handleFilterClick('인기순')}>
            인기순
          </AlignSequence>
          <AlignSequence isSelected={selectedFilter === '최신순'} onClick={() => handleFilterClick('최신순')}>
            최신순
          </AlignSequence>
          <AlignSequence isSelected={selectedFilter === '추천순'} onClick={() => handleFilterClick('추천순')}>
            추천순
          </AlignSequence>
        </ViewFilter>
        <PriceFilter>
          <S.SliderIcon icon={faSliders} />
          <PriceSpan onClick={togglePriceSlider}>가격대 정렬</PriceSpan>
          {isPriceSliderOpen && <PriceSlider />} {/* 슬라이더가 열릴 때만 보여줌 */}
        </PriceFilter>
        <ItemFilter>
          <Dropdown ref={dropdownRef} onClick={toggleDropdown}>
            <ItemSpan>{selectedItem}</ItemSpan>
            {dropdownOpen && (
              <DropdownMenu>
                {itemOptions.map((item) => (
                  <DropdownItem onClick={() => handleItemClick(item)}>{item}</DropdownItem>
                ))}
              </DropdownMenu>
            )}
          </Dropdown>
        </ItemFilter>
      </AlignBox>
      <AnimationBox
        onClick={handleOnClick(`/review/write`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverAnimation isHovered={isHovered} />
        <WritingReview>새 무드뷰 만들기</WritingReview>
      </AnimationBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AlignBox = styled.div`
  width: 50%;
  display: flex;
  justify-content: space-between;
`;
const ViewFilter = styled.div`
  margin-left: 50px;
  display: flex;
  align-items: center;
  gap: 50px;
`;
const PriceFilter = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PriceSpan = styled.span`
  font-size: 22px;
  user-select: none; /* 텍스트 선택 방지 */
  outline: none; /* 클릭 후 아웃라인 제거 */
`;
const ItemFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ItemSpan = styled.span`
  font-size: 22px;
  user-select: none; /* 텍스트 선택 방지 */
  outline: none; /* 클릭 후 아웃라인 제거 */
`;

const AlignSequence = styled.span`
  padding: 4px 0;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  user-select: none; /* 텍스트 선택 방지 */
  outline: none; /* 클릭 후 아웃라인 제거 */
  ${(props) =>
    props.isSelected &&
    css`
      border-top: 4px solid #0e5649;
      color: #0e5649;
    `}
`;
const WritingReview = styled.span`
  font-size: 18px;
`;
const AnimationBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 150px; /* 적절한 크기로 조정 */
`;

const Dropdown = styled.div`
  position: relative;
  cursor: pointer;
`;
const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  background-color: white;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1;
  width: 150px;
`;
const DropdownItem = styled.div`
  padding: 8px 12px;
  user-select: none; /* 텍스트 선택 방지 */
  outline: none; /* 클릭 후 아웃라인 제거 */
  cursor: pointer;
  &:hover {
    background-color: #f1f1f1;
  }
`;
