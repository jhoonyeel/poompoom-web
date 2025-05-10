import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
  width: 80%;
  min-width: 1028px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: start;
`;
export const List = styled.div`
  width: 100%;
  color: #8c8c8c;
  margin: 2rem 1rem;
  text-align: start;
  font-size: 18px;
  font-weight: bold;
`;
export const FollowerList = styled.div`
  margin-top: 8px;
  width: 100%;
  height: 200px;
  background-color: #f6f6f6;
`;

export const Router = styled.div`
  &:hover {
    background-color: white;
    color: black;
  }
`;
