import { useEffect, useState } from 'react';
import axios from '../lib/axios.js';

export function useFetchRecommendations() {
  const [recommendations, setRecommendations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchRecommendations() {
      try {
        const res = await axios.get('/hashtag/rank');
        setRecommendations(res.data); // 데이터 설정
      } catch (err) {
        console.error('/hashtag/rank 에러:', err);
        setError(err); // 에러 상태 저장
      }
    }

    fetchRecommendations();
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  return { recommendations, error };
}
