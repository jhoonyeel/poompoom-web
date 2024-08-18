import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 200px;
`;

export const TextWrapper = styled.div`
  margin: 80px 0;
`;

export const Text = styled.div`
  padding: 5px;
  font-size: 28px;
`;
export const SvgContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

export const SvgText = styled.div`
  margin-bottom: 50px;
  font-size: 28px;
`;

export const SvgWrapper = styled.div``;
export const Button = styled.button`
  font-size: 20px;
  height: 50px;
  padding: 10px;
  background-color: #3a3a3a;
  color: white;
  border: none;
  cursor: pointer;
`;
