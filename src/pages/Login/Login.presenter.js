import * as S from './Login.styles';

export default function LoginUI({ handleSubmitLogin, username, setUsername, password, setPassword }) {
  return (
    <S.Wrapper>
      <S.Header>로그인 페이지</S.Header>
      <S.FormContainer>
        <S.Form onSubmit={handleSubmitLogin}>
          <div>
            <S.Label>Username</S.Label>
            <S.Input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div>
            <S.Label>Password</S.Label>
            <S.Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <S.Button type="submit">Login</S.Button>
        </S.Form>
      </S.FormContainer>
      <S.CustomLink to="/signup">회원가입으로 이동</S.CustomLink>
      <S.CustomLink to="/">메인 화면으로 이동</S.CustomLink>
    </S.Wrapper>
  );
}
