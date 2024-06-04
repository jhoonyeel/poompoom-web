import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router-dom';
import reset from 'styled-reset';
import * as S from './App.styles';
import Header from './components/Header/Header.container';
import Footer from './components/Footer/Footer.container';
import { basicTheme } from './shared/Theme';
import HomePage from './pages/Home/HomePage';
import ReviewPage from './pages/Review/ReviewPage';
import ReviewWritePage from './pages/ReviewWrite/ReviewWritePage';
import QueryResultPage from './pages/QueryResult/QueryResultPage';
import ProfilePage from './pages/Profile/ProfilePage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';
import CommunityDetailPage from './pages/Community/Detail/CommunityDetailPage';
import CommunityWrite from './components/Community/CommunityWrite/CommunityWrite';
import CommunityList from './components/Community/CommunityList/CommunityList';
import PostDetail from './components/PostDetail/PostDetail.container';
import SignUpPage from './pages/SignUp/SignUpPage';
import LoginPage from './pages/Login/LoginPage';
import SignUpTagPage from './pages/SignUp/SignUpTagPage';
import LoverProfilePage from './pages/LoverProfile/LoverProfilePage';

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
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/signup/tag" element={<SignUpTagPage />} />
    </Routes>
  );
}

function MainLayout() {
  return (
    <>
      <Header />
      <AppRoutes />
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
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route element={<MainLayout />}>
              <Route path="/*" element={<AppRoutes />} />
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
// <UserSetting /> 사용자 설정 페이지
