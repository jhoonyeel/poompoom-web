import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 80%;
  margin: auto;
  padding: 1rem 0;
`;

export const InnerContainer = styled.div`
  padding: 0;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 60%;
`;

export const InformContainer = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;

export const HashTegContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-around;
  font-size: 15px;
  margin: 0.5rem;
`;

export const Image = styled.img`
  margin-right: 1rem;
  object-fit: cover;
`;

export const Name = styled.div`
  font-weight: bold;
`;
export const ID = styled.div`
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
  width: 6rem;
  height: 2rem;
  border: none;
  border-radius: 6px;

  &:hover {
    background-color: black;
    color: white;
  }
`;
