import axios from '../apis/axios';

export async function useFetchAllHashtags() {
  try {
    const response = await axios.get('/hashtag');
    return response.data; // 모든 해시태그 데이터를 반환
  } catch (error) {
    console.error('/hashtag API 에러:', error);
    return []; // 에러 발생 시 빈 배열 반환
  }
}
