import styled from 'styled-components';
import ReviewPostHeader from '../../../Review/components/ReviewPostHeader/ReviewPostHeader';
import ProfileMenuBox from '../../pages/Profile/components/ProfileMenuBox/profileMenuBox';
import ReviewPostBox from '../../../Review/components/ReviewPostBox/ReviewPostBox';

function ProfileBody() {
  return (
    <Container>
      <ProfileHeader>
        <LogoBox>
          <span>로고</span> {/** 추후에 컴포넌트 사용 */}
        </LogoBox>
        <MenuBox>
          <ProfileMenuBox />
        </MenuBox>
      </ProfileHeader>
      <ReviewPostHeader />
      <ReviewPostBox />
    </Container>
  );
}

export default ProfileBody;

const Container = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const ProfileHeader = styled.div`
  background-color: #e6e6e6;
  border: 3px solid #ccc;
  display: flex;
  justify-content: space-between;
`;

const LogoBox = styled.div`
  width: 15%;
`;

const MenuBox = styled.div`
  width: 75%;
`;
