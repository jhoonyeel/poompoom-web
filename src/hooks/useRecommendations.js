import { useQuery } from 'react-query';
import axios from '../apis/axios';

const fetchRecommendations = async (searchTerm) => {
  console.log('hashtag/rank?q= API 실행');
  const { data } = await axios.get(`hashtag/rank?q=${searchTerm}`);
  return data;
};

export const useRecommendations = (searchTerm) => {
  return useQuery(['recommendations', searchTerm], () => fetchRecommendations(searchTerm), {
    enabled: !!searchTerm, // Only fetch when searchTerm is not empty
  });
};
