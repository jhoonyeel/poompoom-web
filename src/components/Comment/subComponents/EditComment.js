import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

export default function EditComment({ body, commentId, reviewId, isEditing, setIsEditing }) {
  const [editedBody, setEditedBody] = useState(body);
  const ChangeComment = async () => {
    try {
      await axios.post(`/review/${reviewId}/update/${commentId}`, {
        body: editedBody,
      });
      return console.log(`${commentId} 번 댓글 업데이트 완료`);
    } catch (error) {
      return console.log(`${commentId}번 댓글 업데이트 에러: ${error}`);
    }
  };

  const handleEditConfirm = async () => {
    await ChangeComment(commentId, reviewId, editedBody);
    setIsEditing(false);
  };

  return (
    <CommentBody>
      {isEditing ? (
        <div>
          <input type="text" value={editedBody} onChange={(e) => setEditedBody(e.target.value)} />
          {/* eslint-disable-next-line react/button-has-type */}
          <button onClick={handleEditConfirm}>확인</button>
        </div>
      ) : (
        <CommentContent>{editedBody}</CommentContent>
      )}
    </CommentBody>
  );
}

const CommentBody = styled.div``;
const CommentContent = styled.div``;
