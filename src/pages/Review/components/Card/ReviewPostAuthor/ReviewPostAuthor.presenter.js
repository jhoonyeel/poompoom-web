import { faCircleUser } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function ReviewPostAuthorUI({ nickName, internal = true, navigate, handleSub }) {
  return (
    <div>
      {internal ? (
        <>
          <FontAwesomeIcon icon={faCircleUser} onClick={() => navigate('/profile')} />
          <Link to="/profile">{nickName || '@닉네임'}</Link>
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
