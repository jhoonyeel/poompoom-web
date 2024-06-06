import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';
import { ReactComponent as Logo } from '../../assets/PoomPoom.svg';

export const HeaderWrapper = styled.header`
  width: 100%;
  height: 15vh;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;

  background-color: #ffeaea;
  border-bottom: 3px solid #ffaaaa;
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
  width: 20%;
  height: 100%;
  display: flex;
`;
export const LogoBox = styled.div`
  width: 15%;
  height: 100%;
  padding: 0.5% 0%;
`;
export const LogoSvg = styled(Logo)`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const ProfileBox = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const ProfileIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
`;
export const ProfileParagraph = styled.p`
  width: 70%;
  margin-top: 5%;
  font-weight: bold;
`;

export const MenuBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 30%;
  cursor: pointer;
`;

export const MenuIcon = styled(FontAwesomeIcon)`
  font-size: 48px;
`;

export const MenuSpreadBox = styled.div`
  background-color: white;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px 0;
`;
export const MenuSpan = styled.span`
  font-family: 'Shrikhand', serif;
  font-weight: bold;
  font-size: 20px;
  font-style: italic;
  margin: 8px;
  color: #072623;
  &:hover {
    color: #c52c27;
  }
`;
