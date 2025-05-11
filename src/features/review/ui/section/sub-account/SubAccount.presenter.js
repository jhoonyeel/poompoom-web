import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function SubAccountUI({ loaderRef, subAccounts, getNickname, navigatePath }) {
  return (
    <Wrapper>
      <AccountHeader>이런 분들은 어떠세요??</AccountHeader>
      <SubAccountList>
        {subAccounts.map((account) => (
          <SubAccountItem key={account.memberId}>
            <AuthorInfo>
              <AuthorImgBox onClick={navigatePath(`/profile`)}>
                <AuthorImg src={account.profileImagePath} alt="프로필 이미지" />
              </AuthorImgBox>
              <Nickname to="/profile">{`@${getNickname(account.nickName)}`}</Nickname>
              {/* <FollowButton memberId={account.memberId} /> */}
            </AuthorInfo>
            <HashtagList>
              {account.profileTags &&
                account.profileTags.map((profileTag) => (
                  <HashtagItem key={profileTag.id}>{`#${profileTag.name}`}</HashtagItem>
                ))}
            </HashtagList>
          </SubAccountItem>
        ))}
        <div ref={loaderRef} style={{ height: '20px' }} />
      </SubAccountList>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 3;
  min-width: 340px;
  overflow-y: scroll;
`;
const AccountHeader = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 12px;
`;
const SubAccountList = styled.div`
  width: 100%;
  height: 100%;
`;
const SubAccountItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:nth-child(n + 2) {
    margin-top: 20px;
  }
`;
const AuthorInfo = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const AuthorImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd;
  overflow: hidden;
  cursor: pointer;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;

const Nickname = styled(Link)`
  color: #000;
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 1.4;
  text-decoration: none;
`;

const HashtagList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px 14px;
  flex-wrap: wrap;
  margin-top: 10px;
  width: 100%;
  height: 58px;
  overflow: hidden;
`;

const HashtagItem = styled.li`
  padding: 6px 8px;
  color: #fff;
  font-size: 12px;
  border-radius: 20px;
  background-color: rgba(0, 0, 0, 0.6);
`;
