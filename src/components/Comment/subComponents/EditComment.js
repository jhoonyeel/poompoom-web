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
      console.log(`${commentId} 번 댓글 업데이트 완료`);
    } catch (error) {
      console.log(`${commentId}번 댓글 업데이트 에러: ${error}`);
    }
  };

  const handleEditConfirm = async () => {
    await ChangeComment();
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedBody(body);
    setIsEditing(false);
  };

  return (
    <CommentBody>
      {isEditing ? (
        <EditContainer>
          <EditInput type="text" value={editedBody} onChange={(e) => setEditedBody(e.target.value)} />
          <EditButton onClick={handleEditConfirm}>확인</EditButton>
          <EditButton onClick={handleCancelEdit} cancel>
            취소
          </EditButton>
        </EditContainer>
      ) : (
        <CommentContent>{editedBody}</CommentContent>
      )}
    </CommentBody>
  );
}

const CommentBody = styled.div`
  font-size: 24px;
`;

const CommentContent = styled.div``;

const EditContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 10px; /* 버튼 및 입력 필드 간의 간격 */
  margin-top: 10px;
`;

const EditInput = styled.input`
  font-size: 24px;
  padding: 8px;
  width: 200px;
  border: 1px solid #ccc;
  border-radius: 4px;
  outline: none;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const EditButton = styled.button`
  padding: 8px 12px;
  font-size: 14px;
  color: #fff;
  background-color: ${(props) => (props.cancel ? '#949494' : 'rgba(230, 143, 143, 0.84);')};
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.cancel ? '#b9b9b9' : 'rgba(255, 154, 154, 0.84);')};
  }

  &:focus {
    outline: none;
  }
`;
