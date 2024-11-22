import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  margin-top: 10px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  margin: 0 5rem;
`;

export const InformContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex: 1;
  font-size: 20px;
  margin-bottom: 3rem;
  gap: 50px;
`;

export const HashTegContainer = styled.div`
  display: flex;
  gap: 50px;
  flex: 1;
  font-size: 15px;
`;

export const Name = styled.div`
  font-weight: bold;
  font-size: 42px;
  color: #0e5649;
`;

export const Hashtag = styled.div`
  background-color: black;
  padding: 20px;
  color: white;
  border: 1px solid white;
  border-radius: 10px;
  transition: all 0.2s ease-in-out;
  font-family: 'seolleimcool-SemiBold';
  &:hover {
    background-color: white;
    color: black;
  }
`;

export const EditBtn = styled.button`
  border-radius: 15px;
  background-color: #0e5649;
  color: white;
  border: none;
  font-size: 32px;
  padding: 0.5rem 1.5rem;
  margin-left: 300px;

  &:hover {
    background-color: white;
    color: #0e5649;
  }
`;
