import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import * as S from './App.styles';
import ProtectedRoute from './ProtectedRoute';
import CommunityList from './components/Community/CommunityList/CommunityList';
import CommunityWrite from './components/Community/CommunityWrite/CommunityWrite';
import Footer from './components/Footer/Footer.container';
import Header from './components/Header/Header.container';
import PostDetail from './components/PostDetail/PostDetail.container';
import CommunityDetailPage from './pages/Community/Detail/CommunityDetailPage';
import HomePage from './pages/Home/HomePage';
import SignupPage from './pages/Join/Signup/SignupPage';
import SignupTagPage from './pages/Join/SignupTag/SignupTagPage';
import LoginPage from './pages/Login/LoginPage';
import LoverProfilePage from './pages/LoverProfile/LoverProfilePage';
import LoverProfileSetPage from './pages/LoverProfile/LoverProfileSetPage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import ProfilePage from './pages/Profile/ProfilePage';
import QueryResultPage from './pages/QueryResult/QueryResultPage';
import ReviewPage from './pages/Review/ReviewPage';
import ReviewWritePage from './pages/ReviewWrite/ReviewWritePage';
import { basicTheme } from './shared/Theme';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

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
        element={<ProtectedRoute element={ReviewWritePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/review/query-result"
        element={<ProtectedRoute element={QueryResultPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/lovers-profile"
        element={<ProtectedRoute element={LoverProfilePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/lovers-profile-set"
        element={<ProtectedRoute element={LoverProfileSetPage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/profile/like"
        element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/profile/bookmark"
        element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route
        path="/profile/recent"
        element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated()} />}
      />
      <Route path="/profile" element={<ProtectedRoute element={ProfilePage} isAuthenticated={isAuthenticated()} />} />
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
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/signup/tag" element={<SignupTagPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/*" element={<MainLayout />}>
              <Route path="*" element={<AppRoutes />} />
            </Route>
          </Routes>
        </S.AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

// <ReviewPage /> 선물 리뷰글 페이지
// <ReviewWritePage> 리뷰글 작성, 수정 페이지
// <ProfilePage /> 프로필 페이지
