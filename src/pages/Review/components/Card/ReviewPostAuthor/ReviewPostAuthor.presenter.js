import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthorComponent from '../../../../../atoms/AuthorComponent';

export default function ReviewPostAuthorUI({
  profilePhoto,
  nickname,
  isHovered,
  handleOnClick,
  isFollow,
  handleFollow,
}) {
  return (
    <Wrapper>
      <Content>
        <AuthorComponent isHovered={isHovered} onClick={handleOnClick('/profile')} profilePhoto={profilePhoto} />
        <Nickname to="/profile">{`@${nickname}` || '@닉네임'}</Nickname>
        {isFollow ? (
          <FollowedBtn type="button" onClick={handleFollow}>
            팔로잉
          </FollowedBtn>
        ) : (
          <FollowBtn type="button" onClick={handleFollow}>
            팔로우
          </FollowBtn>
        )}
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 380px;
  margin: 0 auto;
`;
const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nickname = styled(Link)`
  text-decoration: none;
  font-size: 28px;
  color: black;
  &:visited {
    color: black;
  }
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
