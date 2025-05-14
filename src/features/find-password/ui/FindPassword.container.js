import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { sendPasswordResetEmail, submitNewPassword, verifyPasswordResetCode } from '../api/passwordReset';
import FindPasswordUI from './FindPassword.presenter';

export default function FindPassword() {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [authNum, setAuthNum] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [step, setStep] = useState(1);
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const handleOnClick = (path) => () => {
    navigate(path);
  };

  const handleRequestReset = async () => {
    const result = await sendPasswordResetEmail(email, username);
    if (result.success) {
      setStep(2);
    } else {
      setError(result.message);
    }
  };

  const handleAuthenticate = async () => {
    const result = await verifyPasswordResetCode(authNum, email);
    if (result.success) {
      setStep(3);
    } else {
      setError(result.message);
    }
  };

  const handleResetPassword = async () => {
    const result = await submitNewPassword(newPassword, email);
    if (result.success) {
      console.log('비밀번호가 성공적으로 재설정되었습니다.');
      handleOnClick('/login');
    } else {
      setError(result.message);
    }
  };

  return (
    <FindPasswordUI
      email={email}
      setEmail={setEmail}
      username={username}
      setUsername={setUsername}
      authNum={authNum}
      setAuthNum={setAuthNum}
      newPassword={newPassword}
      setNewPassword={setNewPassword}
      step={step}
      error={error}
      handleRequestReset={handleRequestReset}
      handleAuthenticate={handleAuthenticate}
      handleResetPassword={handleResetPassword}
    />
  );
}
