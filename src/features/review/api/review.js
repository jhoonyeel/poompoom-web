/* eslint-disable no-throw-literal */
import axios from '@shared/lib/axios';

/**
 * 리뷰 작성 요청
 * @param {Object} formData - 리뷰 작성에 필요한 데이터(FormData 형식)
 * @returns {Object} 서버 응답 데이터
 * @throws {Object} 표준화된 에러 객체 { status, message }
 */
export const createReview = async (formData) => {
  try {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };

    const response = await axios.post(`/review/create`, formData, config);
    return response.data;
  } catch (error) {
    if (error.response) {
      // 서버에서 에러 응답을 반환한 경우
      throw {
        status: error.response.status,
        message: error.response.data?.message || '서버 에러가 발생했습니다.',
      };
    } else if (error.request) {
      // 요청은 전송되었지만 응답을 받지 못한 경우
      throw {
        status: null,
        message: '서버로부터 응답이 없습니다. 네트워크 상태를 확인해주세요.',
      };
    } else {
      // 기타 에러
      throw {
        status: null,
        message: error.message || '요청 처리 중 알 수 없는 에러가 발생했습니다.',
      };
    }
  }
};

/**
 * 단일 리뷰 조회
 * @param {string} reviewId - 리뷰 ID
 * @returns {Promise<Object>} 리뷰 데이터
 */
export const getReviewById = async (reviewId) => {
  try {
    const response = await axios.get(`/review/${reviewId}`);
    return response.data; // 필요한 데이터만 반환
  } catch (error) {
    console.error(`/review/${reviewId} 에러:`, error.message);
    throw error; // 호출한 쪽에서 에러를 처리할 수 있도록 재던짐
  }
};

/**
 * 리뷰 수정 요청
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
