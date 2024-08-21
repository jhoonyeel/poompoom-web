import { useState } from 'react';
import * as S from './Login.styles';
import { ReactComponent as NaverLogo } from '../../assets/Login/LogoIcon/Naver.svg';
import { ReactComponent as GoogleLogo } from '../../assets/Login/LogoIcon/Google.svg';
import { ReactComponent as AppleLogo } from '../../assets/Login/LogoIcon/Apple.svg';
import { ReactComponent as LoginTitle } from '../../assets/Login/LogInTitle.svg';

export default function LoginUI({ handleSubmitLogin, username, setUsername, password, setPassword }) {
  const [isFocused, setIsFocused] = useState({
    username: false,
    password: false,
  });

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    if (!document.getElementById(field).value) {
      setIsFocused({ ...isFocused, [field]: false });
    }
  };
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
            <NaverLogo />
          </S.LogoWrapper>
          <S.LogoWrapper>
            <GoogleLogo />
          </S.LogoWrapper>
          <S.LogoWrapper>
            <AppleLogo />
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
              onBlur={() => handleBlur('username')}
            />
          </S.InputContainer>

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
              onBlur={() => handleBlur('password')}
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
            <S.CustomLink to="/">아이디 찾기</S.CustomLink>
            <S.Line>|</S.Line>
            <S.CustomLink to="/">비밀번호 찾기</S.CustomLink>
          </S.LinkInnerWrapper>
          <S.CustomLink to="/signup">회원가입</S.CustomLink>
        </S.LinkWrapper>
      </S.LoginContainer>
      <S.FooterContainer>
        <S.FooterBenner />
        <S.MenuContainer>
          <S.MenuText>HOME</S.MenuText>
          <S.MenuText>MOOD VIEW</S.MenuText>
          <S.MenuText>MY LOVER</S.MenuText>
          <S.MenuText>OPTION</S.MenuText>
        </S.MenuContainer>
      </S.FooterContainer>
    </>
  );
}
