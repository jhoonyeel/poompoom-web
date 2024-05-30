import styled from 'styled-components';
import Link, { Router } from 'react-router-dom';
import { useState } from 'react';
import { login } from '../../../apis/login';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');

  const onChangeEmail = (event) => {
    setId(event.target.value);
  };
  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onClickLogin = async () => {
    const result = await login(id, password);
    console.log(result);
    const { accessToken, refreshToken } = result;
    localStorage.setItem('accessToken', accessToken);
    localStorage.setItem('refreshToken', refreshToken);
    Router('../../Profile/ProfilePage.js');
  };

  return (
    <Container>
      <Title>로그인하기</Title>
      <Form>
        <inputs>
          아이디 : <input type="text" value={id} placeholder="이메일" onChange={onChangeEmail} /> <br />
          비밀번호 : <input type="password" value={password} placeholder="비밀번호" onChange={onChangePassword} />
        </inputs>
        <button type="button" onClick={onClickLogin}>
          로그인하기
        </button>
      </Form>
      <CustomLink to="../../SignUp/SignUpPage.js">회원가입</CustomLink>
    </Container>
  );
}

const Form = styled.div`
  display: flex;
  flex-direction: column;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div``;

const CustomLink = styled(Link)`
  margin-top: 20px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  &:visited {
    text-decoration: none;
    color: black;
    font-weight: bold;
  }
`;

/* import { useState } from 'react';
import { useRecoilState } from 'recoil';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accessToken, setAccessToken] = useRecoilState();


  const onClickLogin = () => {
    try {
      // 1. 로그인 요청 날려서 토큰 받아오기
      const accessToken = result.data?.loginUser.accessToken;
      console.log(accessToken);
      // 2. 토큰을 globalstate에 저장
      if (accessToken === undefined) {
        alert('error');
        return;
      } // 문제 있을땐 무ㅜ조건 return하고 종료. 아래로 내려온건 !==란 뜻.
      setAccessToken(accessToken);
      // 3. 로그인 성공 시 성공 페이지로 이동 !
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div>
      이메일 : <input type="text" onChange={onChangeEmail} /> <br />
      비밀번호 : <input type="password" onChange={onChangePassword} />
      <button type="button" onClick={onClickLogin}>
        로그인하기
      </button>
    </div>
  );
}
*/
