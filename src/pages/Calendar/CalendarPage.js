import { useState } from 'react';
import styled from 'styled-components';
import CalendarView from './components/CalendarView/CalendarView';
import Sidebar from './components/Sidebar/Sidebar';
import DatePlanModal from './components/Modal/DatePlanModal';

export default function CalendarPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <Container>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <CalendarView />
      <DatePlanModal />
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin: 0;
  padding: 0;
`;
