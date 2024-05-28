import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes, useLocation } from 'react-router-dom';
import reset from 'styled-reset';
import * as S from './App.styles';

import Header from './components/Header/Header.container';
import Footer from './components/Footer/Footer.container';
import { basicTheme } from './shared/Theme';

import HomePage from './pages/Home/HomePage';

import ReviewPage from './pages/Review/ReviewPage';
import ReviewWritePage from './pages/Review/ReviewWritePage';

import ProfilePage from './pages/Profile/ProfilePage';
import ProfileEditPage from './pages/Profile/ProfileEditPage';

import CommunityDetailPage from './pages/Community/Detail/CommunityDetailPage';
import CommunityWrite from './components/Community/CommunityWrite/CommunityWrite';
import CommunityList from './components/Community/CommunityList/CommunityList';
import PostDetail from './components/PostDetail/PostDetail.container';
import SignUpPage from './pages/Login/SignUpPage';
import LoginPage from './pages/Login/LoginPage';

const GlobalStyle = createGlobalStyle`
  ${reset}
`;

const queryClient = new QueryClient();

function App() {
  const location = useLocation();
  const noHeaderRoutes = ['/community', '/Community/detail', '/Community/write']; // Header를 포함하지 않을 경로 목록

  const showHeader = !noHeaderRoutes.includes(location.pathname); // 현재 경로가 Header를 포함하지 않을 목록에 있는지 확인

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <S.AppLayout>
          {showHeader && <Header />}
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/review" element={<ReviewPage />} />
            <Route path="/review/post/:id" element={<PostDetail />} />
            <Route path="/review/write" element={<ReviewWritePage />} />
            <Route path="/profile/like" element={<ProfilePage />} />
            <Route path="/profile/bookmark" element={<ProfilePage />} />
            <Route path="/profile/recent" element={<ProfilePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/profile/edit" element={<ProfileEditPage />} />
            <Route path="/community" element={<CommunityList />} />
            <Route path="/community/detail" element={<CommunityDetailPage />} />
            <Route path="/community/write" element={<CommunityWrite />} />
            <Route path="/signUp" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
          <Footer />
        </S.AppLayout>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
// <CommunityDetailPage /> 커뮤니티 글 확인 페이지
// <CommunityWrite /> 커뮤니티 글 작성 페이지
// <CommunityList /> 커뮤니티 리스트 (메인)페이지
// <ReviewPage /> 선물 리뷰글 페이지
// <ReviewWritePage> 리뷰글 작성, 수정 페이지
// <ProfilePage /> 프로필 페이지
// <UserSetting /> 사용자 설정 페이지
