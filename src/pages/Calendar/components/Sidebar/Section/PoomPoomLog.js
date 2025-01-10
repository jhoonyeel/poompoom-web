import styled from 'styled-components';
import { Container, PlusButton, SidebarTitle } from '../Style';

export default function PoomPoomLog({ setAddDatePlan, openModal }) {
  const OnClickToPlan = () => {
    setAddDatePlan(true);
    openModal();
  };

  return (
    <Container>
      <SidebarTitle>&lt; 품품로그 &gt;</SidebarTitle>
      <LogContainer>
        <LogBox />
        <LogBox />
        <LogBox />
        <LogBox />
        <LogBox />
        <LogBox onClick={OnClickToPlan}>
          <PlusButton>+</PlusButton>
        </LogBox>
      </LogContainer>
    </Container>
  );
}

const LogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 80px);
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
const LogBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: #e0e0e0;
  border-radius: 20px;
  display: flex;
  &:hover {
    transition: all 0.2s ease-out;
    background-color: rgb(177, 177, 177);
  }
`;
