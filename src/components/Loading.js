import Lottie from 'react-lottie';
import styled from 'styled-components';
import LoadingAnimation from '../assets/Lottie-Animation/presentLoading.json';

const defaultOptions = { loop: true, animationData: LoadingAnimation };

export default function Loading() {
  return (
    <Container>
      <LottieWrapper>
        <Lottie options={defaultOptions} />
      </LottieWrapper>
      <Text>로딩 중입니다...</Text>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LottieWrapper = styled.div`
  height: 700px;
  width: fit-content;
  margin: auto;

  position: relative;
`;
const Text = styled.div`
  font-size: 24px;
  transform: translateY(-70px);
`;
