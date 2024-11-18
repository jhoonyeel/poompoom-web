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
  padding: 4px 6px;
  color: #024e46;
  font-size: 12px;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid #024e46;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #024e46;
  }
`;
const FollowedBtn = styled.button`
  padding: 4px 6px;
  color: #b0b0b0;
  font-size: 12px;
  background-color: #fff;
  border-radius: 20px;
  border: 3px solid #b0b0b0;
  cursor: pointer;

  &:hover {
    color: #fff;
    background-color: #b0b0b0;
  }
`;
