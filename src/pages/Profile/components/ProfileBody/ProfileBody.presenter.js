import ProfileMenuBox from '../ProfileMenuBox/ProfileMenuBox.container';
import * as S from './ProfileBody.styles';

export default function ProfileBodyUI() {
  return (
    <S.Container>
      <S.ProfileNev>
        <S.LogoBox>
          <span>로고</span> {/** 추후에 컴포넌트 사용 */}
        </S.LogoBox>
        <S.MenuBox>
          <ProfileMenuBox />
        </S.MenuBox>
      </S.ProfileNev>
    </S.Container>
  );
}
