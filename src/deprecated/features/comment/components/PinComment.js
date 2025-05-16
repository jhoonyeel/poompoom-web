import { faMapPin } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const PinComment = ({ isFixed, commentId, reviewId }) => {
  const [isPined, setIsPined] = useState(isFixed);
  const upPinComment = async () => {
    try {
      await axios.post(`/review/${reviewId}/fix/${commentId}`);
      return console.log(`${commentId}번 댓글 upPin 완료`);
    } catch (error) {
      return console.log(`${reviewId}번 댓글 upPin 에러: ${error}`);
    }
  };

  const unPinComment = async () => {
    try {
      await axios.post(`/review/${reviewId}/unpin`);
      return console.log(`${commentId}번 댓글 pin 제거`);
    } catch (error) {
      return console.log(`${reviewId}번 댓글 unPin 에러: ${error}`);
    }
  };

  const handlePinClick = () => {
    console.log(isFixed);
    if (isPined) {
      unPinComment(commentId, reviewId);
    } else {
      upPinComment(commentId, reviewId);
    }
    setIsPined(!isPined);
    window.location.reload();
    console.log(isFixed);
  };

  return <PinIcon icon={faMapPin} onClick={handlePinClick} style={{ color: isPined ? '#655f48' : '#bababa' }} />;
};

export default PinComment;

const PinIcon = styled(FontAwesomeIcon)`
  top: 0;
  right: 40px;
`;
