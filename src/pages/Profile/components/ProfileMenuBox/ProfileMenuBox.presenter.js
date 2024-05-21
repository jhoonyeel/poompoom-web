import * as S from './ProfileMenuBox.styles';

export default function ProfileMenuBoxUI({ handleOnClick }) {
  return (
    <S.Container>
      <S.Button onClick={handleOnClick('/profile/bookmark')}>북마크</S.Button>
      <S.Button onClick={handleOnClick('/profile/like')}>좋아요</S.Button>
      <S.Button onClick={handleOnClick('/profile/recent')}>최근 본 게시물</S.Button>
      <S.Button onClick={handleOnClick('/profile')}>내가 쓴 게시물</S.Button>
    </S.Container>
  );
}
