// import { getNewRefreshToken } from './refresh';
import { getAuthAxios } from './authAxios';

export const getSuccess = async () => {
  const access = localStorage.getItem('access');
  const authAxios = getAuthAxios(access);
  const result = await authAxios.get('/Success');
  return result.data;
};

/* const access = localStorage.getItem('accessToken');
  try {
    const result = await axios.get(`${process.env.REACT_APP_API_URL}`, { headers: { Authorization: access } });
    return result.data;
  } catch (error) {
    if (error.response.status === 401) {
      const { accessToken, refreshToken } = await getNewRefreshToken();
      error.config.headers.Authorization = accessToken;
      localStorage.setItem('accessToken', accessToken);
      localStorage.setItem('refreshToken', refreshToken);
      return (await axios.get(error.config.url, error.config)).data; // 헤더에 데이터 리턴}
    } */
