import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import axios from '../../apis/axios';
import { ReactComponent as Query } from '../../assets/QUERY_VIEW.svg';
import ReviewPostCard from '../Review/components/Card/ReviewPostCard/ReviewPostCard.container';
import PostFilter from '../Review/components/PostFilter/PostFilter.container';

export default function QueryResultPage() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const searchContent = params.get('searchContent') || ''; // URL에서 searchContent 값을 추출

  const [queryPosts, setQueryPosts] = useState([]);
  const [cursorId, setCursorId] = useState(0);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const fetchPostData = async (cursor, size = 24) => {
    try {
      const res = await axios.get(`/review/search`, {
        params: {
          keyword: searchContent,
          cursorId: cursor, // cursorId보다 id가 작은 게시글을 가져옴.
          size, // 가져올 게시글의 개수.
        },
      });
      const { values, hasNext: newHasNext } = res.data;
      setQueryPosts((prevPosts) => (cursor === 0 ? values : [...prevPosts, ...values]));
      // 마지막 reviewId를 cursorId로 설정
      if (values.length > 0) {
        const lastPostId = values[values.length - 1].reviewId;
        setCursorId(lastPostId);
      }
      setHasNext(newHasNext);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    setQueryPosts([]);
    setCursorId(0);
    setHasNext(true);
    fetchPostData(0); // 검색어가 변경되면 cursorId를 0으로 설정하고 새로운 데이터를 가져옴
  }, [searchContent]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId, 8); // 추가로 가져오는 데이터
        }
      },
      { threshold: 1 },
    );

    if (loader.current) {
      observer.observe(loader.current);
    }

    return () => {
      if (loader.current) {
        observer.unobserve(loader.current);
      }
    };
  }, [cursorId, hasNext]);

  // 화면 맨 위로 이동하는 함수
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // 부드러운 스크롤
    });
  };

  return (
    <Wrapper>
      <QuerySection>
        <QueryContent>
          <PostFilter />
          <TitleContent>
            <TitleBox>
              <QuerySvg />
            </TitleBox>
          </TitleContent>
          <GalleryContent>
            {queryPosts && queryPosts.map((post) => <ReviewPostCard key={post.id} post={post} />)}
          </GalleryContent>
          <div ref={loader} style={{ height: '15vh', margin: '10px' }} />
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
