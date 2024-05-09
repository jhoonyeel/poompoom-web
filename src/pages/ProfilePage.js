import styled from 'styled-components';
import ReviewPostHeader from '../components/ReviewPostHeader/ReviewPostHeader';
import ReviewPostBox from '../components/ReviewPostBox/ReviewPostBox';

function ProfilePage() {
  return (
    <Container>
      <ProfileHeader>
        <LogoBox>
          <span>로고</span> {/** 추후에 컴포넌트 사용 */}
        </LogoBox>

        <MenuBox>
          <span>메뉴바</span> {/** 추후에 컴포넌트 사용 */}
        </MenuBox>
      </ProfileHeader>
      <ReviewPostHeader />
      <ReviewPostBox />
    </Container>
  );
}

export default ProfilePage;

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
  width: 15%;
`;
