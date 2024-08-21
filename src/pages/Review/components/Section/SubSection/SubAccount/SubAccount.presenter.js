import { Link } from 'react-router-dom';
import styled from 'styled-components';
import FollowBtnComponent from '../../../../../../atoms/FollowBtnComponent';
import ReviewPostHashtags from '../../../Card/ReviewPostHashtags/ReviewPostHashtags.container';

export default function SubAccountUI({ subAccounts, isFollow, handleFollow, handleOnClick }) {
  const getNickname = (nickname) => {
    const atIndex = nickname.indexOf('@');
    return atIndex !== -1 ? nickname.slice(0, atIndex) : nickname;
  };

  return (
    <Wrapper>
      <AccountHeader>이런 분들은 어떠세요??</AccountHeader>
      <SubList>
        {subAccounts.map((account) => (
          <SubItem key={account.id}>
            <AuthorBox>
              <AuthorCircleBox onClick={handleOnClick(`/profile`)}>
                <AuthorImg src={account.profilePhotoPath} alt="프로필 사진" />
              </AuthorCircleBox>
              <Nickname to="/profile">{`@${getNickname(account.nickname)}` || '@닉네임'}</Nickname>
              <FollowBtnComponent isFollow={isFollow} handleFollow={handleFollow} />
            </AuthorBox>
            <ReviewPostHashtags hashTags={account.hashtagList} />
          </SubItem>
        ))}
      </SubList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 28%;
  height: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
const AccountHeader = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 1rem;
`;
const SubList = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  padding: 0 1%;
`;
const SubItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const AuthorBox = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthorCircleBox = styled.div`
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  border: 10px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const Nickname = styled(Link)`
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
