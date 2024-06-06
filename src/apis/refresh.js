import axios from 'axios';

export const getNewRefreshToken = async () => {
  const accessToken = localStorage.getItem('accessToken');

  const result = await axios.post(`/reissue`, {
    headers: { access: accessToken },
  });
  return result.data;
};
