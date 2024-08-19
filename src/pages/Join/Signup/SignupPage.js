import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { schema } from './Signup.validation';
import SignupUI from './SignUp.present';

export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // onchange 당 체크
  });

  const navigate = useNavigate();
  const [emailSentMessage, setEmailSentMessage] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');

  const email = watch('email');
  const verificationCode = watch('verificationCode');

  const sendEmailVerification = async () => {
    try {
      const result = await axios.post(`/${email}/send`);
      console.log('이메일 인증 요청 성공', result.data);
      setEmailSentMessage('이메일 인증 코드가 발송되었습니다.');
    } catch (error) {
      console.error('이메일 인증 요청 실패', error.response?.data);
      console.log('이메일 인증 요청에 실패했습니다.');
    }
  };
  const submitVerification = async () => {
    try {
      const result = await axios.post(`/${email}/check`, { authNum: verificationCode });
      console.log('인증번호 확인 성공', result.data);
      setVerificationMessage('인증번호 확인에 성공했습니다.');
    } catch (error) {
      console.error('인증번호 확인 실패', error.response?.data);
      setVerificationMessage('인증번호 확인에 실패했습니다.');
    }
  };
  const onSubmit = async (data) => {
    const formData = new FormData();
    try {
      const req = new Blob(
        [
          JSON.stringify({
            username: data.id,
            password: data.password,
            nickname: data.email,
            profileTagIds: [1],
          }),
        ],
        { type: 'application/json' },
      );
      formData.append('req', req);
      formData.append('profileImage', data.file[0]);

      const result = await axios.post(`/member/join`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('회원가입 성공', result.data);
      navigate('/login');
    } catch (error) {
      console.error('회원가입 실패', error.response?.data);
      console.log('FormData 내용!!!');
      navigate('/login');
      if (formData) {
        Array.from(formData.entries()).forEach(([key, value]) => {
          console.log(key, value);
        });
      }
    }
  };

  const onClickToWelcome = () => {
    navigate('/welcome');
  };

  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      isValid={isValid}
      emailSentMessage={emailSentMessage}
      verificationMessage={verificationMessage}
      sendEmailVerification={sendEmailVerification}
      submitVerification={submitVerification}
      email={email}
      verificationCode={verificationCode}
      onSubmit={onSubmit}
      onClickToWelcome={onClickToWelcome}
    />
  );
}
