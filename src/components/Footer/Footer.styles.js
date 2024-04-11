import styled from 'styled-components';

export const FooterContainer = styled.div`
  width: ${({ theme }) => theme.width};
  margin: ${({ theme }) => theme.margin};
  color: ${({ theme }) => theme.colors.themeTestFooter};
`;
