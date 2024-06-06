import { QueryClient, QueryClientProvider } from 'react-query';
import { Outlet, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import * as S from './App.styles';
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

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/review/:id" element={<PostDetail />} />
      <Route path="/review/write" element={<ReviewWritePage />} />
      <Route path="/review/query-result" element={<QueryResultPage />} />
      <Route path="/lovers-profile" element={<LoverProfilePage />} />
      <Route path="/profile/like" element={<ProfilePage />} />
      <Route path="/profile/bookmark" element={<ProfilePage />} />
      <Route path="/profile/recent" element={<ProfilePage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/profile/edit" element={<ProfileEditPage />} />
      <Route path="/community" element={<CommunityList />} />
      <Route path="/community/detail" element={<CommunityDetailPage />} />
      <Route path="/community/write" element={<CommunityWrite />} />
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

// <CommunityDetailPage /> 커뮤니티 글 확인 페이지
// <CommunityWrite /> 커뮤니티 글 작성 페이지
// <CommunityList /> 커뮤니티 리스트 (메인)페이지
// <ReviewPage /> 선물 리뷰글 페이지
// <ReviewWritePage> 리뷰글 작성, 수정 페이지
// <ProfilePage /> 프로필 페이지
