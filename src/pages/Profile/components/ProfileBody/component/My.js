import axios from 'axios';

const access = localStorage.getItem('AccessToken');
const id = 1;

export const My = async () => {
  try {
    const response = await axios.get(`${id}/My`, {
      headers: { access: `${access}` },
    });
    if (response) {
      console.log('성공', response.data);
      return response.data.values;
    }
    console.log('데이터 불러오기 실패');
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
