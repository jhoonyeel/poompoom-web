import * as S from './ProfileTabMenu.styles';

export default function ProfileTabMenuUI({ currentPath, navigatePath }) {
  return (
    <S.Wrapper>
      <S.Menutab>
        <S.Button isActive={currentPath === '/profile/bookmark'} onClick={navigatePath('/profile/bookmark')}>
          북마크
        </S.Button>
        <S.Button isActive={currentPath === '/profile/like'} onClick={navigatePath('/profile/like')}>
          좋아요
        </S.Button>
        <S.Button isActive={currentPath === '/profile/latest'} onClick={navigatePath('/profile/latest')}>
          최근 본 무드뷰
        </S.Button>
        <S.Button isActive={currentPath === '/profile/wrote'} onClick={navigatePath('/profile/wrote')}>
          내가 쓴 무드뷰
        </S.Button>
      </S.Menutab>
    </S.Wrapper>
  );
}
