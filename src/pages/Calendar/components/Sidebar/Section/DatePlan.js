import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Button, Container, Section, SectionTitle, SectionWrapper } from '../Style';
import PostDetailModal from '../../CalendarView/PostDetailModal';

export default function DatePlan({ posts }) {
  const [selectedPostIndex, setSelectedPostIndex] = useState(null);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
  const [recentPosts, setRecentPosts] = useState([]);

  useEffect(() => {
    const recentPost = Object.values(posts)
      .flat()
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      .slice(0, 6);

    setRecentPosts(recentPost);
  }, [posts]); // 최신 게시글 6개

  const handlePrevSection = () => {
    setCurrentSectionIndex((prev) => (prev === 0 ? 1 : prev - 1));
  };

  const handleNextSection = () => {
    setCurrentSectionIndex((prev) => (prev === 1 ? 0 : prev + 1));
  };

  // 선택된 게시글 인덱스 설정
  const handleLogBoxClick = (index) => {
    setSelectedPostIndex(index);
  };

  // 6개의 최신 게시글끼리 순환하는 버튼
  const moveToNextPost = () => {
    setSelectedPostIndex((prevIndex) => (prevIndex + 1) % recentPosts.length);
  };

  const moveToPreviousPost = () => {
    setSelectedPostIndex((prevIndex) => (prevIndex - 1 + recentPosts.length) % recentPosts.length);
  };

  const closePostDetailModal = () => {
    setSelectedPostIndex(null);
  };

  return (
    <Container>
      <SectionWrapper>
        <Button onClick={handlePrevSection}>{'<'}</Button>

        {/* 첫 번째 섹션 - 품품로그 */}
        {currentSectionIndex === 0 && (
          <Section>
            <SectionTitle> 품품로그 </SectionTitle>
            {recentPosts.length === 0 ? (
              <NoPostsMessage>게시글이 없습니다. 게시글을 추가해보세요!</NoPostsMessage>
            ) : (
              <LogContainer>
                {recentPosts.map((post, index) => (
                  <LogBox key={index} onClick={() => handleLogBoxClick(index)}>
                    {post.images && post.images.length > 0 ? (
                      <Thumbnail src={post.images[0]} alt={`Post ${index} Thumbnail`} />
                    ) : (
                      <NoImageText>사진 없는 게시글</NoImageText>
                    )}
                    <HoverDate>
                      {new Date(post.createdAt).toLocaleDateString('en-US', { month: '2-digit', day: '2-digit' })}
                    </HoverDate>
                  </LogBox>
                ))}
              </LogContainer>
            )}
            {selectedPostIndex !== null && (
              <PostDetailModal
                post={recentPosts[selectedPostIndex]}
                onClose={closePostDetailModal}
                onNext={moveToNextPost}
                onPrevious={moveToPreviousPost}
                showNavigation
              />
            )}
          </Section>
        )}
        {/* 두번째 섹션 - 데이트 플랜 */}
        {currentSectionIndex === 1 && (
          <Section>
            <SectionTitle> 데이트 플랜 </SectionTitle>
            <PlanWrapper>
              <PlanBox />
              <PlanBox />
              <PlanBox />
            </PlanWrapper>
          </Section>
        )}
        <Button onClick={handleNextSection}>{'>'}</Button>
      </SectionWrapper>
    </Container>
  );
}

const PlanBox = styled.div`
  background-color: #f6f6f6;
  height: 55px;
  width: 79px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:hover {
    transition: all 0.2s ease-out;
    background-color: rgb(219, 219, 219);
  }
`;
const PlanWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;
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

const NoPostsMessage = styled.div`
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  font-size: 16px;
  color: rgb(99, 87, 93);
  font-weight: bold;
  margin-top: 20px;
`;
