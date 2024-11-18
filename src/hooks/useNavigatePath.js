import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigatePath = () => {
  const navigate = useNavigate();

  // 이벤트 없이도 호출 가능하도록 수정
  const handleNavigate = useCallback(
    (path) => {
      return (event) => {
        event.preventDefault();
        navigate(path);
      };
    },
    [navigate],
  );

  return handleNavigate;
};
