import { Link } from 'react-router-dom';
import styled from 'styled-components';
import AuthorComponent from '../../../../../components/AuthorComponent';

export default function ReviewPostAuthorUI({ nickName, internal = true, navigate, handleSub, isHovered }) {
  return (
    <div>
      {internal ? (
        <Wrapper>
          <AuthorComponent isHovered={isHovered} onClick={() => navigate('/profile')} />
          <Nickname to="/profile">{nickName || '@닉네임'}</Nickname>
          <span>
            <button type="button" onClick={handleSub}>
              구독{/** 추후에 컴포넌트 사용 */}
            </button>
          </span>
        </Wrapper>
      ) : (
        <div>from Instagram</div>
      )}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 53px;
`;
const Nickname = styled(Link)`
  font-size: 28px;
`;
