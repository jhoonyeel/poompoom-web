/* eslint-disable react/no-array-index-key */

import * as S from './ProfileHeader.styles';

export default function ProfileHeaderUI({ handleOnClick, Profile, profileImage }) {
  return (
    <S.Container>
      <S.Image src={Profile.ProfileImagePath || profileImage} />
      <S.InnerContainer>
        <S.InformContainer>
          <S.Name>{Profile.nickName}</S.Name>
          <S.ID>ID: {Profile.memberId}</S.ID>
          <S.EditBtn onClick={handleOnClick('/profile/edit')}>내 정보 수정</S.EditBtn>
        </S.InformContainer>
        <S.HashTegContainer>
          {Profile.profileTagList &&
            Profile.profileTagList.map((tag, index) => <S.Hashtag key={index}>{tag}</S.Hashtag>)}
        </S.HashTegContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
