import axios from 'axios';

export const createComment = async (reviewId, comment) => {
  try {
    const response = await axios.post(`/review/${reviewId}/create`, { body: comment });
    return console.log('댓글 생성 성공:', response);
  } catch (error) {
    throw console.log('댓글 생성 에러:', error);
  }
};

export const getComments = async (reviewId, cursorId, size) => {
  try {
    const response = await axios.get(`/review/${reviewId}/comments`, { params: { cursorId, sort: 'desc', size } });
    return response.data;
  } catch (error) {
    return console.log('일반 댓글 get 에러:', error);
  }
};

export const getPinnedComment = async (reviewId) => {
  try {
    const response = await axios.get(`/review/${reviewId}/fixedCOmment`);
    return response;
  } catch (error) {
    return console.log('고정 댓글 get 에러:', error);
  }
};

export const updateComment = async (reviewId, commentId, editComment) => {
  try {
    await axios.post(`/review/${reviewId}/update/${commentId}`, editComment);
    return console.log(`${reviewId} 번 댓글 업데이트 완료`);
  } catch (error) {
    return console.log(`${reviewId}번 댓글 업데이트 에러: ${error}`);
  }
};

export const deleteComment = async (reviewId, commentId) => {
  try {
    await axios.post(`/review/${reviewId}/delete/${commentId}`);
    return console.log(`${commentId}번 댓글 삭제 완료`);
  } catch (error) {
    return console.log(`${reviewId}번 댓글 삭제 에러: ${error}`);
  }
};

export const likeComment = async (reviewId, commentId) => {
  try {
    const response = await axios.post(`/review/${reviewId}/commentLike/${commentId}`);
    return console.log(`${commentId}번 댓글 좋아요 완료: ${response}`);
  } catch (error) {
    return console.log(`${reviewId}번 댓글 좋아요 에러: ${error}`);
  }
};

export const upPinComment = async (reviewId, commentId) => {
  try {
    await axios.post(`/review/${reviewId}/fix/${commentId}`);
    return console.log(`${reviewId}번 댓글 upPin 완료`);
  } catch (error) {
    return console.log(`${reviewId}번 댓글 upPin 에러: ${error}`);
  }
};

export const unPinComment = async (reviewId) => {
  try {
    await axios.post(`/review/${reviewId}/unpin`);
    return console.log(`${reviewId}번 게시글의 pin 제거`);
  } catch (error) {
    return console.log(`${reviewId}번 댓글 unPin 에러: ${error}`);
  }
};
