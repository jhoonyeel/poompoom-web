/* eslint-disable react/jsx-props-no-spreading */
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import * as S from './Signup.style';
import { schema } from './Signup.validation';

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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <S.SignUpContainer>
        <S.InputWrapper>
          <S.InputLabel>아이디</S.InputLabel>
          <input type="text" {...register('id')} />
          <S.ErrorMessage>{errors.id?.message}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>이메일</S.InputLabel>
          <input type="email" {...register('email')} />
          <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>
          <button type="button" onClick={sendEmailVerification} disabled={!email}>
            이메일 인증 요청
          </button>
          {emailSentMessage && <S.ErrorMessage>{emailSentMessage}</S.ErrorMessage>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>인증번호</S.InputLabel>
          <input type="text" {...register('verificationCode')} />
          <S.ErrorMessage>{errors.verificationCode?.message}</S.ErrorMessage>
          <button type="button" onClick={submitVerification} disabled={!verificationCode}>
            인증번호 확인
          </button>
          {verificationMessage && <S.ErrorMessage>{verificationMessage}</S.ErrorMessage>}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>비밀번호</S.InputLabel>
          <input type="password" {...register('password')} />
          <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>비밀번호 확인</S.InputLabel>
          <input type="password" {...register('confirmPassword')} />
          <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.InputLabel>프로필 이미지</S.InputLabel>
          <input type="file" {...register('file')} />
        </S.InputWrapper>
        <button style={{ backgroundColor: isValid ? 'yellow' : '' }} type="submit">
          회원가입
        </button>
      </S.SignUpContainer>
    </form>
  );
}
