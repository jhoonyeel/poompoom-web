/* eslint-disable no-use-before-define */
import styled from 'styled-components';
import { useEffect, useState, useRef } from 'react';
import { Container, SidebarTitle } from '../Style';

export default function Alarm({ posts, events, logs }) {
  const MAX_LOG_SIZE = 20; // 전체보기시 최대 알람 개수
  const INITIAL_LOGS_VISIBLE = 4; // 초기에 보여줄 알람 개수
  const [changeLogs, setChangeLogs] = useState([]);
  const [visibleLogs, setVisibleLogs] = useState(INITIAL_LOGS_VISIBLE);
  const prevPosts = useRef([]);
  const prevEvents = useRef([]);
  const prevLogs = useRef([]); // logs의 이전 상태 저장

  const getTypeLabel = (type) => {
    if (type === 'post') return '게시글';
    if (type === 'event') return '일정';
    return '회고록';
  };

  useEffect(() => {
    // eslint-disable-next-line default-param-last
    const detectChanges = (prevItems = [], currentItems = [], type) => {
      const safePrevItems = Array.isArray(prevItems) ? prevItems : [];
      const safeCurrentItems = Array.isArray(currentItems) ? currentItems : [];

      const changes = [];
      // 생성 탐지
      safeCurrentItems.forEach((item) => {
        const prevItem = safePrevItems.find((prev) => prev.createdAt === item.createdAt);

        if (!prevItem) {
          changes.push({
            type,
            changeType: 'created',
            message: `${getTypeLabel(type)}을 작성했습니다.`,
            createdAt: new window.Date(),
          });
        } else if (JSON.stringify(prevItem.content) !== JSON.stringify(item.content)) {
          changes.push({
            type,
            changeType: 'updated',
            message: `${getTypeLabel(type)}을 수정했습니다.`,
            createdAt: new window.Date(),
          });
        }
      });

      // 삭제 탐지
      safePrevItems.forEach((prevItem) => {
        if (!safeCurrentItems.find((item) => item.createdAt === prevItem.createdAt)) {
          changes.push({
            type,
            changeType: 'deleted',
            message: `${getTypeLabel(type)}을 삭제했습니다.`,
            createdAt: new window.Date(),
          });
        }
      });

      return changes;
    };

    const flattenedPosts = Object.values(posts || {}).flat(); // posts 이중 배열 평탄화
    const flattenedLogs = Object.values(logs || {}).flat(); // logs 이중 배열 평탄화
    const postChanges = detectChanges(prevPosts.current || [], flattenedPosts || [], 'post');
    const eventChanges = detectChanges(prevEvents.current || [], events || [], 'event');
    const logChanges = detectChanges(prevLogs.current || [], flattenedLogs || [], 'log'); // logs 변화 탐지

    const updatedLogs = [...postChanges, ...eventChanges, ...logChanges];

    // 최신 순 정렬 & 크기 제한
    const mergedLogs = [...updatedLogs, ...changeLogs].sort((a, b) => b.createdAt - a.createdAt).slice(0, MAX_LOG_SIZE);

    setChangeLogs(mergedLogs);

    // 현재 상태 저장
    prevPosts.current = flattenedPosts;
    prevEvents.current = events;
    prevLogs.current = flattenedLogs; // logs 상태 저장
  }, [posts, events, logs]);

  const handleShowAll = () => {
    setVisibleLogs(MAX_LOG_SIZE);
  };

  const handleHide = () => {
    setVisibleLogs(INITIAL_LOGS_VISIBLE);
  };

  return (
    <Container>
      <SidebarTitle>캘린더 알림센터</SidebarTitle>
      <AlarmWrapper>
        {changeLogs.slice(0, visibleLogs).map((log, index) => (
          <AlarmContainer key={index}>
            <Profile />
            <AlramText>{log.message}</AlramText>
            <DateWrapper>{formatRelativeTime(log.createdAt)}</DateWrapper>
          </AlarmContainer>
        ))}
      </AlarmWrapper>
      {visibleLogs === INITIAL_LOGS_VISIBLE ? (
        <ViewAllButton onClick={handleShowAll}>전체 알람 보기</ViewAllButton>
      ) : (
        <ViewAllButton onClick={handleHide}>숨기기</ViewAllButton>
      )}
    </Container>
  );
}

// 상대 시간 표시 함수
const formatRelativeTime = (AlarmDate) => {
  const now = new window.Date();
  const diff = now - AlarmDate;

  if (diff < 60000) return '방금 전'; // 1분 이내
  if (diff < 3600000) return `${Math.floor(diff / 60000)}분 전`; // 1시간 이내
  if (diff < 86400000) return `${Math.floor(diff / 3600000)}시간 전`; // 1일 이내
  return `${Math.floor(diff / 86400000)}일 전`; // 1일 이상
};

const AlarmWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AlarmContainer = styled.div`
  width: 247px;
  height: 27px;
  background-color: #fbfbfb;
  color: #ababab;
  font-size: 9px;
  border-radius: 12px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: rgb(231, 231, 231);
  }
`;

const Profile = styled.div``;

const AlramText = styled.div``;

const DateWrapper = styled.div`
  font-size: 7px;
`;

const ViewAllButton = styled.div`
  font-size: 9px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;
