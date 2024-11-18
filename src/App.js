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
import ConnectGidePage from './components/Connect/Connect';
import FindID from './pages/Finds/FindID';
import FindPW from './pages/Finds/FindPW/FindPW';

import {
  HomePage,
  ProfileEditPage,
  ProfilePage,
  QueryPage,
  ReviewCreatePage,
  ReviewDetailPage,
  ReviewEditPage,
  ReviewPage,
  Welcome,
  LoverPage,
  ConnectPage,
  RecommendPage,
} from './pages/index';

import { InitializeNickname } from './recoil/InitializeNickname';
import { basicTheme } from './shared/Theme';

const queryClient = new QueryClient();

const isAuthenticated = async () => {
  // AT 만료여부 확인해서 새로운 AT인지 확인해야 함.
  return localStorage.getItem('accessToken') !== null;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/review" element={<ProtectedRoute element={ReviewPage} isAuthenticated={isAuthenticated} />} />
      <Route
        path="/review/:reviewId"
        element={<ProtectedRoute element={ReviewDetailPage} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/review/create"
        element={<ProtectedRoute element={ReviewCreatePage} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/review/update/:reviewId"
        element={<ProtectedRoute element={ReviewEditPage} isAuthenticated={isAuthenticated} />}
      />
      <Route
        path="/review/query-result"
        element={<ProtectedRoute element={QueryPage} isAuthenticated={isAuthenticated} />}
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
      <S.HeaderContainer>
        <Header />
      </S.HeaderContainer>
      <Outlet />
      <S.FooterContainer>
        <Footer />
      </S.FooterContainer>
    </>
  );
}

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={basicTheme}>
        <GlobalStyle />
        <InitializeNickname /> {/* recoil 상태 초기화 */}
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
