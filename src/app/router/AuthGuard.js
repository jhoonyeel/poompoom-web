import Loading from '@shared/ui/Loading.js';
import { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';

// eslint-disable-next-line no-unused-vars
const AuthGuard = ({ element: Component, isAuthenticated, ...rest }) => {
  const [loading, setLoading] = useState(true);
  const [authStatus, setAuthStatus] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const isAuth = await isAuthenticated(); // 비동기 호출
      setAuthStatus(isAuth);
      setLoading(false); // 로딩 완료
    };
    checkAuth();
  }, [isAuthenticated]);

  if (loading) {
    // 로딩 중일 때 보여줄 UI
    return <Loading />;
  }

  // eslint-disable-next-line react/jsx-props-no-spreading
  return authStatus ? <Component {...rest} /> : <Navigate to="/login" />;
};

export default AuthGuard;
