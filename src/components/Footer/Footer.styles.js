import styled from 'styled-components';
import { ReactComponent as Footer } from '../../assets/Footer.svg';

export const Wrapper = styled.div`
  /* width: 80%; */
  margin: 0 auto;
  min-width: max-content;
  height: 100%;
`;
export const FooterIcon = styled(Footer)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;
