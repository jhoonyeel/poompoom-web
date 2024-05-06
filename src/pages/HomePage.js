import styled from 'styled-components';

function HomePage() {
  return (
    <Container>
      <ImgBox src="http://via.placeholder.com/1240x520" alt="캘린더 이미지" />
      <ImgBox src="http://via.placeholder.com/1240x520" alt="기능 소개 이미지" />
      <ImgBox src="http://via.placeholder.com/1240x520" alt="트렌드 대시보드 이미지" />
      <ButtonBox>
        <button type="button">↑</button> {/** 추후에 컴포넌트 사용 */}
      </ButtonBox>
    </Container>
  );
}

export default HomePage;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const ImgBox = styled.img`
  width: 100%;
  border: 3px solid #aaa;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 20px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 5%;
`;
