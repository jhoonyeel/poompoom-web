import React, { useEffect, useState } from 'react';
import SearchBarUI from './SearchBar.presenter';
import useDebounce from '../../hooks/useDebounce';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState([
    { id: 1, keyword: 'React' },
    { id: 2, keyword: 'JavaScript' },
    { id: 3, keyword: 'CSS' },
    { id: 4, keyword: 'HTML' },
  ]);
  const [isFocused, setIsFocused] = useState(false);
  const debouncedSearchTerm = useDebounce(searchTerm, 500); // 입력값을 0.5초 지연시킴

  useEffect(() => {
    if (debouncedSearchTerm) {
      // 추천 키워드를 가져오는 API 호출을 수행합니다.
      // 이 예시에서는 결과를 빈 배열로 설정합니다.
      fetch(`https://api.example.com/recommendations?q=${debouncedSearchTerm}`)
        .then((response) => response.json())
        .then((data) => {
          setRecommendations(data);
        })
        .catch((error) => {
          console.error('Error fetching recommendations:', error);
        });
    } else {
      // setRecommendations([]);
    }
  }, [debouncedSearchTerm]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // handleBlur가 너무 빨리 실행되어 클릭 이벤트를 놓치는 경우 방지하기 위해 타임아웃 설정
    setTimeout(() => setIsFocused(false), 100);
  };

  return (
    <SearchBarUI
      isFocused={isFocused}
      searchTerm={searchTerm}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      recommendations={recommendations}
    />
  );
}
