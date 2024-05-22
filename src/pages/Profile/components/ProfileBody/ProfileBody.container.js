import styled from 'styled-components';
import ProfileMenuBox from '../ProfileMenuBox/ProfileMenuBox.container';
import ReviewPostCard from '../../../Review/components/Card/ReviewPostCard/ReviewPostCard.container';

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
      <ReviewPostCard />
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
