import styled from 'styled-components';
import { ReactComponent as AddImage } from '../../../assets/addImage.svg';
import { ReactComponent as Url } from '../../../assets/url.svg';
import { Container, SidebarTitle } from '../Style';

export default function AddDatePlan({ setAddDatePlan, closeModal }) {
  const OnClickToHome = () => {
    setAddDatePlan(false);
    closeModal();
  };
  return (
    <Section>
      <Container>
        <SidebarTitle>사진 추가</SidebarTitle>
        <ImageContainer>
          <AddImage />
          <AddImage />
          <AddImage />
        </ImageContainer>
        <AddFile>파일 직접 선택</AddFile>
      </Container>
      <Container>
        <SidebarTitle>인스타 페이지 첨부</SidebarTitle>
        <UrlContainer>
          <Url /> URL 붙여넣기
        </UrlContainer>
      </Container>
      <Container>
        <SidebarTitle>대중교통정보 추가</SidebarTitle>
        <UrlContainer>
          <Url /> URL 붙여넣기
        </UrlContainer>
      </Container>
      <Container>
        <SidebarTitle>장소정보 추가 </SidebarTitle>
        <UrlContainer>
          <Url /> URL 붙여넣기
        </UrlContainer>
      </Container>
      <Button onClick={OnClickToHome}>돌아가기</Button>
    </Section>
  );
}

const Section = styled.div`
  height: 100%;
  width: 310px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 100px;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const AddFile = styled.div`
  width: 54px;
  height: 14px;
  border: 1px solid #ababab;
  border-radius: 20px;
  font-size: 6px;
  color: #ababab;
  text-align: center;
  line-height: 14px;
`;

const UrlContainer = styled.div`
  width: 250px;
  height: 30px;
  background-color: #fbfbfb;
  color: #ababab;
  border-radius: 20px;
  text-align: center;
  line-height: 30px;
`;

const Button = styled.div`
  border: 2px solid #ababab;
  border-radius: 20px;
  color: #ababab;
  font-size: 12px;
  width: 80px;
  height: 25px;
  line-height: 25px;
  text-align: center;
  cursor: pointer;
`;
