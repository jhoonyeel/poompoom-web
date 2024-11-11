import { faFilter } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import writeAnimation from '../../animation/PostWrite.json';
import ItemDropdown from './ItemDropdown';
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

  return <Lottie options={defaultOptions} width="70px" height="100%" isStopped={!isHovered} ref={lottieRef} />;
});

export default function PostFilterUI({ navigatePath }) {
  const [selectedSort, setSelectedSort] = useState('추천순'); // 기본으로 추천순이 선택되도록 설정
  const [isPriceSliderOpen, setIsPriceSliderOpen] = useState(false); // 가격 슬라이더 열림 상태 관리
  const [selectedItem, setSelectedItem] = useState('품목 선택'); // 기본 선택된 품목
  const [isHovered, setIsHovered] = useState(false);

  const handleSortClick = (filter) => {
    setSelectedSort(filter);
  };

  const togglePriceSlider = () => {
    setIsPriceSliderOpen(!isPriceSliderOpen);
  };

  return (
    <S.Wrapper>
      <S.AlignBox>
        <S.SortBox>
          <S.SortIcon icon={faFilter} />
          <S.SortText isSelected={selectedSort === '인기순'} onClick={() => handleSortClick('인기순')}>
            인기순
          </S.SortText>
          <S.SortText isSelected={selectedSort === '최신순'} onClick={() => handleSortClick('최신순')}>
            최신순
          </S.SortText>
          <S.SortText isSelected={selectedSort === '추천순'} onClick={() => handleSortClick('추천순')}>
            추천순
          </S.SortText>
        </S.SortBox>
        <S.PriceSliderContainer>
          <S.PriceText onClick={togglePriceSlider}>가격대 정렬</S.PriceText>
          {isPriceSliderOpen && <PriceSlider />}
        </S.PriceSliderContainer>
        <S.ItemDropdownContainer>
          <ItemDropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </S.ItemDropdownContainer>
      </S.AlignBox>
      <S.WriteBox
        onClick={navigatePath(`/review/write`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverAnimation isHovered={isHovered} />
        <S.WritingReview>새 무드뷰 만들기</S.WritingReview>
      </S.WriteBox>
    </S.Wrapper>
  );
}
