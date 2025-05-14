import { faFilter } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef } from 'react';
import Lottie from 'react-lottie';
import writeAnimation from '../assets/PostWrite.json';
import ItemTypeDropdown from './ItemTypeDropdown';
import PriceSlider from './PriceSlider';
import * as S from './ReviewFilter.styles';

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

  return <Lottie options={defaultOptions} width="70px" height="100%" isStopped={!isHovered} ref={lottieRef} />;
});

export default function ReviewFilterUI({
  selectedSort,
  onSortClick,
  isPriceSliderOpen,
  togglePriceSlider,
  selectedItem,
  setSelectedItem,
  isHovered,
  setIsHovered,
  navigatePath,
}) {
  return (
    <S.Wrapper>
      <S.AlignBox>
        <S.SortBox>
          <S.SortIcon icon={faFilter} />
          <S.SortText isSelected={selectedSort === '인기순'} onClick={() => onSortClick('인기순')}>
            인기순
          </S.SortText>
          <S.SortText isSelected={selectedSort === '최신순'} onClick={() => onSortClick('최신순')}>
            최신순
          </S.SortText>
          <S.SortText isSelected={selectedSort === '추천순'} onClick={() => onSortClick('추천순')}>
            추천순
          </S.SortText>
        </S.SortBox>
        <S.PriceSliderContainer>
          <S.PriceText onClick={togglePriceSlider}>가격대 정렬</S.PriceText>
          {isPriceSliderOpen && <PriceSlider />}
        </S.PriceSliderContainer>
        <S.ItemTypeDropdownContainer>
          <ItemTypeDropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </S.ItemTypeDropdownContainer>
      </S.AlignBox>
      <S.WriteBox
        onClick={navigatePath(`/review/create`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverAnimation isHovered={isHovered} />
        <S.WritingReview>새 무드뷰 만들기</S.WritingReview>
      </S.WriteBox>
    </S.Wrapper>
  );
}
