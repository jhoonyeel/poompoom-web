import { Route, Routes } from 'react-router-dom';
import { HeaderOnlyLayout } from '../layouts/HeaderOnlyLayout';
import { MainLayout } from '../layouts/MainLayout';
import { NoLayout } from '../layouts/NoLayout';
import FindID from '../pages/Finds/FindID';
import FindPW from '../pages/Finds/FindPW/FindPW';
import SignupPage from '../pages/Join/Signup/SignupPage';
import SignupTagPage from '../pages/Join/SignupTag/SignupTag.container';
import LoginPage from '../pages/Login/LoginPage';
import LoginSocial from '../pages/OAuth/LoginSocial';
import SocialSignUp from '../pages/OAuth/SignUp/SignUp.container';
import SignUpSocial from '../pages/OAuth/SignUpSocial';
import {
  HomePage,
  ProfileEditPage,
  ProfilePage,
  QueryPage,
  ReviewCreatePage,
  ReviewDetailPage,
  ReviewEditPage,
  ReviewPage,
  Welcome,
} from '../pages/index';
import ProtectedRoute from './ProtectedRoute';

const isAuthenticated = async () => {
  // AT 만료여부 확인해서 새로운 AT인지 확인해야 함.
  return true || localStorage.getItem('accessToken') !== null;
};

export function AppRoutes() {
  return (
    <Routes>
      {/* NoLayout: 인증 페이지 */}
      <Route element={<NoLayout />}>
        <Route path="/find/id" element={<FindID />} />
        <Route path="/find/pw" element={<FindPW />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/signup/tag" element={<SignupTagPage />} />
        <Route path="/signup/social" element={<SignUpSocial />} />
        <Route path="/Login/Social" element={<LoginSocial />} />
        <Route path="/signUp/social/form" element={<SocialSignUp />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/welcome" element={<Welcome />} />
      </Route>

      {/* MainLayout: Header + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/review/create"
          element={<ProtectedRoute element={ReviewCreatePage} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/:reviewId"
          element={<ProtectedRoute element={ReviewDetailPage} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/update/:reviewId"
          element={<ProtectedRoute element={ReviewEditPage} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/profile/*" element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated} />} />
        <Route
          path="/profile/edit"
          element={<ProtectedRoute element={ProfileEditPage} isAuthenticated={isAuthenticated} />}
        />
      </Route>

      {/* HeaderOnlyLayout: Header only */}
      <Route element={<HeaderOnlyLayout />}>
        <Route path="/review" element={<ProtectedRoute element={ReviewPage} isAuthenticated={isAuthenticated} />} />
        <Route
          path="/review/query-result"
          element={<ProtectedRoute element={QueryPage} isAuthenticated={isAuthenticated} />}
        />
      </Route>
    </Routes>
  );
}
