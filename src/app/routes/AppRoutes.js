import { Route, Routes } from 'react-router-dom';
import ReviewSearch from '../../features/search/ui/ReviewSearch';
import SocialJoinRedirect from '../../features/social-join/ui/SocialJoinRedirect';
import SocialLoginRedirect from '../../features/social-login/ui/SocialLoginRedirect';
import { HeaderOnlyLayout } from '../../layouts/HeaderOnlyLayout';
import { MainLayout } from '../../layouts/MainLayout';
import { NoLayout } from '../../layouts/NoLayout';
import {
  FindPasswordRoute,
  FindUsernameRoute,
  HomeRoute,
  JoinRoute,
  LoginRoute,
  ProfileEditRoute,
  ProfileRoute,
  ProfileTagRoute,
  ReviewCreateRoute,
  ReviewDetailRoute,
  ReviewEditRoute,
  ReviewListRoute,
  SocialJoinRoute,
  WelcomeRoute,
} from '../../pages';
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
        <Route path="/join" element={<JoinRoute />} />
        <Route path="/signup/profile-tag" element={<ProfileTagRoute />} />
        <Route path="/social-join" element={<SocialJoinRoute />} />
        <Route path="/social-join/redirect" element={<SocialJoinRedirect />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/social-login/redirect" element={<SocialLoginRedirect />} />
        <Route path="/welcome" element={<WelcomeRoute />} />
        <Route path="/find/username" element={<FindUsernameRoute />} />
        <Route path="/find/password" element={<FindPasswordRoute />} />
      </Route>

      {/* MainLayout: Header + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeRoute />} />
        <Route
          path="/review/create"
          element={<ProtectedRoute element={ReviewCreateRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/:reviewId"
          element={<ProtectedRoute element={ReviewDetailRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/edit/:reviewId"
          element={<ProtectedRoute element={ReviewEditRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/profile/*"
          element={<ProtectedRoute element={ProfileRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/profile/edit"
          element={<ProtectedRoute element={ProfileEditRoute} isAuthenticated={isAuthenticated} />}
        />
      </Route>

      {/* HeaderOnlyLayout: Header only */}
      <Route element={<HeaderOnlyLayout />}>
        <Route
          path="/review"
          element={<ProtectedRoute element={ReviewListRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/search"
          element={<ProtectedRoute element={ReviewSearch} isAuthenticated={isAuthenticated} />}
        />
      </Route>
    </Routes>
  );
}
