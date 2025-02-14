/* eslint-disable react/no-array-index-key */
import styled from 'styled-components';
import profileDummyPhoto from '../../../../assets/ProfilePhoto.svg';
import * as S from './ProfileHeader.styles';

export default function ProfileHeaderUI({ profile, navigatePath }) {
  console.log(profile);
  return (
    <S.Container>
      <ProfileImgWrapper>
        <UserProfile src={profile.profileImagePath || profileDummyPhoto} alt="프로필 이미지" />
      </ProfileImgWrapper>
      <S.InnerContainer>
        <S.InformContainer>
          <Name>{`${profile.nickName}`}</Name>
          <Name style={{ color: '#567c75' }}>{`@${profile.username}`}</Name>
          <S.EditBtn onClick={navigatePath('/profile/edit')}>내 정보 수정</S.EditBtn>
        </S.InformContainer>
        <S.HashTegContainer>
          {profile.profileTagList &&
            profile.profileTagList.map((tag, index) => <S.Hashtag key={index}>{`#${tag}`}</S.Hashtag>)}
        </S.HashTegContainer>
      </S.InnerContainer>
    </S.Container>
  );
}

const UserProfile = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const ProfileImgWrapper = styled.div`
  width: 200px;
  height: 200px;
  border: 1px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const Name = styled.div`
  font-family: 'YEONGJUPunggiGinsengTTF';
  font-weight: bold;
  font-size: 48px;
  color: #231f20;
`;
