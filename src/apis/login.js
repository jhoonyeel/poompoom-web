import axios from 'axios';

export const login = async (id, password) => {
  const result = axios.post({ id, password });
  return result.data;
};
