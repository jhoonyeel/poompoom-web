import { yupResolver } from '@hookform/resolvers/yup';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import axios from '../../../apis/axios';
import { schema } from '../../../components/SignUpValidation/SignUpValidation';
import SignupUI from './SignUp.presenter';

/** 
 @description 일반 로그인 페이지
 */
export default function SignupPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange',
  });

  const navigate = useNavigate();
  const [emailSentMessage, setEmailSentMessage] = useState('');
  const [verificationMessage, setVerificationMessage] = useState('');
  const [idCheckMessage, setIdCheckMessage] = useState('');
  const [tagMessage, setTagMessage] = useState('');
  const [isIdValid, setIsIdValid] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false); // 이메일 인증 여부
  const [isVerificationCodeVerified, setIsVerificationCodeVerified] = useState(false); // 인증번호 확인 여부

  const email = watch('email');
  const verificationCode = watch('verificationCode');
  const id = watch('id');
  const sendEmailVerification = async () => {
    try {
      const result = await axios.post(`/${email}/send`);
      console.log('이메일 인증 요청 성공', result.data);
      setEmailSentMessage('이메일 인증 코드가 발송되었습니다.');
      setIsEmailVerified(true);
    } catch (error) {
      console.error('이메일 인증 요청 실패', error.response?.data);
      setEmailSentMessage(error.response?.data?.message || '중복되거나 잘못된 이메일입니다.');
      setIsEmailVerified(false);
    }
  };

  const submitVerification = async () => {
    try {
      const result = await axios.post(`/${email}/check`, { authNum: verificationCode });
      console.log('인증번호 확인 성공', result.data);
      setVerificationMessage('인증번호 확인에 성공했습니다.');
      setIsVerificationCodeVerified(true);
    } catch (error) {
      console.error('인증번호 확인 실패', error.response?.data);
      setVerificationMessage('인증번호 확인에 실패했습니다.');
      setIsVerificationCodeVerified(false);
    }
  };

  // 아이디 중복 체크 함수 추가
  const checkDuplicateId = async () => {
    try {
      const result = await axios.post('/member/dupidcheck', { username: id });
      console.log('아이디 중복 체크 성공', result.data);
      setIdCheckMessage('사용 가능한 아이디입니다.');
      setIsIdValid(true);
    } catch (error) {
      if (error.response?.status === 400) {
        setIdCheckMessage('이미 가입된 아이디입니다.');
      } else {
        setIdCheckMessage('아이디 중복 체크에 실패했습니다.');
      }
      setIsIdValid(false);
      console.error('아이디 중복 체크 실패', error.response?.data);
    }
  };

  const onClickToWelcome = () => {
    navigate('/welcome');
  };

  const onSubmit = async (data) => {
    if (!isEmailVerified) {
      setEmailSentMessage('이메일 인증을 완료해 주세요.');
      return;
    }

    if (!isVerificationCodeVerified) {
      setVerificationMessage('올바를 인증번호를 작성해 주세요.');
      return;
    }

    const storedTags = localStorage.getItem('signUpTag');
    if (!storedTags) {
      setTagMessage('프로필 태그를 설정해 주세요.');
      return;
    }

    if (!isIdValid) {
      setIdCheckMessage('아이디 중복 여부를 확인해 주세요.');
      return;
    }

    const formData = new FormData();
    try {
      const req = new Blob(
        [
          JSON.stringify({
            username: data.id,
            password: data.password,
            nickname: data.nickname,
            email: data.email,
            profileTagIds: storedTags,
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
      onClickToWelcome();
    } catch (error) {
      console.error('회원가입 실패', error.response?.data);
      console.log('FormData 내용!:');
      if (formData) {
        Array.from(formData.entries()).forEach(([key, value]) => {
          console.log(key, value);
        });
      }
    }
  };

  return (
    <SignupUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      isValid={isValid}
      tagMessage={tagMessage}
      emailSentMessage={emailSentMessage}
      verificationMessage={verificationMessage}
      sendEmailVerification={sendEmailVerification}
      submitVerification={submitVerification}
      email={email}
      verificationCode={verificationCode}
      id={id}
      idCheckMessage={idCheckMessage}
      checkDuplicateId={checkDuplicateId}
      onSubmit={onSubmit}
    />
  );
}
