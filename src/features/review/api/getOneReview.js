import axios from '../../../shared/lib/axios';

/**
 * 특정 리뷰 데이터를 가져옵니다.
 * @param {string} reviewId - 리뷰 ID
 * @returns {Promise<Object>} 리뷰 데이터
 */
export const getOneReview = async (reviewId) => {
  try {
    const response = await axios.get(`/review/${reviewId}`);
    return response.data; // 필요한 데이터만 반환
  } catch (error) {
    console.error(`/review/${reviewId} 에러:`, error.message);
    throw error; // 호출한 쪽에서 에러를 처리할 수 있도록 재던짐
  }
};
