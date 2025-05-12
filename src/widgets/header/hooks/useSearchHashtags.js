import { useEffect, useState } from 'react';
import axios from '../../../shared/lib/axios';

export function useSearchHashtags() {
  const [allHashtags, setAllHashtags] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchAllHashtags() {
      try {
        const response = await axios.get('/hashtag');
        setAllHashtags(response.data); // 모든 해시태그 데이터를 상태에 저장
      } catch (err) {
        console.error('/hashtag API 에러:', err);
        setError(err); // 에러 상태 저장
      }
    }

    fetchAllHashtags();
  }, []); // 빈 배열: 컴포넌트 마운트 시 한 번 실행

  return { allHashtags, error };
}
