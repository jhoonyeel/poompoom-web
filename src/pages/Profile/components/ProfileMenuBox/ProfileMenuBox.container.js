/* 프로필 네비게이션 바 */
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

function ProfileMenuBox() {
  const navigate = useNavigate();

  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return (
    <Container>
      <Button onClick={handleOnClick('/profile/bookmark')}>북마크</Button>
      <Button onClick={handleOnClick('/profile/like')}>좋아요</Button>
      <Button onClick={handleOnClick('/profile/recent')}>최근 본 게시물</Button>
      <Button onClick={handleOnClick('/profile')}>내가 쓴 게시물</Button>
    </Container>
  );
}

export default ProfileMenuBox;

const Container = styled.div`
  width: inherit;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const Button = styled.button`
  width: 6rem;
  height: 2rem;
`;
