import styled from 'styled-components';

function QuickGift() {
  return (
    <Container>
      <button type="button">빠른 선물하기</button> {/** 추후에 컴포넌트 사용 */}
    </Container>
  );
}

export default QuickGift;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 3px solid #aaa;
`;
