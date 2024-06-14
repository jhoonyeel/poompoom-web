import styled from 'styled-components';

export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 1rem;
  justify-items: center;
  align-items: start;
  height: 600px;
  overflow: auto;
  padding: 1rem;

  &::-webkit-scrollbar {
    display: block;
  }
  &::-webkit-scrollbar-track,
  &::-webkit-scrollbar-button {
    display: none;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ffffff00;
  }
`;
export const Id = styled.div`
  font-size: 20px;
`;

export const Profile = styled.div`
  width: 53px;
  height: 52px;
  border-radius: 50%;
  background-color: #f0f0f0;
  border: 5px solid white;
  box-shadow: 3px 4px 10px rgb(0, 0, 0, 0.11);
  position: absolute;
  top: -26px;
  left: -26px;
`;

export const CommentBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: max-content;
  height: fit-content;
  border-radius: 40px;
  background-color: white;
  box-shadow: 7px 12px 27px 0px rgba(0, 0, 0, 0.11);
  padding: 15px 80px;
  margin: 1rem;
`;

export const CommentBody = styled.p`
  font-size: 20px;
  margin: 20px 0;
`;

export const CommentDate = styled.small`
  display: block;
  color: #888;
  margin-top: 1rem;
  font-size: 14px;
`;
