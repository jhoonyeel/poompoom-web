import Lottie from 'react-lottie';
import styled from 'styled-components';
import LoadingAnimation from '../assets/presentLoading.json';

const defaultOptions = { loop: true, animationData: LoadingAnimation };

const Loading = () => {
  return (
    <Container>
      <LottieWrapper>
        <Lottie options={defaultOptions} />
      </LottieWrapper>
      <Text>로딩 중입니다...</Text>
    </Container>
  );
};

export default Loading;

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
