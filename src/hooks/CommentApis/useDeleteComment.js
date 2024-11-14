import axios from 'axios';

export const useDeleteComment = async (commentId, reviewId) => {
  try {
    const response = await axios.post(`/review/${reviewId}/delete/${commentId}`);

    console.log('댓글이 성공적으로 삭제되었습니다.', response);
  } catch (error) {
    console.error('댓글 삭제 오류:', error);
    if (error.response && error.response.status === 404) {
      console.log('댓글을 찾을 수 없습니다. 이미 삭제되었거나 잘못된 경로일 수 있습니다.');
    } else if (error.response && error.response.status === 403) {
      console.log('댓글 작성자만 삭제할 수 있습니다.');
    } else {
      console.log('댓글 삭제에 실패했습니다. 다시 시도해 주세요.');
    }
  }
};
