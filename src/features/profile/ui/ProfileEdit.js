import { logout } from '@shared/api/auth.js';
import styled from 'styled-components';

const ProfileEdit = () => {
  const handleLogout = () => {
    logout();

    window.location.href = '/';
  };

  return (
    <Container>
      <Wrapper>
        <Title>설정 탭</Title>
        <List>로그인 정보 수정</List>
        <List onClick={handleLogout}>로그아웃</List>
      </Wrapper>
    </Container>
  );
};

export default ProfileEdit;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 24px auto;
  width: 80%;
  min-width: 1028px;
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const Title = styled.div`
  font-size: 22px;
  font-weight: bold;
  text-align: start;
`;
export const List = styled.div`
  width: 100%;
  color: #8c8c8c;
  margin: 2rem 1rem;
  text-align: start;
  font-size: 18px;
  font-weight: bold;
`;

export const Router = styled.div`
  &:hover {
    background-color: white;
    color: black;
  }
`;
