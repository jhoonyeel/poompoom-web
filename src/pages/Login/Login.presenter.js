import * as S from './Login.styles';
import { ReactComponent as NaverLogo } from '../../assets/Login/LogoIcon/Naver.svg';
import { ReactComponent as GoogleLogo } from '../../assets/Login/LogoIcon/Google.svg';
import { ReactComponent as AppleLogo } from '../../assets/Login/LogoIcon/Apple.svg';
import { ReactComponent as LoginTitle } from '../../assets/Login/LogInTitle.svg';
import LoginFooter from '../../components/LoginFooter';

export default function LoginUI({ handleSubmitLogin, username, setUsername, password, setPassword }) {
  return (
    <S.Wrapper>
      <S.Header>
        <LoginTitle />
      </S.Header>
      <S.HeaderText>이메일 연동 로그인/회원가입</S.HeaderText>
      <S.LogoContainer>
        <S.LogoWrapper>
          <NaverLogo />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <GoogleLogo />
        </S.LogoWrapper>
        <S.LogoWrapper>
          <AppleLogo />
        </S.LogoWrapper>
      </S.LogoContainer>
      <S.FormContainer>
        <S.Form onSubmit={handleSubmitLogin}>
          <div>
            <S.Label>아이디</S.Label>
            <S.Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <S.Label>Password</S.Label>
            <S.Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <S.StayLoginBtn>로그인상태유지</S.StayLoginBtn>
          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>
      </S.FormContainer>
      <S.LinkWrapper>
        <S.CustomLink to="/">아이디 찾기</S.CustomLink>
        <S.CustomLink to="/">비밀번호 찾기</S.CustomLink>
        <S.CustomLink to="/signup">회원가입</S.CustomLink>
      </S.LinkWrapper>
      <LoginFooter />
    </S.Wrapper>
  );
}
