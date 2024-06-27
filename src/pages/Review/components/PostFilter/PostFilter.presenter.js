import { faBarsStaggered, faFilter, faSliders } from '@fortawesome/free-solid-svg-icons';
import React, { useEffect, useRef, useState } from 'react';
import Lottie from 'react-lottie';
import styled from 'styled-components';
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
    <AnimationWrapper
      onClick={handleOnClick(`/review/write`)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Lottie options={defaultOptions} height="100%" width="100%" isStopped={!isHovered} ref={lottieRef} />
    </AnimationWrapper>
  );
});

export default function PostFilterUI({ handleOnClick }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Wrapper>
      <AlignBox>
        <AlignFilter>
          <S.FilterIcon icon={faFilter} />
          <Span>정렬</Span>
        </AlignFilter>
        <ViewFilter>
          <S.SortIcon icon={faBarsStaggered} />
          <Span>인기순</Span>
          <Span>최신순</Span>
          <Span>추천순</Span>
        </ViewFilter>
        <PriceFilter>
          <S.SliderIcon icon={faSliders} />
          <Span>가격대</Span>
        </PriceFilter>
      </AlignBox>
      <WriteBox>
        <HoverAnimation isHovered={isHovered} setIsHovered={setIsHovered} handleOnClick={handleOnClick} />
        <WriteParagraph>새 무드뷰 만들기</WriteParagraph>
      </WriteBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80%;
  height: 100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AlignBox = styled.div`
  width: 40%;
  display: flex;
  gap: 10%;
`;
const AlignFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const ViewFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const PriceFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Span = styled.span`
  font-size: 18px;
`;
const AnimationWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px; /* 적절한 크기로 조정 */
  height: 100px; /* 적절한 크기로 조정 */
`;
const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const WriteParagraph = styled.p`
  color: #072623;
  margin-top: 5px;
  font-weight: bold;
`;
