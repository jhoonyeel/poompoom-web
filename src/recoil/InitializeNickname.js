// InitializeNickname 컴포넌트
import { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import { nicknameState } from './atoms';

export function InitializeNickname() {
  const setNickname = useSetRecoilState(nicknameState);

  useEffect(() => {
    const storedNickname = localStorage.getItem('nickname');
    if (storedNickname) {
      setNickname(storedNickname); // 로컬 스토리지 값을 Recoil 상태에 설정
    }
  }, [setNickname]);

  return null; // UI를 렌더링하지 않음
}
