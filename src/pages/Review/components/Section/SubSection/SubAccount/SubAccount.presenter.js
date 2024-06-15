import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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
            <AccountItem>
              <AuthorBox>
                <AuthorContent>
                  <AuthorCircleContent onClick={handleOnClick('/profile')}>
                    <AuthorCircleBox>
                      <WhiteCircleIcon icon={faCircle} />
                      <AuthorImgBox>
                        <AuthorImg src={account.profilePhotoPath} alt="프로필 사진" />
                      </AuthorImgBox>
                    </AuthorCircleBox>
                  </AuthorCircleContent>
                  <Nickname to="/profile">{`@${getNickname(account.nickname)}` || '@닉네임'}</Nickname>
                  {isFollow ? (
                    <FollowedBtn type="button" onClick={handleFollow}>
                      팔로잉
                    </FollowedBtn>
                  ) : (
                    <FollowBtn type="button" onClick={handleFollow}>
                      팔로우
                    </FollowBtn>
                  )}
                </AuthorContent>
              </AuthorBox>
              <ReviewPostHashtags hashTags={account.hashtagList} />
            </AccountItem>
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
  gap: 50px;
`;
const AccountItem = styled.div`
  width: 100%;
`;
const AuthorBox = styled.div`
  width: 100%;
  margin: 0 auto;
`;
const AuthorContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const AuthorCircleContent = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 5px;
  margin-top: 5px;
`;
const AuthorCircleBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WhiteCircleIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 60px;
  position: absolute;
  z-index: 1;
`;
const AuthorImgBox = styled.div`
  width: 87%;
  height: 87%;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  z-index: 2;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
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
