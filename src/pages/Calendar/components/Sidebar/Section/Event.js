import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import EventDetailModal from '../../CalendarView/EventDetailModal';
import { Button, Container, Section, SectionTitle, SectionWrapper } from '../Style';

// 일정 날짜 포맷 함수
const formatEventDate = (startDate, endDate) => {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const isSameDay = start.toLocaleDateString() === end.toLocaleDateString();

  const startTime = `${start.getHours() % 12 || 12}:${start.getMinutes() < 10 ? `0${start.getMinutes()}` : start.getMinutes()}`;
  const endTime = `${end.getHours() % 12 || 12}:${end.getMinutes() < 10 ? `0${end.getMinutes()}` : end.getMinutes()}`;

  const startDateStr = `${start.getMonth() + 1}/${start.getDate()}`;
  const endDateStr = `${end.getMonth() + 1}/${end.getDate()}`;

  const startPeriod = start.getHours() >= 12 ? '오후' : '오전';
  const endPeriod = end.getHours() >= 12 ? '오후' : '오전';

  if (isSameDay) {
    return `${startDateStr}${startPeriod}  ${startTime} - ${endPeriod} ${endTime}`;
  }
  return `${startPeriod} ${startDateStr} ${startTime} -  ${endDateStr} ${endPeriod} ${endTime}`;
};

// 일정 리스트 아이템 컴포넌트
const EventListItem = React.memo(({ event, onClick }) => (
  <EventItem onClick={onClick}>
    <EventColor style={{ backgroundColor: event.category.color }} />
    <EventInfo>
      <EventTitle>{event.title}</EventTitle>
      <EventDate>{formatEventDate(event.startDate, event.endDate)}</EventDate>
    </EventInfo>
  </EventItem>
));

export default function Event({
  events,
  posts,
  selectedEvent,
  handleCloseDetailModal,
  setIsPostModalOpen,
  handleEventClick,
}) {
  const user = JSON.parse(localStorage.getItem('userData'));
  const [myEvents, setMyEvents] = useState([]);
  const [partnerEvents, setPartnerEvents] = useState([]);
  const [recentEvents, setRecentEvents] = useState([]);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  useEffect(() => {
    const myEventsList = events
      .filter((event) => event.writer === user?.memberId)
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
      .slice(0, 4);

    const partnerEventsList = events
      .filter((event) => event.writer !== user?.memberId)
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
      .slice(0, 4);

    const sortedEvents = [...myEventsList, ...partnerEventsList]
      .sort((a, b) => new Date(b.startDate) - new Date(a.startDate))
      .slice(0, 4);

    setMyEvents(myEventsList);
    setPartnerEvents(partnerEventsList);
    setRecentEvents(sortedEvents);
  }, [events]); // 최신 일정 4개

  const handlePrevSection = () => {
    setCurrentSectionIndex((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNextSection = () => {
    setCurrentSectionIndex((prev) => (prev === 2 ? 0 : prev + 1));
  };
  return (
    <Container>
      <SectionWrapper>
        <Button onClick={handlePrevSection}>{'<'}</Button>
        {/* 첫첫 번째 섹션 - 나의 일정 */}
        {currentSectionIndex === 0 && (
          <Section>
            <SectionTitle>{user.username}의 일정</SectionTitle>
            {myEvents.length > 0 ? (
              myEvents.map((event) => (
                <EventListItem key={event.writer} event={event} onClick={() => handleEventClick(event)} />
              ))
            ) : (
              <NoEventsMessage>나의 일정이 없습니다.</NoEventsMessage>
            )}
          </Section>
        )}
        {/* 두두 번째 섹션 - 상대방의 일정 */}
        {currentSectionIndex === 1 && (
          <Section>
            <SectionTitle>상대방의 일정</SectionTitle>
            {partnerEvents.length > 0 ? (
              partnerEvents.map((event) => (
                <EventListItem key={event.writer} event={event} onClick={() => handleEventClick(event)} />
              ))
            ) : (
              <NoEventsMessage>상대방의 일정이 없습니다.</NoEventsMessage>
            )}
          </Section>
        )}
        {/* 세세 번째 섹션 - 전체 일정 */}
        {currentSectionIndex === 2 && (
          <Section>
            <SectionTitle>전체 일정</SectionTitle>
            {recentEvents.length > 0 ? (
              recentEvents.map((event) => (
                <EventListItem key={event.writer} event={event} onClick={() => handleEventClick(event)} />
              ))
            ) : (
              <NoEventsMessage> 일정이 없습니다.</NoEventsMessage>
            )}
          </Section>
        )}
        <Button onClick={handleNextSection}>{'>'}</Button>
      </SectionWrapper>

      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={handleCloseDetailModal}
          posts={posts[selectedEvent.id] || []}
          onWritePost={() => setIsPostModalOpen(true)}
        />
      )}
    </Container>
  );
}

const EventItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 0;
  border-bottom: 1px solid #ddd;
  width: 280px;
  cursor: pointer;
`;

const EventColor = styled.div`
  width: 10px;
  height: 30px;
  border-radius: 4px;
`;

const EventInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 280;
`;

const EventTitle = styled.span`
  font-size: 16px;
  font-weight: bold;
  margin-right: 10px;
`;

const EventDate = styled.span`
  font-size: 10px;
  color: gray;
`;

const NoEventsMessage = styled.div`
  color: gray;
  font-size: 14px;
  text-align: center;
`;
