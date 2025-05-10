import axios from '../../../shared/lib/axios';

/**
 * 리뷰 데이터를 업데이트합니다.
 * @param {string} reviewId - 리뷰 ID
 * @param {FormData} formData - 업데이트할 리뷰 데이터
 * @returns {Promise<Object>} 서버 응답 데이터
 */
export const updateReview = async (reviewId, formData) => {
  try {
    const response = await axios.post(`/review/update/${reviewId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data; // 필요한 데이터만 반환
  } catch (error) {
    console.error(`/review/update/${reviewId} 에러:`, error.message);
    throw error; // 호출한 쪽에서 에러를 처리할 수 있도록 재던짐
  }
};
