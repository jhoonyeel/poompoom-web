// recoil/axiosState.js
import { atom } from 'recoil';
import createAxiosInstance from '../apis/axios'; // axios 인스턴스 생성 함수 가져오기

export const axiosState = atom({
  key: 'axiosState', // 상태의 고유 키
  default: createAxiosInstance(), // 기본값으로 axios 인스턴스 설정
});

// 사용법
// const axios = useRecoilValue(axiosState); // Recoil에서 axios 인스턴스 가져오기
