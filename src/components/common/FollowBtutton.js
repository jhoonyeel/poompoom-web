import styled from 'styled-components';

export default function FollowButton({ isFollow, handleFollow }) {
  return (
    <>
      {isFollow ? (
        <FollowedBtn type="button" onClick={handleFollow}>
          팔로잉
        </FollowedBtn>
      ) : (
        <FollowBtn type="button" onClick={handleFollow}>
          팔로우
        </FollowBtn>
      )}
    </>
  );
}

const FollowBtn = styled.button`
  color: #024e46;
  background-color: white;
  border: 3px solid #024e46;
  &:hover {
    color: white;
    background-color: #024e46;
  }
  border-radius: 20px;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
`;
const FollowedBtn = styled.button`
  color: #b0b0b0;
  background-color: white;
  border: 3px solid #b0b0b0;
  &:hover {
    color: white;
    background-color: #b0b0b0;
  }
  border-radius: 20px;
  padding: 5px;
  font-size: 16px;
  cursor: pointer;
`;
