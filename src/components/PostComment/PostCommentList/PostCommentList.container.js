import axios from 'axios';
import { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function PostCommentList() {
  const [comments, setComments] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const loader = useRef(null);
  const { reviewId } = useParams();

  const fetchComments = async (cursor, size = 6) => {
    try {
      const response = await axios.get(`/review/${reviewId}/comments`, {
        params: {
          reviewId,
          cursorId: cursor,
          sort: 'desc',
          size,
        },
      });

      const newComments = response.data.values;
      setComments((prevComments) => [...prevComments, ...newComments]);

      if (newComments.length > 0) {
        const lastCommentId = newComments[newComments.length - 1].commentId;
        setCursorId(lastCommentId);
      }

      setHasNext(response.data.hasNext);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };
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

  return (
    <div>
      {comments.map((comment, index) => (
        <div ref={comments.length === index + 1 ? loader : null} key={comment.commentId}>
          <p>{comment.body}</p>
          <small>{new Date(comment.createDate).toLocaleString()}</small>
        </div>
      ))}
      <div ref={loader} style={{ height: '15vh', margin: '10px' }} />
    </div>
  );
}
