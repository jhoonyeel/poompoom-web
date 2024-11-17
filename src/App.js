import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as S from './App.styles';
import GlobalStyle from './GlobalStyle';
import ProtectedRoute from './ProtectedRoute';
import Footer from './components/Footer/Footer.container';
import Header from './components/Header/Header.container';

import SignupPage from './pages/Join/Signup/SignupPage';
import SignupTagPage from './pages/Join/SignupTag/SignupTag.container';

import SignUpSocial from './pages/OAuth/SignUpSocial';
import SocialSignUp from './pages/OAuth/SignUp/SignUp.container';

import LoginPage from './pages/Login/LoginPage';
import LoginSocial from './pages/OAuth/LoginSocial';

import FindID from './pages/Finds/FindID';
import FindPW from './pages/Finds/FindPW/FindPW';
import Welcome from './pages/Welcome/Welcome';

import LoverPage from './pages/Lover/LoverPage';
import ConnectPage from './pages/LoverSet/Connect/Connect';
import RecommendPage from './pages/LoverSet/Recommend/Recommend';

import HomePage from './pages/Home/HomePage';

import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProfilePage from './pages/Profile/ProfilePage';
import QueryPage from './pages/Query/QueryPage';
import ReviewPage from './pages/Review/ReviewPage';
import PostDetail from './pages/ReviewDetail/PostDetail/PostDetail.container';
import ReviewWritePage from './pages/ReviewWrite/ReviewWritePage';

import { basicTheme } from './shared/Theme';
import ConnectGidePage from './components/Connect/Connect';

const queryClient = new QueryClient();

const isAuthenticated = () => {
  // Replace this with your actual authentication logic
  return localStorage.getItem('accessToken') !== null;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<ProtectedRoute element={ReviewPage} isAuthenticated={isAuthenticated()} />} />
      <Route
        path="/review/:reviewId"
        element={<ProtectedRoute element={PostDetail} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/review/write"
        element={<ProtectedRoute element={ReviewWritePage} isAuthenticated={isAuthenticated()} mode="create" />}
      />
      <Route
        path="/review/update/:reviewId"
        element={<ProtectedRoute element={ReviewWritePage} isAuthenticated={isAuthenticated()} mode="edit" />}
      />
      <Route
        path="/review/query-result"
        element={<ProtectedRoute element={QueryPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route path="/lover" element={<ProtectedRoute element={LoverPage} isAuthenticated={isAuthenticated()} />} />
      <Route
        path="/lover/connect/guide"
        element={<ProtectedRoute element={ConnectGidePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/lover/connect"
        element={<ProtectedRoute element={ConnectPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/lover/recommend"
        element={<ProtectedRoute element={RecommendPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route path="/profile/*" element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated()} />} />
      <Route
        path="/profile/edit"
        element={<ProtectedRoute element={ProfileEditPage} isAuthenticated={isAuthenticated()} />}
      />
    </Routes>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <S.AppLayout>
          <Routes>
            <Route path="/find/id" element={<FindID />} />
            <Route path="/find/pw" element={<FindPW />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup/tag" element={<SignupTagPage />} />
            <Route path="/signup/social" element={<SignUpSocial />} />
            <Route path="/Login/Social" element={<LoginSocial />} />
            <Route path="/signUp/social/form" element={<SocialSignUp />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/welcome" element={<Welcome />} />
            <Route path="/*" element={<MainLayout />}>
              <Route path="*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </S.AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
