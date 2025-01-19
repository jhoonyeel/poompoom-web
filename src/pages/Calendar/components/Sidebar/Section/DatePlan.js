import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Button, Container, Section, SectionTitle, SectionWrapper } from '../Style';
import PostDetailModal from '../../CalendarView/PostDetailModal';
import LogDetailModal from '../../CalendarView/LogDetailModal';

// 데이터 정렬 및 최신 항목 추출
function useRecentItems(data, count) {
  const [recentItems, setRecentItems] = useState([]);

  useEffect(() => {
    const sortedItems = Object.values(data)
      .flat()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, count);

    setRecentItems(sortedItems);
  }, [data, count]);

  return recentItems;
}

// 공통 리스트 컴포넌트
function ItemList({ items, onItemClick, noDataMessage }) {
  return items.length === 0 ? (
    <NoMessage>{noDataMessage}</NoMessage>
  ) : (
    <LogContainer>
      {items.map((item, index) => (
        <LogBox key={index} onClick={() => onItemClick(index)}>
          {item.images && item.images.length > 0 ? (
            <Thumbnail src={item.images[0]} alt={`Item ${index} Thumbnail`} />
          ) : (
            <NoImageText>사진 없음</NoImageText>
          )}
          <HoverDate>
            {new Date(item.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
          </HoverDate>
        </LogBox>
      ))}
    </LogContainer>
  );
}

export default function DatePlan({ posts, logs }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);

  const recentPosts = useRecentItems(posts, 3);
  const recentLogs = useRecentItems(logs, 6);

  const closeDetailModal = () => setSelectedIndex(null);
  const handlePrevSection = () => setCurrentSectionIndex((prev) => (prev === 0 ? 1 : prev - 1));
  const handleNextSection = () => setCurrentSectionIndex((prev) => (prev === 1 ? 0 : prev + 1));

  const currentItems = currentSectionIndex === 0 ? recentPosts : recentLogs;

  return (
    <Container>
      <SectionWrapper>
        <Button onClick={handlePrevSection}>{'<'}</Button>

        <Section>
          <SectionTitle>{currentSectionIndex === 0 ? '데이트 플랜' : '품품로그'}</SectionTitle>
          <ItemList
            items={currentItems}
            onItemClick={setSelectedIndex}
            noDataMessage={
              currentSectionIndex === 0 ? '게시글이 없습니다. 추가해보세요!' : '로그가 없습니다. 기록해보세요!'
            }
          />
        </Section>

        {selectedIndex !== null && currentSectionIndex === 0 && (
          <PostDetailModal
            post={recentPosts[selectedIndex]}
            onClose={closeDetailModal}
            onNext={() => setSelectedIndex((prev) => (prev + 1) % recentPosts.length)}
            onPrevious={() => setSelectedIndex((prev) => (prev - 1 + recentPosts.length) % recentPosts.length)}
            showNavigation
          />
        )}

        {selectedIndex !== null && currentSectionIndex === 1 && (
          <LogDetailModal log={recentLogs[selectedIndex]} onClose={closeDetailModal} />
        )}

        <Button onClick={handleNextSection}>{'>'}</Button>
      </SectionWrapper>
    </Container>
  );
}

// const PlanBox = styled.div`
//   background-color: #f6f6f6;
//   height: 55px;
//   width: 79px;
//   border-radius: 10px;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;

//   &:hover {
//     transition: all 0.2s ease-out;
//     background-color: rgb(219, 219, 219);
//   }
// `;
// const PlanWrapper = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
// `;
const LogBox = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0);
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  position: relative; /* 부모 요소에 상대적 위치를 지정 */

  &:hover img {
    opacity: 0.3;
  }
`;
const LogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 80px);
  grid-template-rows: repeat(2, 80px);
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const Thumbnail = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const HoverDate = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  position: absolute; /* 이미지 위에 위치하도록 설정 */
  display: none;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 중앙 정렬 */
  ${LogBox}:hover & {
    display: block;
  }
`;

const NoImageText = styled.div`
  color: white;
  font-size: 14px;
  font-weight: bold;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 5px;
  border-radius: 10px;
`;

const NoMessage = styled.div`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: rgb(99, 87, 93);
  font-weight: bold;
  margin-top: 20px;
`;
