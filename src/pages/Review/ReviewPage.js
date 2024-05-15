import styled from 'styled-components';
import QuickGift from '../../components/QuickGift/QuickGift';
import ReviewPostHeader from './components/ReviewPostHeader/ReviewPostHeader';
import ReviewPostBox from './components/ReviewPostBox/ReviewPostBox';

function ReviewPage() {
  return (
    <Container>
      <ReviewPostHeader />
      <ReviewPostBox />
      <QuickGift />
      <ButtonBox>
        <button type="button">↑</button> {/** 추후에 컴포넌트 사용 */}
      </ButtonBox>
    </Container>
  );
}

export default ReviewPage;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 20px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 5%;
`;
