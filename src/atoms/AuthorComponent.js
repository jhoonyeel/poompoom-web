import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as FireCracker } from '../assets/FireCraker.svg';

export default function AuthorComponent({ isHovered, profilePhoto }) {
  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };
  return (
    <Wrapper onClick={handleOnClick(`/profile`)}>
      <AuthorCircleBox>
        <AuthorImg src={profilePhoto} alt="프로필 사진" />
      </AuthorCircleBox>
      <FireCrackerBox $isHovered={isHovered}>
        <FireCrackerIcon />
      </FireCrackerBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  cursor: pointer;
`;
const AuthorCircleBox = styled.div`
  position: relative;
  z-index: 1;
  width: 100px;
  height: 100px;
  border: 10px solid #ddd;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const FireCrackerBox = styled.div`
  position: relative;
  width: 130px;
  height: 80px;
  z-index: 2;
  display: flex;
  justify-content: flex-end;
  transform: ${({ $isHovered }) =>
    $isHovered ? 'translate(-18px, -80px) rotate(90deg)' : 'translateY(-85px)'}; // translate(-14%, -100%)와 동일함.
  transition: transform 0.25s ease-in-out;
`;
const FireCrackerIcon = styled(FireCracker)`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
