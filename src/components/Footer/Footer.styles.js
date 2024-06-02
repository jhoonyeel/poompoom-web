import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.colors.themeTestFooter};
  background-color: #e6e6e6;
  border: 3px solid #ccc;
  height: 10vh;
`;
