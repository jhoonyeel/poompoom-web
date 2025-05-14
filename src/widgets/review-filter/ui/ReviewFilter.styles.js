import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AlignBox = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 30px;
`;
export const SortBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const SortIcon = styled(FontAwesomeIcon)`
  font-size: 24px;
  margin-right: 5px;
`;
export const SortText = styled.span`
  padding: 4px 0;
  font-size: 20px;
  font-weight: bold;
  user-select: none; /* 텍스트 선택 방지 */
  outline: none; /* 클릭 후 아웃라인 제거 */
  cursor: pointer;

  ${(props) =>
    props.isSelected &&
    css`
      border-top: 4px solid #0e5649;
      color: #0e5649;
    `}
`;

export const PriceSliderContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
export const PriceText = styled.span`
  font-size: 20px;
  user-select: none;
  outline: none;
  cursor: pointer;
`;
export const ItemTypeDropdownContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const WriteBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const WritingReview = styled.span`
  font-size: 14px;
  user-select: none;
`;
