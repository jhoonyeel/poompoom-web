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
      return savedMemberId ? parseInt(savedMemberId, 10) : null;
    },
  }),
});

export const usernameState = atom({
  key: 'usernameState',
  default: selector({
    key: 'usernameState/default',
    get: () => {
      return localStorage.getItem('username') || '';
    },
  }),
});

export const nicknameState = atom({
  key: 'nicknameState',
  default: localStorage.getItem('nickname') || '',
});
