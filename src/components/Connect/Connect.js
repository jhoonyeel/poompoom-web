import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function ConnectGidePage() {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return (
    <Container>
      <Title>연인 연동 서비스 활성화를 위한 질문에 답해주세요!</Title>
      <Body>
        <QRContainer>
          <Box /> <Text>필수 질문에 모두 응답시 코드가 생성</Text>
          <SubText>
            연애 가치관, 선물 품목 선호도부터 신발 사이즈까지!
            <br />
            <br />
            연인에게 나에게 대해 알려주세요!
          </SubText>
        </QRContainer>
        <QRContainer>
          <Box />
          <Text>생성된 코드를 연인에게 전송</Text>
        </QRContainer>
        <QRContainer>
          <Box />
          <Text>연동서비스 활성화 완료</Text>
        </QRContainer>
      </Body>
      <Button onClick={handleOnClick('/lover/connect')}>Gogosing</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  padding: 150px;
`;
const Title = styled.div`
  font-size: 36px;
  color: #06564e;
  font-weight: 800;
  margin: 20px;
  margin-bottom: 200px;
`;

const Body = styled.div`
  display: flex;
  flex-direction: row;
  align-self: center;
  justify-content: center;
  gap: 30px;
`;
const QRContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: 400px;
`;
const Box = styled.div`
  border: 2px solid black;
  width: 241px;
  height: 210px;
  margin-bottom: 40px;
`;
const Text = styled.div`
  font-size: 24px;
  font-weight: 600;
  color: #06564e;
  padding-bottom: 30px;
`;
const SubText = styled.div`
  font-size: 15px;
`;
const Button = styled.button`
  width: 406px;
  height: 82px;
  background-color: #06564e;
  font-size: 50px;
  font-weight: 800;
  color: white;
  display: flex;
  align-self: center;
  justify-content: center;
  box-shadow: none;
  border: none;
  margin-top: 70px;
  cursor: pointer;

  &:hover {
    background-color: #047d70;
  }

  &:active {
    background-color: #034f45;
  }
`;
