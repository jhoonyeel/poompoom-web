import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 12vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: #e6e6e6;
  border: 3px solid #ccc;
`;
export const HeaderContent = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  /* 조건부 스타일링 */
  ${({ showSearchBar }) =>
    showSearchBar
      ? css`
          /* showSearchBar가 true일 때의 스타일 */
        `
      : css`
          /* showSearchBar가 false일 때의 스타일 */
        `}
`;
export const IconBox = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
`;
export const LogoImgBox = styled.div`
  width: 15%;
  height: 100%;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const ProfileImgBox = styled.div`
  width: 50%;
  aspect-ratio: 1 / 1;
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
  cursor: pointer;
`;
