import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.colors.themeTestHeader};
  height: 10vh;
  background-color: #e6e6e6;
  border: 3px solid #ccc;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoImgBox = styled.div`
  width: 15%;
`;
export const LogoImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const ProfileImgBox = styled.div`
  width: 5%; /* 원하는 너비를 설정 */
  aspect-ratio: 1 / 1; /* 정사각형 비율 설정 */
`;
export const ProfileImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

export const MenuBox = styled.div`
  width: 15%;
`;
