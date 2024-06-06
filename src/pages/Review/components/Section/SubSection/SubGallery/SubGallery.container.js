import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../../../../../apis/axios';
import SubGalleryUI from './SubGallery.presenter';

export default function SubGallery() {
  const [subPosts, setSubPosts] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);

  const navigate = useNavigate();
  const handlePostClick = (post) => {
    navigate(`/review/${post.id}`);
  };

  const fetchPostData = async (currentCursor = null) => {
    try {
      const page = currentCursor ? currentCursor + 1 : 1; // 최소 페이지 값 1로 설정

      const res = await axios.get(`/review/subscribe`, {
        params: {
          page,
        },
      });
      console.log(res.headers);
      const { values, cursorId: newCursorId, hasNext: newHasNext } = res.data;
      setSubPosts((prevPosts) => [...prevPosts, ...values]);
      setCursorId(newCursorId);
      setHasNext(newHasNext);
      console.log('서버로부터 받은 데이터db: ', res.data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchPostData(cursorId);
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

  return <SubGalleryUI subPosts={subPosts} handlePostClick={handlePostClick} loader={loader} />;
}
