import * as S from './Login.styles';
import { ReactComponent as NaverLogo } from '../../assets/Login/LogoIcon/Naver.svg';
import { ReactComponent as GoogleLogo } from '../../assets/Login/LogoIcon/Google.svg';
import { ReactComponent as KakaoLogo } from '../../assets/Login/LogoIcon/Kakao.svg';

import { ReactComponent as LoginTitle } from '../../assets/Login/LogInTitle.svg';
import { useInputFocus } from '../../hooks/useInputFocus';
import AuthFooterUI from '../../atoms/AuthFooter';

export default function LoginUI({
  handleSubmitLogin,
  username,
  setUsername,
  password,
  setPassword,
  onGoogleLogin,
  onNaverLogin,
  onKakaoLogin,
}) {
  const { isFocused, handleFocus, handleBlur } = useInputFocus();
  return (
    <>
      <S.LogoSvg />
      <S.LoginContainer>
        <S.Header>
          <LoginTitle />
          <S.HeaderText>이메일 연동 로그인/회원가입</S.HeaderText>
        </S.Header>

        <S.LogoContainer>
          <S.LogoWrapper>
            <NaverLogo onClick={onNaverLogin} />
          </S.LogoWrapper>
          <S.LogoWrapper>
            <GoogleLogo onClick={onGoogleLogin} />
          </S.LogoWrapper>
          <S.LogoWrapper>
            <KakaoLogo onClick={onKakaoLogin} />
          </S.LogoWrapper>
        </S.LogoContainer>

        <S.Form onSubmit={handleSubmitLogin}>
          <S.InputContainer>
            <S.Label isFocused={isFocused.username} htmlFor="username">
              아이디
            </S.Label>
            <S.Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              id="username"
              type="text"
              onFocus={() => handleFocus('username')}
              onBlur={(event) => handleBlur(event, 'username')}
            />
          </S.InputContainer>

          {/* 라벨-htmlFor & 인풋-id 동일해야 라벨 클릭 시에도 인풋이 포커스 */}
          <S.InputContainer>
            <S.Label isFocused={isFocused.password} htmlFor="password">
              비밀번호
            </S.Label>
            <S.Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              onFocus={() => handleFocus('password')}
              onBlur={(event) => handleBlur(event, password)}
            />
          </S.InputContainer>

          <S.StayLogin>
            <input type="checkbox" id="stayLogin" />
            <S.StayLoginLabel htmlFor="stayLogin">로그인상태유지</S.StayLoginLabel>
          </S.StayLogin>

          <S.LoginButton type="submit">로그인</S.LoginButton>
        </S.Form>

        <S.LinkWrapper>
          <S.LinkInnerWrapper>
            <S.CustomLink to="/find/id">아이디 찾기</S.CustomLink>
            <S.Line>|</S.Line>
            <S.CustomLink to="/find/pw">비밀번호 찾기</S.CustomLink>
          </S.LinkInnerWrapper>
          <S.CustomLink to="/signup">회원가입</S.CustomLink>
        </S.LinkWrapper>
      </S.LoginContainer>
      <AuthFooterUI />
    </>
  );
}
