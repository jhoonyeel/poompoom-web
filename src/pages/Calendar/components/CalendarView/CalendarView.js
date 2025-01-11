/* eslint-disable no-plusplus */
import React, { useState } from 'react';
import styled from 'styled-components';
import EventDetailModal from './EventDetailModal';
import EventModal from './EventModal';
import PostModal from './PostModal';

export default function CalendarView({
  posts,
  events,
  setEvents,
  selectedEvent,
  isPostModalOpen,
  setIsPostModalOpen,
  handleEventClick,
  handleCloseDetailModal,
  handlePostSubmit,
}) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEventSubmit = (eventData) => {
    // 이벤트 ID를 부여
    const newEvent = { ...eventData, id: Date.now() }; // 고유 ID
    setEvents((prevEvents) => [...prevEvents, newEvent]); // 새로운 이벤트 추가
  };

  // Helper functions
  const startOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const endOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  const startDay = startOfMonth.getDay();
  const daysInMonth = endOfMonth.getDate();

  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  // Generate dates for the calendar
  const calendarDates = [];
  for (let i = 0; i < startDay; i++) {
    calendarDates.push(null);
  }
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDates.push(day);
  }

  const today = new Date();

  return (
    <CalendarWrapper>
      <Header>
        <ArrowButton onClick={handlePrevMonth}>{'<'}</ArrowButton>
        <span>{`${currentDate.getFullYear()}년 ${currentDate.getMonth() + 1}월`}</span>
        <ArrowButton onClick={handleNextMonth}>{'>'}</ArrowButton>
      </Header>
      <DaysRow>
        {['일', '월', '화', '수', '목', '금', '토'].map((day) => (
          <div key={day}>{day}</div>
        ))}
      </DaysRow>
      <DateGrid>
        {calendarDates.map((day, index) => {
          const isToday =
            day &&
            today.getFullYear() === currentDate.getFullYear() &&
            today.getMonth() === currentDate.getMonth() &&
            today.getDate() === day;

          const dateKey = day ? new Date(currentDate.getFullYear(), currentDate.getMonth(), day) : null;

          // Filter events that match the current date
          const dayEvents = events.filter(
            (event) => dateKey && new Date(event.startDate) <= dateKey && new Date(event.endDate) >= dateKey,
          );

          return (
            <DayCell key={index}>
              <DateNumber isToday={isToday}>{day}</DateNumber>
              {dayEvents.map((event, idx) => (
                <EventTag
                  key={idx}
                  style={{ background: event.category.color }}
                  onClick={() => handleEventClick(event)}
                >
                  {event.title}
                </EventTag>
              ))}
            </DayCell>
          );
        })}
      </DateGrid>
      <AddEventButton onClick={() => setIsModalOpen(true)}>Add Event</AddEventButton>
      {isModalOpen && <EventModal onClose={() => setIsModalOpen(false)} onSubmit={handleEventSubmit} />}
      {selectedEvent && (
        <EventDetailModal
          event={selectedEvent}
          onClose={handleCloseDetailModal}
          posts={posts[selectedEvent.id] || []}
          onWritePost={() => setIsPostModalOpen(true)}
        />
      )}
      {isPostModalOpen && <PostModal onClose={() => setIsPostModalOpen(false)} onSubmit={handlePostSubmit} />}
    </CalendarWrapper>
  );
}

// Styled Components
const CalendarWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  margin: 0 auto;
  text-align: center;
  font-family: Arial, sans-serif;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  font-size: 20px;
  font-weight: bold;
`;

const ArrowButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 24px;
  &:hover {
    opacity: 0.7;
  }
`;

const DaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  margin-bottom: 12px;
  font-size: 14px;
  color: gray;
  border-bottom: 2px solid #ccc;
`;

const DateGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 4px;
`;

const DayCell = styled.div`
  display: flex;
  flex-direction: column;
  align-self: start;
  position: relative;
  aspect-ratio: 1;
  border-radius: 50%;
`;

const DateNumber = styled.span`
  text-align: start;
  ${(props) =>
    props.isToday &&
    `
    background: black;
    color: white;
    border-radius: 50%;
    width: 20px;
    height: 20px;
  `}
`;

const EventTag = styled.div`
  font-size: 12px;
  color: white;
  border-radius: 4px;
  padding: 2px 4px;
  margin-top: 2px;
  cursor: pointer;
`;

const AddEventButton = styled.button`
  background: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  cursor: pointer;
  border-radius: 4px;
  margin-top: 16px;
  &:hover {
    background: #0056b3;
  }
`;
