import React, { useState, useEffect } from 'react';
import * as S from './PoomPoom.styled';
import EventDetailModal from '../../CalendarView/EventDetailModal';
import PostDetailModal from '../../CalendarView/PostDetailModal';
import { Container } from '../Style';

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
  <S.EventItem onClick={onClick}>
    <S.EventColor style={{ backgroundColor: event.category.color }} />
    <S.EventInfo>
      <S.EventTitle>{event.title}</S.EventTitle>
      <S.EventDate>{formatEventDate(event.startDate, event.endDate)}</S.EventDate>
    </S.EventInfo>
  </S.EventItem>
));

export default function PoomPoom({
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
  const [recentPostsWithImages, setRecentPostsWithImages] = useState([]);
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
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

  useEffect(() => {
    const recentPosts = Object.values(posts)
      .flat()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 6);

    setRecentPostsWithImages(recentPosts);
  }, [posts]); // 최신 게시글 6개

  const handlePrevSection = () => {
    setCurrentSectionIndex((prev) => (prev === 0 ? 3 : prev - 1));
  };

  const handleNextSection = () => {
    setCurrentSectionIndex((prev) => (prev === 3 ? 0 : prev + 1));
  };

  // 선택된 게시글 인덱스 설정
  const handleLogBoxClick = (index) => {
    setSelectedPostIndex(index);
  };

  // 6개의 최신 게시글끼리 순환하는 버튼
  const moveToNextPost = () => {
    setSelectedPostIndex((prevIndex) => (prevIndex + 1) % recentPostsWithImages.length);
  };

  const moveToPreviousPost = () => {
    setSelectedPostIndex((prevIndex) => (prevIndex - 1 + recentPostsWithImages.length) % recentPostsWithImages.length);
  };

  const closePostDetailModal = () => {
    setSelectedPostIndex(null);
  };

  return (
    <Container>
      <S.SectionWrapper>
        <S.Button onClick={handlePrevSection}>{'<'}</S.Button>
        {/* 첫 번째 섹션 - 품품로그 */}
        {currentSectionIndex === 0 && (
          <S.Section>
            <S.SectionTitle> 품품로그 </S.SectionTitle>
            {recentPostsWithImages.length === 0 ? (
              <S.NoPostsMessage>게시글이 없습니다. 게시글을 추가해보세요!</S.NoPostsMessage>
            ) : (
              <S.LogContainer>
                {recentPostsWithImages.map((post, index) => (
                  <S.LogBox key={index} onClick={() => handleLogBoxClick(index)}>
                    {post.images && post.images.length > 0 ? (
                      <S.Thumbnail src={post.images[0]} alt={`Post ${index} Thumbnail`} />
                    ) : (
                      <S.NoImageText>사진 없는 게시글</S.NoImageText>
                    )}
                    <S.HoverDate>
                      {new Date(post.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
                    </S.HoverDate>
                  </S.LogBox>
                ))}
              </S.LogContainer>
            )}
            {selectedPostIndex !== null && (
              <PostDetailModal
                post={recentPostsWithImages[selectedPostIndex]}
                onClose={closePostDetailModal}
                onNext={moveToNextPost}
                onPrevious={moveToPreviousPost}
                showNavigation
              />
            )}
          </S.Section>
        )}
        {/* 두 번째 섹션 - 나의 일정 */}
        {currentSectionIndex === 1 && (
          <S.Section>
            <S.SectionTitle>{user.username}의 일정</S.SectionTitle>
            {myEvents.length > 0 ? (
              myEvents.map((event) => (
                <EventListItem key={event.writer} event={event} onClick={() => handleEventClick(event)} />
              ))
            ) : (
              <S.NoEventsMessage>나의 일정이 없습니다.</S.NoEventsMessage>
            )}
          </S.Section>
        )}
        {/* 세 번째 섹션 - 상대방의 일정 */}
        {currentSectionIndex === 2 && (
          <S.Section>
            <S.SectionTitle>상대방의 일정</S.SectionTitle>
            {partnerEvents.length > 0 ? (
              partnerEvents.map((event) => (
                <EventListItem key={event.writer} event={event} onClick={() => handleEventClick(event)} />
              ))
            ) : (
              <S.NoEventsMessage>상대방의 일정이 없습니다.</S.NoEventsMessage>
            )}
          </S.Section>
        )}
        {/* 네 번째 섹션 - 전체 일정 */}
        {currentSectionIndex === 3 && (
          <S.Section>
            <S.SectionTitle>전체 일정</S.SectionTitle>
            {recentEvents.length > 0 ? (
              recentEvents.map((event) => (
                <EventListItem key={event.writer} event={event} onClick={() => handleEventClick(event)} />
              ))
            ) : (
              <S.NoEventsMessage> 일정이 없습니다.</S.NoEventsMessage>
            )}
          </S.Section>
        )}{' '}
        <S.Button onClick={handleNextSection}>{'>'}</S.Button>
      </S.SectionWrapper>

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
