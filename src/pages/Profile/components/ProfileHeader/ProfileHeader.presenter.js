import * as S from './ProfileHeader.styles';

const userProfile = {
  name: '사용자',
  id: '@123',
  hashtags: [
    { id: '1', tag: '#hashtag1' },
    { id: '2', tag: '#hashtag2' },
    { id: '3', tag: '#hashtag3' },
    { id: '4', tag: '#hashtag4' },
  ],
};
export default function ProfileHeaderUI({ handleOnClick }) {
  const profileImage = 'http://via.placeholder.com/105x105.png';
  return (
    <S.Container>
      <S.Image src={profileImage} />
      <S.InnerContainer>
        <S.InformContainer>
          <S.Name>{userProfile.name}</S.Name>
          <S.ID>{userProfile.id}</S.ID>
          <S.EditBtn onClick={handleOnClick('/profile/edit')}>내 정보 수정</S.EditBtn>
        </S.InformContainer>
        <S.HashTegContainer>
          {userProfile.hashtags.map((hashtag) => (
            <S.Hashtag key={hashtag.id}>{hashtag.tag}</S.Hashtag>
          ))}
        </S.HashTegContainer>
      </S.InnerContainer>
    </S.Container>
  );
}
