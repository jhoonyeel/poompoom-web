import { atom } from 'recoil';

export const profilePictureState = atom({
  key: 'profilePictureState', // Atom의 고유 키
  default: '', // 기본값을 빈 문자열로 설정
});
