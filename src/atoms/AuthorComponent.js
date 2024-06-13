import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import { ReactComponent as FireCracker } from '../assets/FireCraker.svg';

export default function AuthorComponent({ isHovered, profilePhoto }) {
  return (
    <Wrapper>
      <AuthorCircleBox>
        <WhiteCircleIcon icon={faCircle} />
        <AuthorImgBox>
          <AuthorImg src={profilePhoto} alt="프로필 사진" />
        </AuthorImgBox>
      </AuthorCircleBox>
      <FireCrackerBox $isHovered={isHovered}>
        <FireCrackerIcon />
      </FireCrackerBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 80px;
  height: 80px;
  margin-left: 5px;
  margin-top: 5px;
`;
const AuthorCircleBox = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const WhiteCircleIcon = styled(FontAwesomeIcon)`
  color: black;
  font-size: 60px;
  position: absolute;
  z-index: 1;
`;
const AuthorImgBox = styled.div`
  width: 87%;
  height: 87%;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  z-index: 2;
`;
const AuthorImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; /* 이미지 비율을 유지하며 자를 때 사용 */
`;

const FireCrackerBox = styled.div`
  width: 80px;
  height: 40px;
  position: absolute;
  z-index: 3;
  display: flex;
  justify-content: flex-end;
  transform: ${({ $isHovered }) => ($isHovered ? 'translate(-15%, -110%) rotate(90deg)' : 'translateY(-48px)')};
  transition: transform 0.25s ease-in-out;
`;
const FireCrackerIcon = styled(FireCracker)`
  width: 50%;
  height: 100%;
  object-fit: cover;
`;
