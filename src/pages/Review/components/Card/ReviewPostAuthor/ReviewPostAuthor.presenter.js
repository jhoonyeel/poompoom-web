import { Link } from 'react-router-dom';

function ReviewPostAuthorUI({ nickName, internal = true, navigate, handleSub }) {
  return (
    <div>
      {internal ? (
        <>
          <span>
            <button type="button" onClick={() => navigate('/profile')}>
              프로필 사진
            </button>
          </span>
          <Link to="/profile">{nickName || '닉네임'}</Link>
          <span>
            <button type="button" onClick={handleSub}>
              구독{/** 추후에 컴포넌트 사용 */}
            </button>
          </span>
        </>
      ) : (
        <div>from Instagram</div>
      )}
    </div>
  );
}

export default ReviewPostAuthorUI;
