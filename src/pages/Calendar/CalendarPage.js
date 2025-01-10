import { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './components/Sidebar/Sidebar';
import CalenderView from './components/CalendarView/CalendarView';

export default function CalendarPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      <CalenderView />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
