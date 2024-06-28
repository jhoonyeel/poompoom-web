import * as S from './ProfileMenuBox.styles';

export default function ProfileMenuBoxUI({ handleOnClick, currentPath }) {
  return (
    <S.Wrapper>
      <S.Menutab>
        <S.Button isActive={currentPath === '/profile/bookmark'} onClick={handleOnClick('/profile/bookmark')}>
          북마크
        </S.Button>
        <S.Button isActive={currentPath === '/profile/like'} onClick={handleOnClick('/profile/like')}>
          좋아요
        </S.Button>
        <S.Button isActive={currentPath === '/profile/latest'} onClick={handleOnClick('/profile/latest')}>
          최근 본 무드뷰
        </S.Button>
        <S.Button isActive={currentPath === '/profile/wrote'} onClick={handleOnClick('/profile/wrote')}>
          내가 쓴 무드뷰
        </S.Button>
      </S.Menutab>
    </S.Wrapper>
  );
}
