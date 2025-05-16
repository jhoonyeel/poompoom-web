import { faFilter } from '@fortawesome/free-solid-svg-icons';
import HoverAnimation from './HoverAnimation.js';
import ItemTypeDropdown from './ItemTypeDropdown.js';
import PriceSlider from './PriceSlider.js';
import * as S from './ReviewFilter.styles.js';

const ReviewFilterUI = ({
  selectedSort,
  onSortClick,
  isPriceSliderOpen,
  togglePriceSlider,
  selectedItem,
  setSelectedItem,
  isHovered,
  setIsHovered,
  navigatePath,
}) => {
  return (
    <S.Wrapper>
      <S.AlignBox>
        <S.SortBox>
          <S.SortIcon icon={faFilter} />
          <S.SortText isSelected={selectedSort === '인기순'} onClick={() => onSortClick('인기순')}>
            인기순
          </S.SortText>
          <S.SortText isSelected={selectedSort === '최신순'} onClick={() => onSortClick('최신순')}>
            최신순
          </S.SortText>
          <S.SortText isSelected={selectedSort === '추천순'} onClick={() => onSortClick('추천순')}>
            추천순
          </S.SortText>
        </S.SortBox>
        <S.PriceSliderContainer>
          <S.PriceText onClick={togglePriceSlider}>가격대 정렬</S.PriceText>
          {isPriceSliderOpen && <PriceSlider />}
        </S.PriceSliderContainer>
        <S.ItemTypeDropdownContainer>
          <ItemTypeDropdown selectedItem={selectedItem} setSelectedItem={setSelectedItem} />
        </S.ItemTypeDropdownContainer>
      </S.AlignBox>
      <S.WriteBox
        onClick={navigatePath(`/review/create`)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <HoverAnimation isHovered={isHovered} />
        <S.WritingReview>새 무드뷰 만들기</S.WritingReview>
      </S.WriteBox>
    </S.Wrapper>
  );
};

export default ReviewFilterUI;
