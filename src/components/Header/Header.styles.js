import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.colors.themeTestHeader};
  height: 100px;
  background-color: #e6e6e6;
  border: 3px solid #ccc;
  display: flex;
  justify-content: space-between;
`;

export const LogoBox = styled.div`
  width: 15%;
`;

export const ProfileBtn = styled.button`
  width: 15%;
`;

export const MenuBox = styled.div`
  width: 15%;
`;
