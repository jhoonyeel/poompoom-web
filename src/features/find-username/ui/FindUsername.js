import Footer from '@widgets/footer/ui/Footer.container';
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';

const FindUsername = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleFindId = async () => {
    try {
      setError('');
      setMessage('');
      await axios.post('/member/findId', { email });
      setMessage('이메일이 성공적으로 발송되었습니다.');
    } catch (err) {
      setError('이메일 발송에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <Container>
        <Header>
          <HeaderText>아이디 찾기</HeaderText>
        </Header>
        <Input
          type="email"
          placeholder="이메일을 입력하세요"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={handleFindId}>확인</Button>
        {message && <SuccessMessage>{message}</SuccessMessage>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
        <BackButton onClick={() => window.history.back()}>뒤로가기</BackButton>
      </Container>
      <Footer />
    </>
  );
};

export default FindUsername;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 516px;
  height: 1000px;
  margin: 100px auto 50px auto;
`;

const Header = styled.h1`
  font-size: 32px;
  margin-bottom: 20px;
`;

const HeaderText = styled.div`
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #929292;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #343434;
  }
`;

const SuccessMessage = styled.div`
  color: green;
  margin-top: 10px;
`;

const ErrorMessage = styled.div`
  color: red;
  margin-top: 10px;
`;

const BackButton = styled.button`
  margin-top: 20px;
  padding: 10px;
  background-color: #ddd;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #ccc;
  }
`;
