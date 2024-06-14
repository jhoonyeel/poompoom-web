import axios from './axios';

export const login = async (username, password) => {
  const data = new URLSearchParams();
  data.append('username', username);
  data.append('password', password);

  try {
    const response = await axios.post('/login', data, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    console.log('Login 서버로부터의 응답: ', response); // Debug log to check response structure

    const { access: accessToken, refresh: refreshToken } = response.data;

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

    return { accessToken, refreshToken };
  } catch (error) {
    console.error('Login error:', error);
    throw error;
  }
};

export const logout = () => {
  localStorage.removeItem('accessToken');
  localStorage.removeItem('refreshToken');
};

export { axios };
