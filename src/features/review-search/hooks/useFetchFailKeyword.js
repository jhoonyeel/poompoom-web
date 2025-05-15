import axios from '@shared/lib/axios';
import { useEffect, useState } from 'react';

export function useFetchFailKeyword() {
  const [failKeyword, setFailKeyword] = useState();
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchFailKeyword() {
      try {
        const res = await axios.get('/recommend/failsearchtag');
        setFailKeyword(res.data); // 데이터 설정
      } catch (err) {
        console.error('/recommend/failsearchtag 에러:', err);
        setError(err); // 에러 상태 저장
      }
    }

    fetchFailKeyword();
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  return { failKeyword, error };
}
