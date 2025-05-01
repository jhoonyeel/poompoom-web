import styled from 'styled-components';
import { Container, SidebarTitle } from '../Style';

export default function ImportCalender() {
  return (
    <Container>
      <SidebarTitle>외부 캘린더 일정 가져오기 </SidebarTitle>
      <Bar>
        <Button>+</Button>
      </Bar>
    </Container>
  );
}

const Bar = styled.div`
  width: 247px;
  height: 27px;
  border-radius: 10px;
  background-color: #fbfbfb;
  margin-bottom: 40px;
`;
const Button = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 50px;
  background-color: #e8e8e8;
`;
