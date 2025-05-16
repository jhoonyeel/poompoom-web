import { useNavigatePath } from '@shared/hooks/useNavigatePath.js';
import { useState } from 'react';
import ReviewFilterUI from './ReviewFilter.presenter.js';

const ReviewFilter = ({ selectedSort, setSelectedSort }) => {
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
    <ReviewFilterUI
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
};

export default ReviewFilter;
