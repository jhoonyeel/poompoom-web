import styled from 'styled-components';

export const Wrapper = styled.nav`
  width: 100%;
  border-top: 3px solid #d9d9d9;
  border-bottom: 3px solid #d9d9d9;
`;
export const Menutab = styled.ul`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Button = styled.li`
  border: none;
  border-top: ${(props) => (props.isActive ? '10px solid #0D3F39' : 'none')};
  color: ${(props) => (props.isActive ? '#0D3F39' : '#959595')};
  background-color: #ffffff;
  padding: 29px 24px;
  font-size: 32px;
  font-weight: bold;
  cursor: pointer;
`;
