import { atom, selector } from 'recoil';
import axios from '../apis/axios';

// 추천 키워드 상태를 저장하는 atom
export const recommendationsState = atom({
  key: 'recommendationsState', // 고유한 key 설정
  default: [], // 기본값 설정
});

// 추천 키워드 데이터를 비동기적으로 가져오는 selector
export const fetchRecommendationsSelector = selector({
  key: 'fetchRecommendationsSelector',
  get: async () => {
    try {
      const response = await axios.get('/hashtag/rank');
      return response.data; // 추천 키워드 데이터 반환
    } catch (error) {
      console.error('Error fetching recommendations:', error);
      return [];
    }
  },
});
