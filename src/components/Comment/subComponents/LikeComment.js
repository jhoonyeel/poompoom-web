import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { faHeart as heartInactive } from '@fortawesome/free-regular-svg-icons';
import { faHeart as heartActive } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LikeComment({ likeCount, reviewId, commentId, isCommenter, isLiked }) {
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [currentLikeCount, setCurrentLikeCount] = useState(likeCount);

  const changeLikeStatus = async () => {
    try {
      await axios.post(`/review/${reviewId}/commentLike/${commentId}`);

      setLikeStatus((prevStatus) => !prevStatus);
      setCurrentLikeCount((prevCount) => prevCount + (likeStatus ? -1 : 1));
    } catch (error) {
      console.log(`${commentId}번 댓글 좋아요 에러: ${error}`);
    }
  };

  return (
    <div>
      {!isCommenter ? (
        <LikeContainer>
          <HeartIcon icon={likeStatus ? heartActive : heartInactive} onClick={changeLikeStatus} />
          <LikeCount>{currentLikeCount}</LikeCount>
        </LikeContainer>
      ) : (
        <LikeCount>내가 쓴 댓글에 좋아요 {likeCount}명</LikeCount>
      )}
    </div>
  );
}

const HeartIcon = styled(FontAwesomeIcon)`
  color: rgba(255, 154, 154, 0.84);
`;

const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;

const LikeCount = styled.div`
  font-size: 10px;
  color: rgba(255, 154, 154, 0.84);
`;
