import styled from 'styled-components';

function LatestHeaderUI() {
  return (
    <Container>
      <ContentBox>
        <span>최근 본 게시글</span> {/** 추후에 컴포넌트 사용 */}
      </ContentBox>
    </Container>
  );
}

export default LatestHeaderUI;

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
