import styled from 'styled-components';

function ReviewPostFilterUI() {
  return (
    <Container>
      <ContentBox>
        <span>구독한 계정</span> {/** 추후에 컴포넌트 사용 */}
      </ContentBox>
      <AlignBox>
        <button type="button">깔대기 아이콘</button> {/** 추후에 컴포넌트 사용 */}
      </AlignBox>
    </Container>
  );
}

export default ReviewPostFilterUI;

const Container = styled.div`
  width: 100%;
  margin: 0 auto;
  border: 3px solid #aaa;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
`;

const ContentBox = styled.div`
  width: 25%;
`;

const AlignBox = styled.div`
  width: 25%;
`;
