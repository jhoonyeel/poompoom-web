import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBarUI from './SearchBar.presenter';
// import useDebounce from '../../hooks/useDebounce';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [recommendations, setRecommendations] = useState([]);
  const [isFocused, setIsFocused] = useState(false);
  // const debouncedSearchTerm = useDebounce(searchTerm, 500); // 입력값을 0.5초 지연시킴
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // 사용자의 검색어에 따른 추천 키워드를 가져오는 API 호출을 수행합니다.
  // useEffect(() => {
  //   if (debouncedSearchTerm) {
  //     // 이 예시에서는 결과를 빈 배열로 설정합니다.
  //     fetch(`https://api.example.com/recommendations?q=${debouncedSearchTerm}`)
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setRecommendations(data);
  //       })
  //       .catch((error) => {
  //         console.error('Error fetching recommendations:', error);
  //       });
  //   } else {
  //     setRecommendations([]);
  //   }
  // }, [debouncedSearchTerm]);

  const fetchPostData = async () => {
    try {
      const res = await axios.get(`/hashtag/rank`);
      const { data } = res;
      setRecommendations(data);
    } catch (error) {
      console.error('Error fetching post data:', error);
    }
  };
  useEffect(() => {
    fetchPostData();
  }, []);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    // handleBlur가 너무 빨리 실행되어 클릭 이벤트를 놓치는 경우 방지하기 위해 타임아웃 설정
    setTimeout(() => setIsFocused(false), 500);
  };

  const handleRecommendationClick = (keyword) => {
    setSearchTerm(keyword);
    setIsFocused(true);
    inputRef.current.focus();
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      const params = new URLSearchParams({ searchContent: searchTerm });
      navigate(`/review/query-result?${params.toString()}`);
    }
  };

  const handleClearInput = () => {
    setSearchTerm('');
    setIsFocused(false);
  };

  return (
    <SearchBarUI
      isFocused={isFocused}
      searchTerm={searchTerm}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleKeyDown={handleKeyDown}
      handleClearInput={handleClearInput}
      recommendations={recommendations}
      handleRecommendationClick={handleRecommendationClick}
      ref={inputRef}
    />
  );
}
