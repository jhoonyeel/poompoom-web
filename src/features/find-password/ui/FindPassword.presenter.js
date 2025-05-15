// FindPWPresenter.js
import { Button, Container, ErrorMessage, Header, HeaderText, Input } from './FindPassword.style';

const FindPasswordUI = ({
  email,
  setEmail,
  username,
  setUsername,
  authNum,
  setAuthNum,
  newPassword,
  setNewPassword,
  step,
  error,
  handleRequestReset,
  handleAuthenticate,
  handleResetPassword,
}) => {
  return (
    <Container>
      <Header>
        <HeaderText>비밀번호 찾기</HeaderText>
      </Header>
      {step === 1 && (
        <>
          <Input placeholder="이메일을 입력하세요" value={email} onChange={(e) => setEmail(e.target.value)} />
          <Input
            placeholder="사용자 이름을 입력하세요"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Button onClick={handleRequestReset}>비밀번호 재설정 요청</Button>
        </>
      )}
      {step === 2 && (
        <>
          <Input placeholder="인증번호를 입력하세요" value={authNum} onChange={(e) => setAuthNum(e.target.value)} />
          <Button onClick={handleAuthenticate}>인증하기</Button>
        </>
      )}
      {step === 3 && (
        <>
          <Input
            type="password"
            placeholder="새 비밀번호를 입력하세요"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <Button onClick={handleResetPassword}>비밀번호 재설정</Button>
        </>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
    </Container>
  );
};

export default FindPasswordUI;
