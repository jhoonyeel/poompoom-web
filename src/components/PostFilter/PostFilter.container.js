import React, { useState } from 'react';
import { useNavigatePath } from '../../hooks/useNavigatePath';
import PostFilterUI from './PostFilter.presenter';

export default function PostFilter() {
  const [selectedSort, setSelectedSort] = useState('추천순'); // 기본으로 추천순이 선택되도록 설정
  const [isPriceSliderOpen, setIsPriceSliderOpen] = useState(false); // 가격 슬라이더 열림 상태 관리
  const [selectedItem, setSelectedItem] = useState('품목 선택'); // 기본 선택된 품목
  const [isHovered, setIsHovered] = useState(false);
  const navigatePath = useNavigatePath();

  const handleSortClick = (filter) => {
    setSelectedSort(filter);
  };

  const togglePriceSlider = () => {
    setIsPriceSliderOpen(!isPriceSliderOpen);
  };

  return (
    <PostFilterUI
      selectedSort={selectedSort}
      onSortClick={handleSortClick}
      isPriceSliderOpen={isPriceSliderOpen}
      togglePriceSlider={togglePriceSlider}
      selectedItem={selectedItem}
      setSelectedItem={setSelectedItem}
      isHovered={isHovered}
      setIsHovered={setIsHovered}
      navigatePath={navigatePath}
    />
  );
}
