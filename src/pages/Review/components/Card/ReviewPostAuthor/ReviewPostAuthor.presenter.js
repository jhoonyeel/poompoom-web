import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthorComponent from '../../../../../components/AuthorComponent';

export default function ReviewPostAuthorUI({ nickName, isHovered, handleOnClick, isFollow, handleFollow }) {
  return (
    <div>
      <Wrapper>
        <AuthorComponent isHovered={isHovered} onClick={handleOnClick('/profile')} />
        <Nickname to="/profile">{nickName || '@닉네임'}</Nickname>
        {isFollow ? (
          <FollowBtn type="button" onClick={handleFollow}>
            팔로우
          </FollowBtn>
        ) : (
          <FollowedBtn type="button" onClick={handleFollow}>
            팔로잉
          </FollowedBtn>
        )}
      </Wrapper>
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 53px;
`;
const Nickname = styled(Link)`
  font-size: 28px;
`;
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
`;
