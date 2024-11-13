/* eslint-disable react/no-array-index-key */

import styled from 'styled-components';
import ProfilePhoto from '../../../../assets/ProfilePhoto.svg';
import * as S from './ProfileHeader.styles';

export default function ProfileHeaderUI({ profile, navigatePath }) {
  return (
    <S.Container>
      <ImageBox>
        <S.Image src={profile.ProfileImagePath || ProfilePhoto} alt="Profile" />
      </ImageBox>
      <S.InnerContainer>
        <S.InformContainer>
          <Name>{`${profile.nickName}`}</Name>
          <S.Name>{`@${profile.nickName}`}</S.Name>
          <S.EditBtn onClick={navigatePath('/profile/edit')}>내 정보 수정</S.EditBtn>
        </S.InformContainer>
        <S.HashTegContainer>
          {profile.profileTagList &&
            profile.profileTagList.map((tag, index) => <S.Hashtag key={index}>{`#${tag}`}</S.Hashtag>)}
          <Span>#20대 초반</Span>
          <Span>#여행</Span>
          <Span>#예술</Span>
          <Span>#음악</Span>
        </S.HashTegContainer>
      </S.InnerContainer>
    </S.Container>
  );
}

const ImageBox = styled.div`
  width: 20%;
  margin-right: 1rem;
  padding: 3rem;
`;
const Name = styled.div`
  font-family: 'YEONGJUPunggiGinsengTTF';
  font-weight: bold;
  font-size: 48px;
  color: #231f20;
`;
const Span = styled.span`
  font-size: 32px;
  background-color: #000000;
  color: #ffffff;
  padding: 0.3rem 0.8rem;
`;
