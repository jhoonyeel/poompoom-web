import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 5rem;
`;

export const InformContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1;
  font-size: 20px;
  margin-bottom: 3rem;
`;

export const HashTegContainer = styled.div`
  display: flex;
  gap: 50px;
  flex: 1;
  font-size: 15px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 42px;
  color: #959595;
`;

export const Hashtag = styled.div`
  background-color: black;
  padding: 0.5rem;
  color: white;
  border: 1px solid black;
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const EditBtn = styled.button`
  border: none;
  border-radius: 15px;
  background-color: #d9d9d9;
  color: #000000;
  font-size: 32px;
  padding: 0.5rem 1.5rem;

  &:hover {
    background-color: black;
    color: white;
  }
`;
