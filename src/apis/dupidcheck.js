import axios from './axios';

export const checkDuplicateId = async (id) => {
  try {
    const result = await axios.post('/member/dupidcheck', { username: id });
    console.log('아이디 중복 체크 성공', result.data);
    return { success: true, message: '사용 가능한 아이디입니다.' };
  } catch (error) {
    if (error.response?.status === 400) {
      return { success: false, message: '이미 가입된 아이디입니다.' };
      // eslint-disable-next-line no-else-return
    } else {
      console.log('아이디 중복 체크 실패', error.response?.data);
      return { success: false, message: '아이디 중복 체크에 실패했습니다.' };
    }
  }
};
