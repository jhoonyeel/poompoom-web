import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const useComments = () => {
  const { reviewId } = useParams();
  const [comments, setComments] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const [isFetching, setIsFetching] = useState(false);

  const AccessToken = localStorage.getItem('accessToken');
  const fetchComments = async (cursor, size = 3) => {
    if (isFetching || !hasNext) return;
    setIsFetching(true);
    try {
      const response = await axios.get(
        `/review/${reviewId}/comments`,
        {
          params: {
            cursorId: cursor,
            size,
            sort: 'desc',
          },
        },
        { headers: { access: `${AccessToken}` } },
      );
      const { values, nextPageId, hasNext: newHasNext } = response.data;
      const newComments = values;
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

      console.log('불러온 댓글:', newComments);

      if (newComments.length > 0) {
        setCursorId(nextPageId);
        setHasNext(newHasNext);
      }
    } catch (error) {
      console.error('댓글 조회 실패:', error);
    } finally {
      setIsFetching(false);
    }
  };

  const convertDateArrayToDate = (dateArray) => {
    const [year, month, day, hour, minute, second, milliseconds] = dateArray;
    return new Date(year, month - 1, day, hour, minute, second, milliseconds); // 월 -1 보정
  }; // 배열 형식 날짜 형변환

  const getPinnedComment = async () => {
    try {
      const response = await axios.get(`/review/${reviewId}/fixedComment`);
      const fixedComment = response.data;
      console.log('고정댓글:', fixedComment);
      return fixedComment;
    } catch (error) {
      return console.log('고정 댓글 get 에러:', error);
    }
  };

  useEffect(() => {
    fetchComments(null, 3);
    getPinnedComment();
  }, []);

  console.log(' hasNext:', hasNext, 'cursorId:', cursorId);
  return { fetchComments, comments, convertDateArrayToDate, hasNext, cursorId, reviewId };
};
