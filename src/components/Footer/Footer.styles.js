import styled from 'styled-components';
import { ReactComponent as Footer } from '../../assets/Footer.svg';

export const FooterContainer = styled.footer`
  background-color: #ffeaea;
  width: 100%;
  margin-top: 3rem;
`;
export const FooterContent = styled.div`
  /* width: 80%; */
  height: 100%;
  margin: 0 auto;
`;
export const FooterSvg = styled(Footer)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.4;
`;
