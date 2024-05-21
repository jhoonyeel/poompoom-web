import * as S from './ProfileBody.styles';
import ReviewPostFilter from '../../../Review/components/ReviewContent/ReviewPostFilter/ReviewPostFilter.container';
import ProfileMenuBox from '../ProfileMenuBox/ProfileMenuBox.container';
import ReviewPostGallery from '../../../Review/components/ReviewContent/ReviewPostGallery/ReviewPostGallery.container';

export default function ProfileBodyUI() {
  return (
    <S.Container>
      <S.ProfileHeader>
        <S.LogoBox>
          <span>로고</span> {/** 추후에 컴포넌트 사용 */}
        </S.LogoBox>
        <S.MenuBox>
          <ProfileMenuBox />
        </S.MenuBox>
      </S.ProfileHeader>
      <ReviewPostFilter />
      <ReviewPostGallery />
    </S.Container>
  );
}
