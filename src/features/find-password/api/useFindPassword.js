import axios from '../../../shared/lib/axios';

// 비밀번호 재설정 요청
export function useRequestPasswordReset() {
  const requestPasswordReset = async (email, username) => {
    try {
      await axios.post('/member/reconfig_password/req', { email, username });
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Error occurred' };
    }
  };
  return { requestPasswordReset };
}

// 인증번호 확인
export function useAuthenticateResetCode() {
  const authenticateResetCode = async (authNum, email) => {
    try {
      await axios.post('/member/reconfig_password/authenticate', { authNum, email });
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Authentication failed' };
    }
  };
  return { authenticateResetCode };
}

// 비밀번호 재설정
export function useResetPassword() {
  const resetPassword = async (reconfigPassword, email) => {
    try {
      await axios.post('/member/reconfig_password/execute', { reconfigPassword, email });
      return { success: true };
    } catch (error) {
      return { success: false, message: error.response?.data?.message || 'Reset failed' };
    }
  };
  return { resetPassword };
}
