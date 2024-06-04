import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;

const getAuthAxios = (url) => {
  const RefreshToken = localStorage.getItem('RefreshToken');

  const instance = axios.create({
    baseURL: url,
    headers: {
      access: RefreshToken,
    },
  });

  return instance;
};

const axiosApi = (url) => {
  const instance = axios.create({ baseURL: url });
  return instance;
};

export const authAxiosInstance = getAuthAxios(BASE_URL);
export const apiAxiosInstance = axiosApi(BASE_URL);

// authAxios.interceptors.response.use(
//   (res) => res,
//   // eslint-disable-next-line consistent-return
//   async (error) => {
//     if (error.response.status === 401) {
//       try {
//         const { accessToken } = await getNewRefreshToken();
//         // eslint-disable-next-line no-param-reassign
//         error.config.headers.Authorization = accessToken;
//         localStorage.setItem('accessToken', accessToken);

//         return authAxios.request(error.config);

//         // return (await axios.get(error.config.url, error.config)).data;
//         // eslint-disable-next-line no-shadow
//       } catch (error) {
//         console.log('에러1', error);
//         return Promise.reject(error);
//       }
//     }
//     return Promise.reject(error);
//   },
// );
