import { faBarsStaggered, faFilter, faSliders } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import writeAnimation from '../../../../animation/PostWrite.json';
import * as S from './PostFilter.styles';

const HoverAnimation = React.memo(({ isHovered, setIsHovered, handleOnClick }) => {
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

  return (
    <S.AnimationWrapper
      onClick={handleOnClick(`/review/write`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie options={defaultOptions} height="100%" width="100%" isStopped={!isHovered} ref={lottieRef} />
    </S.AnimationWrapper>
  );
});

export default function PostFilterUI({ handleOnClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <S.Wrapper>
      <S.AlignBox>
        <S.AlignFilter>
          <S.FilterIcon icon={faFilter} />
          <S.Span>정렬</S.Span>
        </S.AlignFilter>
        <S.ViewFilter>
          <S.SortIcon icon={faBarsStaggered} />
          <S.Span>인기순</S.Span>
          <S.Span>최신순</S.Span>
          <S.Span>추천순</S.Span>
        </S.ViewFilter>
        <S.PriceFilter>
          <S.SliderIcon icon={faSliders} />
          <S.Span>가격대</S.Span>
        </S.PriceFilter>
      </S.AlignBox>
      <S.WriteBox>
        <HoverAnimation isHovered={isHovered} setIsHovered={setIsHovered} handleOnClick={handleOnClick} />
        <S.WriteParagraph>새 무드뷰 만들기</S.WriteParagraph>
      </S.WriteBox>
    </S.Wrapper>
  );
}
