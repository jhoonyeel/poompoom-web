import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigatePath = () => {
  const navigate = useNavigate();

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
