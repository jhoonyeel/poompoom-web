import { useState } from 'react';
import styled from 'styled-components';
import CalendarView from '../components/CalendarView/CalendarView';
import DatePlanModal from '../components/Modal/DatePlanModal';
import Sidebar from '../components/Sidebar/Sidebar';

export default function CalendarPage() {
  const [isSidebarOpen, setSidebarOpen] = useState(true);
  const [posts, setPosts] = useState({}); // 게시글 데이터 {eventId: [posts]}
  const [logs, setLogs] = useState({}); // 로그 데이터
  const [events, setEvents] = useState([]); // 이벤트 데이터를 배열로 관리
  const [selectedEvent, setSelectedEvent] = useState(null); // 선택된 이벤트
  const [isPostModalOpen, setIsPostModalOpen] = useState(false);
  const [isLogModalOpen, setIsLogModalOpen] = useState(false);
  const [ClickedDate, setClickedDate] = useState(null);

  const handleEventClick = (event, setDate) => {
    setSelectedEvent(event); // 선택된 이벤트 설정
    if (setDate) setClickedDate(setDate);
  };

  const handleCloseDetailModal = () => {
    setSelectedEvent(null); // 이벤트 선택 해제
    setClickedDate(null);
  };

  const handlePostSubmit = (post) => {
    if (!selectedEvent || !selectedEvent.id) return;

    if (post.type === 'plan') {
      setPosts((prevPosts) => ({
        ...prevPosts,
        [selectedEvent.id]: [...(prevPosts[selectedEvent.id] || []), post].sort((a, b) =>
          a.title.localeCompare(b.title),
        ),
      }));
    } else {
      setLogs((prevPosts) => ({
        ...prevPosts,
        [selectedEvent.id]: [...(prevPosts[selectedEvent.id] || []), post].sort((a, b) =>
          a.title.localeCompare(b.title),
        ),
      }));
    }

    setIsPostModalOpen(false); // 게시글 작성 모달 닫기
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  console.log('events:', events);

  return (
    <Container>
      <Sidebar
        isOpen={isSidebarOpen}
        toggleSidebar={toggleSidebar}
        posts={posts}
        logs={logs}
        events={events}
        selectedEvent={selectedEvent}
        handleCloseDetailModal={handleCloseDetailModal}
        setIsLogModalOpen={setIsLogModalOpen}
        handleEventClick={handleEventClick}
      />
      <CalendarView
        posts={posts}
        logs={logs}
        events={events}
        setEvents={setEvents}
        selectedEvent={selectedEvent}
        isPostModalOpen={isPostModalOpen}
        setIsPostModalOpen={setIsPostModalOpen}
        isLogModalOpen={isLogModalOpen}
        setIsLogModalOpen={setIsLogModalOpen}
        handleEventClick={handleEventClick}
        ClickedDate={ClickedDate}
        handleCloseDetailModal={handleCloseDetailModal}
        handlePostSubmit={handlePostSubmit}
      />
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
