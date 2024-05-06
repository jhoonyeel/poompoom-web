import React, { useState, useEffect } from 'react';
import useDebounce from '../../hooks/useDebounce'; // useDebounce 훅 임포트

function PostSearch() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 입력값을 0.5초 지연시킴

  useEffect(() => {
    if (debouncedSearchTerm) {
      // 추천 키워드를 가져오는 API 호출을 수행합니다.
      // 이 예시에서는 결과를 빈 배열로 설정합니다.
      fetch(`https://api.example.com/recommendations?q=${debouncedSearchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setRecommendations(data);
          setResults([...results]); // 지울 예정
        })
        .catch((error) => {
          console.error('Error fetching recommendations:', error);
        });
    } else {
      setRecommendations([]);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={handleChange} />
      <ul>
        {recommendations.map((recommendation) => (
          <li key={recommendation.id}>{recommendation.keyword}</li>
        ))}
      </ul>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PostSearch;
