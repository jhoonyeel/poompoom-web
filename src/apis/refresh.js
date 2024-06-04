import axios from 'axios';

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');

  const result = await axios.post(`${process.env.REACT_APP_API_URL}/reissue`, {
    headers: { access: accessToken },
  });
  return result.data;
};
