import styled from 'styled-components';

function SubHeaderUI() {
  return (
    <Container>
      <ContentBox>
        <span>구독한 게시글</span> {/** 추후에 컴포넌트 사용 */}
      </ContentBox>
    </Container>
  );
}

export default SubHeaderUI;

const Container = styled.div`
  width: 100%;
  height: 40px;
  margin: 0 auto;
  border: 3px solid #aaa;
  display: flex;
  justify-content: space-between;
  padding: 0 10%;
`;

const ContentBox = styled.div`
  width: 25%;
`;
