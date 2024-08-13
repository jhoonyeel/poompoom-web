import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthorComponent from '../../../../../atoms/AuthorComponent';
import FollowBtnComponent from '../../../../../atoms/FollowBtnComponent';

export default function ReviewPostAuthorUI({
  profilePhoto,
  nickname,
  reviewType,
  isHovered,
  handleOnClick,
  isFollow,
  handleFollow,
}) {
  return (
    <Wrapper>
      <AuthorComponent isHovered={isHovered} onClick={handleOnClick('/profile')} profilePhoto={profilePhoto} />
      <Info>
        <Nickname to="/profile">{`@${nickname}` || '@닉네임'}</Nickname>
        <AdditionalInfo>
          <ReviewType>{reviewType === 'GIVEN' ? '준 선물' : '받은 선물'}</ReviewType>
          {nickname === 'test' && <FollowBtnComponent isFollow={isFollow} handleFollow={handleFollow} />}
        </AdditionalInfo>
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  width: 380px;
  margin: 0 auto;
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
  flex: 1;
`;
const Nickname = styled(Link)`
  text-align: left;
  text-decoration: none;
  font-family: 'Oleo Script Swash Caps', system-ui;
  font-style: normal;
  font-weight: 400;
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  &:visited {
    color: #000000;
  }
`;
const AdditionalInfo = styled.div`
  display: flex;
`;
const ReviewType = styled.strong`
  flex: 1;
  text-align: left;
  color: #0d3f39;
  display: flex;
  align-items: center;
`;
