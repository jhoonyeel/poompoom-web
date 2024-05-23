import styled from 'styled-components';

export const Container = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const Button = styled.button`
  width: 6rem;
  height: 2rem;
  background-color: ${(props) => (props.isActive ? 'black' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
`;
