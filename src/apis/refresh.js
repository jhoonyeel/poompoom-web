import axios from 'axios';

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');
  const refreshToken = localStorage.getItem('refreshToken');
  const result = await axios.post(
    `${process.env.REACT_APP_API_URL}/refreshToken`,
    { refreshToken },
    { headers: { Authorization: accessToken } },
  );
  return result.data;
};

// refresh 재발급
