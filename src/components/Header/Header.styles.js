import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.colors.themeTestHeader};
`;
