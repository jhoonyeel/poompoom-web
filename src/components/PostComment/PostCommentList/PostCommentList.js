import { useState, useEffect, useRef, useCallback } from 'react';
import axios from 'axios';

export default function PostCommentList() {
  const [comments, setComments] = useState([]);
  const [cursorId, setCursorId] = useState(null);
  const [hasNext, setHasNext] = useState(true);
  const observer = useRef();
  const accessToken = localStorage.getItem('AccessToken');
  const fetchComments = async () => {
    const response = await axios.get(`/review/1/comments`, {
      headers: {
        access: `${accessToken}`,
      },
      params: {
        reviewId: 1,
        cursorId,
        sort: 'asc',
        size: '5',
      },
    });

    const newComments = response.data.values;
    setComments((prevComments) => [...prevComments, ...newComments]);
    setCursorId(response.data.cursorId);
    setHasNext(response.data.hasNext);
  };

  const lastCommentElementRef = useCallback(
    (node) => {
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasNext) {
          fetchComments(cursorId);
        }
      });
      if (node) observer.current.observe(node);
    },
    [cursorId, hasNext],
  );

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div>
      {comments.map((comment, index) => {
        if (comments.length === index + 1) {
          return (
            <div ref={lastCommentElementRef} key={comment.commentId}>
              <p>{comment.body}</p>
              <small>{new Date(comment.createDate).toLocaleString()}</small>
            </div>
          );
        }
        return (
          <div key={comment.commentId}>
            <p>{comment.body}</p>
            <small>{new Date(comment.createDate).toLocaleString()}</small>
          </div>
        );
      })}
    </div>
  );
}
