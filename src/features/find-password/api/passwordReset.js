import axios from '@shared/lib/axios';

// 비밀번호 재설정 요청
export const sendPasswordResetEmail = async (email, username) => {
  try {
    await axios.post('/member/reconfig_password/req', { email, username });
    return { success: true };
  } catch (error) {
    return { success: false, message: error.response?.data?.message || 'Error occurred' };
  }
};

// 인증번호 확인
export const verifyPasswordResetCode = async (authCode, email) => {
  try {
    await axios.post('/member/reconfig_password/authenticate', { authCode, email });
    return { success: true };
  } catch (error) {
    return { success: false, message: error.response?.data?.message || 'Authentication failed' };
  }
};

// 비밀번호 재설정
export const submitNewPassword = async (newPassword, email) => {
  try {
    await axios.post('/member/reconfig_password/execute', { newPassword, email });
    return { success: true };
  } catch (error) {
    return { success: false, message: error.response?.data?.message || 'Reset failed' };
  }
};
