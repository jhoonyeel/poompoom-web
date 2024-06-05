import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ReactComponent as Query } from '../../assets/QUERY_VIEW.svg';
import AuthorComponent from '../../components/AuthorComponent';
import ReviewPostCard from '../Review/components/Card/ReviewPostCard/ReviewPostCard.container';
import PostFilter from '../Review/components/PostFilter/PostFilter.container';

export default function QueryResultPage() {
  // 화면 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  const ex = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Wrapper>
      <AuthorComponent />
      <QuerySection>
        <QueryContent>
          <PostFilter />
          <TitleContent>
            <TitleBox>
              <QuerySvg />
            </TitleBox>
          </TitleContent>
          <GalleryContent>
            {ex.map((post) => (
              <ReviewPostCard key={post.id} post={post} />
            ))}
          </GalleryContent>
          <ButtonBox onClick={scrollToTop}>
            <UpIcon icon={faChevronUp} />
          </ButtonBox>
        </QueryContent>
      </QuerySection>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  width: 100%;
`;
const QuerySection = styled.section`
  width: 100%;
  border: 3px solid #aaa;
`;
const QueryContent = styled.div`
  width: 80%;
  margin: 0 auto;
`;

const TitleContent = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;
const TitleBox = styled.div`
  width: 25%;
`;
const QuerySvg = styled(Query)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const GalleryContent = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr); /* 4개의 열을 가지도록 설정 */
  column-gap: 1.5rem;
  row-gap: 2.5rem;
`;

const ButtonBox = styled.div`
  position: fixed;
  bottom: 50px; /* 화면 하단과의 간격 조정 */
  right: 50px; /* 화면 우측과의 간격 조정 */
  z-index: 999; /* 다른 요소 위에 표시되도록 z-index 조정 */
  width: 2%;
  border: 3px solid gray;
  border-radius: 50%;
  aspect-ratio: 1 / 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const UpIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
`;
