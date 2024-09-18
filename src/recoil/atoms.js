import { atom, selector } from 'recoil';

export const profilePictureState = atom({
  key: 'profilePictureState', // Atom의 고유 키
  default: '', // 기본값을 빈 문자열로 설정
});

export const memberIdState = atom({
  key: 'memberIdState',
  default: selector({
    key: 'memberIdState/default',
    get: () => {
      const savedMemberId = localStorage.getItem('memberId');
      return savedMemberId ? parseInt(savedMemberId, 10) : null; // 로컬 스토리지에서 불러옴
    },
  }),
});

export const usernameState = atom({
  key: 'usernameState',
  default: selector({
    key: 'usernameState/default',
    get: () => {
      return localStorage.getItem('username') || ''; // 로컬 스토리지에서 불러옴
    },
  }),
});

export const nicknameState = atom({
  key: 'nicknameState',
  default: selector({
    key: 'nicknameState/default',
    get: () => {
      return localStorage.getItem('nickname') || ''; // 로컬 스토리지에서 불러옴
    },
  }),
});
