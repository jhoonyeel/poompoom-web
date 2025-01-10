import styled from 'styled-components';
import { Container, PlusButton, SidebarTitle } from '../Style';

export default function DatePlan() {
  return (
    <Container>
      <SidebarTitle>작성중인 데이트 플랜</SidebarTitle>
      <PlanContainer>
        <PlanBox />
        <PlanBox />
        <PlanBox>
          <PlusButton>+</PlusButton>
        </PlanBox>
      </PlanContainer>
    </Container>
  );
}

const PlanContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 7px;
`;
const PlanBox = styled.div`
  background-color: #f6f6f6;
  height: 55px;
  width: 79px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-out;
    background-color: rgb(219, 219, 219);
  }
`;
