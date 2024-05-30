import axios from 'axios';
import { getNewRefreshToken } from './refresh';

export const getAuthAxios = (token) => {
  const authAxios = axios.create({
    baseURL: `${process.env.REACT_APP_API_URL}`,
    headers: {
      Authorization: token,
    },
  });
  authAxios.interceptors.response.use(
    (res) => res,
    async (error) => {
      if (error.response.status === 401) {
        try {
          const { accessToken, refreshToken } = await getNewRefreshToken();
          error.config.headers.Authorization = accessToken;
          localStorage.setItem('accessToken', accessToken);
          localStorage.setItem('refreshToken', refreshToken);
          return (await axios.get(error.config.url, error.config)).data;
        } catch (error) {
          console.log(error);
        }
      }
    },
  );
  return authAxios;
};
