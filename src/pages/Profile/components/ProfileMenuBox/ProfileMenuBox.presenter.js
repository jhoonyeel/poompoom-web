import * as S from './ProfileMenuBox.styles';

export default function ProfileMenuBoxUI({ handleOnClick, currentPath }) {
  return (
    <S.Container>
      <S.Menutab>
        <S.Button onClick={handleOnClick('/profile/bookmark')} isActive={currentPath === '/profile/bookmark'}>
          북마크
        </S.Button>
        <S.Button onClick={handleOnClick('/profile/like')} isActive={currentPath === '/profile/like'}>
          좋아요
        </S.Button>
        <S.Button onClick={handleOnClick('/profile/recent')} isActive={currentPath === '/profile/recent'}>
          최근 본 무드뷰
        </S.Button>
        <S.Button onClick={handleOnClick('/profile')} isActive={currentPath === '/profile'}>
          내가 쓴 무드뷰
        </S.Button>
      </S.Menutab>
    </S.Container>
  );
}
