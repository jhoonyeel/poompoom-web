import styled from 'styled-components';
import { ReactComponent as LogFooter } from '../../../shared/assets/Footer.svg';

export default function AuthFooterUI() {
  return (
    <FooterContainer>
      <FooterBanner />
      <MenuContainer>
        <MenuText>HOME</MenuText>
        <MenuText>MOOD VIEW</MenuText>
        <MenuText>MY LOVER</MenuText>
        <MenuText>OPTION</MenuText>
      </MenuContainer>
    </FooterContainer>
  );
}

export const FooterContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0;
  margin: 0;
`;

export const FooterBanner = styled(LogFooter)`
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  object-fit: cover;
`;

export const MenuContainer = styled.div`
  position: absolute;
  top: 15%;
  right: 15%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const MenuText = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Shrikhand&display=swap');

  font-family: 'Shrikhand', cursive;
  font-size: 1.5rem;
  background-color: transparent;
  color: #ffffff;
  border: none;
  padding: 0.3rem;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
`;
