import * as S from './ProfileEdit.styles';

export default function ProfileEditUI({ handleOnClick }) {
  return (
    <S.Container>
      <S.Title>설정 탭</S.Title>
      <S.ListContainer>
        <S.List>내 포인트</S.List>
        <S.List>
          구독 리스트
          <S.FollowerList />
        </S.List>
        <S.List>
          <S.Router onClick={handleOnClick('/profile/bookmark')}>북마크</S.Router>
        </S.List>
        <S.List>
          <S.Router onClick={handleOnClick('/profile/like')}>좋아요</S.Router>
        </S.List>
        <S.List>
          <S.Router onClick={handleOnClick('/profile/recent')}>최근 본 게시물</S.Router>
        </S.List>
        <S.List>로그인 정보 수정</S.List>
        <S.List>로그아웃</S.List>
      </S.ListContainer>
    </S.Container>
  );
}
