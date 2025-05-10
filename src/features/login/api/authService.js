import axios from '../../../shared/lib/axios';

export const login = async (username, password) => {
  const data = new URLSearchParams();
  data.append('username', username);
  data.append('password', password);

  try {
    console.log('/login API 실행');
    const response = await axios.post('/login', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log('Login 서버로부터의 응답: ', response);

    const {
      access: accessToken,
      refresh: refreshToken,
      memberId,
      username: responseUsername,
      nickname,
    } = response.data;

    if (accessToken) {
      localStorage.setItem('accessToken', accessToken);
    } else {
      console.error('Access token is missing in the server response');
    }

    if (refreshToken) {
      localStorage.setItem('refreshToken', refreshToken);
    } else {
      console.error('Refresh token is missing in the server response');
    }

    // userData를 로컬 스토리지에 저장 (JSON 문자열로 변환하여 저장)
    const userData = { memberId, username: responseUsername, nickname };
    localStorage.setItem('userData', JSON.stringify(userData));

    return { accessToken, refreshToken, userData };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
  localStorage.removeItem('userData');
};
