import { ThemeProvider } from 'styled-components';
import * as S from './App.styles';
import Header from './components/Header/Header.container';
import Footer from './components/Footer/Footer.container';
import { basicTheme } from './shared/Theme';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <ThemeProvider theme={basicTheme}>
      <S.AppContainer>
        <Header />
        <ReviewPage />
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
