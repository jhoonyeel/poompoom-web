import styled from 'styled-components';

export const Container = styled.div`
  margin: 3rem;
  font-size: 22px;
  font-weight: bold;
  text-align: start;
`;
export const Title = styled.div``;
export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const List = styled.div`
  width: 100%;
  color: #8c8c8c;
  padding: 2rem 1rem;
`;
export const FollowerList = styled.div`
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
