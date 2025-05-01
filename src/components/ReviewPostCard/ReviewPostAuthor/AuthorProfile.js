import styled from 'styled-components';
import { ReactComponent as FireCracker } from '../../../assets/FireCraker.svg';

export default function AuthorProfile({ isContentHovered, profilePhoto, navigatePath }) {
  return (
    <Wrapper onClick={navigatePath(`/profile`)}>
      <AuthorImgBox>
        <AuthorImg src={profilePhoto} alt="프로필 이미지" />
      </AuthorImgBox>
      <FireCrackerIcon $isContentHovered={isContentHovered} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
`;
const AuthorImgBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: 5px solid #ddd;
  overflow: hidden;
  cursor: pointer;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  user-select: none;
`;
const FireCrackerIcon = styled(FireCracker)`
  position: absolute;
  z-index: 2;
  left: 30px;
  top: 50%;
  width: 32px;
  height: 100%;
  transform: ${({ $isContentHovered }) =>
    $isContentHovered ? 'translate(-23px, 0px) rotate(90deg)' : 'translateY(-50%)'};
  transition: transform 0.3s ease-in-out;
`;
