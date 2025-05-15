import { useNavigatePath } from '@shared/hooks/useNavigatePath';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthorProfile from './AuthorProfile';

const AuthorMeta = ({ profilePhoto, nickname, reviewType, isContentHovered }) => {
  const navigatePath = useNavigatePath();

  return (
    <Wrapper>
      <AuthorProfile isContentHovered={isContentHovered} profilePhoto={profilePhoto} navigatePath={navigatePath} />
      <AuthorInfo>
        <Nickname to="/profile">{`@${nickname}`}</Nickname>
        <AdditionalInfo>
          <ReviewType>{reviewType === 'GIVEN' ? '준 선물' : '받은 선물'}</ReviewType>
        </AdditionalInfo>
      </AuthorInfo>
    </Wrapper>
  );
};

export default AuthorMeta;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 1;
  width: 220px;
`;

const AuthorInfo = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 4px;
  width: 150px;
`;
const Nickname = styled(Link)`
  text-align: left;
  color: #000;
  font-family: 'Oleo Script Swash Caps';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-decoration: none;
  font-family: 'YEONGJUPunggiGinsengTTF';
`;

const AdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const ReviewType = styled.strong`
  color: #0d3f39;
  font-size: 14px;
`;
