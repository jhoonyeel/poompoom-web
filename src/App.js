import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import * as S from './App.styles';
import GlobalStyle from './GlobalStyle';
import ProtectedRoute from './ProtectedRoute';
import CommunityList from './components/Community/CommunityList/CommunityList';
import CommunityWrite from './components/Community/CommunityWrite/CommunityWrite';
import Footer from './components/Footer/Footer.container';
import Header from './components/Header/Header.container';

import SignupPage from './pages/Join/Signup/SignupPage';
import SignupTagPage from './pages/Join/SignupTag/SignupTag.container';
import LoginPage from './pages/Login/LoginPage';
import LoginSocial from './pages/OAuth/LoginSocial';
import SocialSignUp from './pages/OAuth/SignUp/SignUp.container';
import SignUpSocial from './pages/OAuth/SignUpSocial';

import Welcome from './pages/Welcome/Welcome';

import CommunityDetailPage from './pages/Community/Detail/CommunityDetailPage';
import HomePage from './pages/Home/HomePage';
import LoversProfilePage from './pages/LoversProfile/LoversProfilePage';
import LoversProfileSetPage from './pages/LoversProfile/LoversProfileSetPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProfilePage from './pages/Profile/ProfilePage';
import QueryPage from './pages/Query/QueryPage';
import ReviewPage from './pages/Review/ReviewPage';
import PostDetail from './pages/ReviewDetail/PostDetail/PostDetail.container';
import ReviewWritePage from './pages/ReviewWrite/ReviewWritePage';
import FindID from './pages/Finds/FindID';
import FindPW from './pages/Finds/FindPW/FindPW';

import { basicTheme } from './shared/Theme';

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
      <Route
        path="/profile/lover"
        element={<ProtectedRoute element={LoversProfilePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/profile/lover/set"
        element={<ProtectedRoute element={LoversProfileSetPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route path="/profile/*" element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated()} />} />
      <Route
        path="/profile/edit"
        element={<ProtectedRoute element={ProfileEditPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/community"
        element={<ProtectedRoute element={CommunityList} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/community/detail"
        element={<ProtectedRoute element={CommunityDetailPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/community/write"
        element={<ProtectedRoute element={CommunityWrite} isAuthenticated={isAuthenticated()} />}
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
