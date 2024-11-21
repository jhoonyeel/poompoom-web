import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchBarUI from './SearchBar.presenter';

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState(''); // 검색어 상태
  const [isFocused, setIsFocused] = useState(false); // input focus 상태
  const inputRef = useRef(null);
  const navigate = useNavigate();

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

  const handleSearch = () => {
    const params = new URLSearchParams({ searchContent: searchTerm });
    navigate(`/review/query-result?${params.toString()}`);
  };

  const handleClearInput = () => {
    setSearchTerm('');
    setIsFocused(false);
  };

  return (
    <SearchBarUI
      isFocused={isFocused}
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      handleChange={handleChange}
      handleFocus={handleFocus}
      handleBlur={handleBlur}
      handleClearInput={handleClearInput}
      handleSearch={handleSearch}
      handleRecommendationClick={handleRecommendationClick}
      ref={inputRef}
    />
  );
}
