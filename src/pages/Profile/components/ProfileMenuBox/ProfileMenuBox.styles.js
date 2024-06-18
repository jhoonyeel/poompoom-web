import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #e6e6e6;
  border: 3px solid #ccc;
`;
export const Button = styled.button`
  width: 6rem;
  height: 2rem;
  background-color: ${(props) => (props.isActive ? 'black' : 'white')};
  color: ${(props) => (props.isActive ? 'white' : 'black')};
`;
