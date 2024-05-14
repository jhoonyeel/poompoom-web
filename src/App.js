import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import * as S from './App.styles';

import Header from './components/Header/Header.container';
import Footer from './components/Footer/Footer.container';
import { basicTheme } from './shared/Theme';

import ProfilePage from './pages/ProfilePage';
import ReviewPage from './pages/ReviewPage';
import CommunityDetailPage from './pages/Community/Detail/CommunityDetailPage';
import CommunityWrite from './components/Community/CommunityWrite/CommunityWrite';
import CommunityList from './components/Community/CommunityList/CommunityList';
import HomePage from './pages/HomePage';

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <S.AppContainer>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/review" element={<ReviewPage />} />
          <Route path="/profile/like" element={<ProfilePage />} />
          <Route path="/profile/bookmark" element={<ProfilePage />} />
          <Route path="/profile/recent" element={<ProfilePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/community" element={<CommunityList />} />
          <Route path="/Community/detail" element={<CommunityDetailPage />} />
          <Route path="/Community/write" element={<CommunityWrite />} />
        </Routes>
        <Footer />
      </S.AppContainer>
    </ThemeProvider>
  );
}

export default App;
// <CommunityDetailPage /> 커뮤니티 글 확인 페이지
// <CommunityWrite /> 커뮤니티 글 작성 페이지
// <CommunityList /> 커뮤니티 리스트 (메인)페이지
// <ReviewPage /> 선물 리뷰글 페이지
// <ProfilePage /> 프로필 페이지
