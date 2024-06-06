import axios from 'axios';

axios.defaults.baseURL = process.env.REACT_APP_API_URL; // 전역 설정
axios.defaults.withCredentials = true; // 쿠키 포함을 위한 설정

// 요청 인터셉터
axios.interceptors.request.use(
  (config) => {
    const accessToken = localStorage.getItem('accessToken');
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    console.log('Request Headers: ', config.headers); // 요청 헤더를 로그에 출력
    return config;
  },
  (error) => Promise.reject(error),
);

// 응답 인터셉터
axios.interceptors.response.use(
  (response) => {
    console.log('Response: ', response);
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');
      try {
        const response = await axios.post(
          '/reissue',
          {},
          {
            headers: {
              Authorization: `Bearer ${refreshToken}`,
            },
          },
        );
        if (response.status === 200) {
          const { access: accessToken, refresh: newRefreshToken } = response.data;
          localStorage.setItem('accessToken', accessToken);
          if (newRefreshToken) {
            localStorage.setItem('refreshToken', newRefreshToken);
          }
          axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
          originalRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(originalRequest);
        }
      } catch (refreshError) {
        console.error('Token refresh failed', refreshError);
      }
    }
    return Promise.reject(error);
  },
);

export default axios;
