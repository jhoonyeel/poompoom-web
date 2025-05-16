import ReviewSearch from '@features/review-search/ui/ReviewSearch.js';
import SocialJoinCallback from '@features/social-join/ui/SocialJoinCallback.js';
import SocialLoginCallback from '@features/social-login/ui/SocialLoginCallback.js';
import HeaderOnlyLayout from '@layouts/HeaderOnlyLayout.js';
import MainLayout from '@layouts/MainLayout.js';
import NoLayout from '@layouts/NoLayout.js';
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
} from '@pages';
import { Route, Routes } from 'react-router-dom';
import AuthGuard from './AuthGuard.js';

const isAuthenticated = async () => {
  // AT 만료여부 확인해서 새로운 AT인지 확인해야 함.
  return true || localStorage.getItem('accessToken') !== null;
};

const AppRouter = () => {
  return (
    <Routes>
      {/* NoLayout: 인증 페이지 */}
      <Route element={<NoLayout />}>
        <Route path="/join" element={<JoinRoute />} />
        <Route path="/signup/profile-tag" element={<ProfileTagRoute />} />
        <Route path="/social-join" element={<SocialJoinRoute />} />
        <Route path="/social-join/redirect" element={<SocialJoinCallback />} />
        <Route path="/login" element={<LoginRoute />} />
        <Route path="/social-login/redirect" element={<SocialLoginCallback />} />
        <Route path="/welcome" element={<WelcomeRoute />} />
        <Route path="/find/username" element={<FindUsernameRoute />} />
        <Route path="/find/password" element={<FindPasswordRoute />} />
      </Route>

      {/* MainLayout: Header + Footer */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<HomeRoute />} />
        <Route
          path="/review/create"
          element={<AuthGuard element={ReviewCreateRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/:reviewId"
          element={<AuthGuard element={ReviewDetailRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route
          path="/review/edit/:reviewId"
          element={<AuthGuard element={ReviewEditRoute} isAuthenticated={isAuthenticated} />}
        />
        <Route path="/profile/*" element={<AuthGuard element={ProfileRoute} isAuthenticated={isAuthenticated} />} />
        <Route
          path="/profile/edit"
          element={<AuthGuard element={ProfileEditRoute} isAuthenticated={isAuthenticated} />}
        />
      </Route>

      {/* HeaderOnlyLayout: Header only */}
      <Route element={<HeaderOnlyLayout />}>
        <Route path="/review" element={<AuthGuard element={ReviewListRoute} isAuthenticated={isAuthenticated} />} />
        <Route path="/review/search" element={<AuthGuard element={ReviewSearch} isAuthenticated={isAuthenticated} />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
