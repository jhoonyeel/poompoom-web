import styled from 'styled-components';
import { ReactComponent as BlueMoon } from '../../../assets/blueMoon.svg';
import { ReactComponent as IcedJelly } from '../../../assets/icedGelly.svg';
import { ReactComponent as Poompoom } from '../../../assets/poompoom.svg';
import { ReactComponent as SexyCool } from '../../../assets/sexyCool.svg';
import { ReactComponent as SweetHerb } from '../../../assets/sweetHerb.svg';
import { ReactComponent as WarmVivid } from '../../../assets/warmVivid.svg';
import { Container, SidebarTitle } from '../Style';

export default function Theme() {
  const items = [
    {
      id: 1,
      src: WarmVivid,
      text: 'warm vivid',
    },
    { id: 2, src: IcedJelly, text: 'iced jelly' },
    { id: 3, src: Poompoom, text: 'poompoom' },
    { id: 4, src: SexyCool, text: 'sweet herb' },
    { id: 5, src: SweetHerb, text: 'sexy cool' },
    { id: 6, src: BlueMoon, text: 'blue moon' },
  ];

  return (
    <Container>
      <SidebarTitle>색상테마 설정</SidebarTitle>
      <ThemeGrid>
        {items.map((item) => {
          const IconComponent = item.src;
          return (
            <ThemeWrapper key={item.id}>
              <IconComponent />
              <Text>{item.text}</Text>
            </ThemeWrapper>
          );
        })}
      </ThemeGrid>
    </Container>
  );
}

const ThemeGrid = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  grid-template-columns: repeat(3, 68px);
  grid-template-rows: repeat(2, 80px);
  gap: 20px;
  font-size: 9px;
`;

const ThemeWrapper = styled.div`
  border-radius: 20px;
  background-color: none;
  &:hover {
    transition: all 0.2s ease-in-out;
    background-color: rgb(234, 234, 234);
  }
`;

const Text = styled.div``;
