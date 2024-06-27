import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import PostCommentListUI from './PostCommentList.presenter';

export default function PostCommentList() {
  const [comments, setComments] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);
  const { reviewId } = useParams();
  const AccessToken = localStorage.getItem('accessToken');
  const fetchComments = async (cursor, size = 3) => {
    try {
      const response = await axios.get(
        `/review/${reviewId}/comments`,
        {
          params: {
            cursorId: cursor,
            sort: 'desc',
            size,
          },
        },
        { headers: { access: `${AccessToken}` } },
      );

      const newComments = response.data.values;
      setComments((prevComments) => {
        // 중복된 commentId를 제거한 새로운 배열 생성
        const uniqueComments = [...prevComments, ...newComments].reduce((acc, comment) => {
          if (!acc.some((c) => c.commentId === comment.commentId)) {
            acc.push(comment);
          }
          return acc;
        }, []);

        return uniqueComments;
      });

      console.log('ddd', newComments);
      if (newComments.length > 0) {
        const lastCommentId = newComments[newComments.length - 1].commentId;
        setCursorId(lastCommentId);
      }

      setHasNext(response.data.hasNext);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const convertDateArrayToDate = (dateArray) => {
    const [year, month, day, hour, minute, second, milliseconds] = dateArray;
    return new Date(year, month - 1, day, hour, minute, second, milliseconds);
  }; // 배열 형식 날짜 형변환

  useEffect(() => {
    fetchComments();
  }, [reviewId]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasNext) {
          fetchComments(cursorId, 3); // 추가로 가져오는 데이터 크기
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

  return <PostCommentListUI comments={comments} convertDateArrayToDate={convertDateArrayToDate} loader={loader} />;
}
