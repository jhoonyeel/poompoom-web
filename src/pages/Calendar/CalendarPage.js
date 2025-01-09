import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import CalenderView from './components/CalendarView/CalendarView';

export default function CalenderPage() {
  return (
    <Container>
      <Sidebar />
      <CalenderView />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;
