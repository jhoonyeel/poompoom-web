import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import SocialSignUpUI from './SignUp.presenter';
import { schema } from './SignUp.validation';

/** 
 @description 소셜 로그인 페이지
 */

export default function SocialSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // onchange별 체크
  });

  const navigate = useNavigate();
  const [nicknameMessage, setNicknameMessage] = useState('');
  const [idCheckMessage, setIdCheckMessage] = useState('');
  const [tagMessage, setTagMessage] = useState('');
  const [isIdValid, setIsIdValid] = useState(false);

  const nickname = watch('nickname');
  const id = watch('id');
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
  const onSubmit = async (data) => {
    const formData = new FormData();

    const storedTags = localStorage.getItem('signUpTag');
    if (!storedTags) {
      setTagMessage('프로필 태그를 설정해 주세요.');
      return;
    }

    const jwt = localStorage.getItem('jwtToken');
    if (!jwt) {
      console.error('JWT 토큰이 없음.');
      return;
    }
    if (!isIdValid) {
      setIdCheckMessage('아이디 중복 체크를 먼저 해주세요.');
      return;
    }

    try {
      const req = new Blob(
        [
          JSON.stringify({
            username: data.id,
            nickname: data.nickname,
            jwt,
          }),
        ],
        { type: 'application/json' },
      );

      formData.append('req', req);
      if (data.profileImage && data.profileImage.length > 0) {
        formData.append('profileImage', data.profileImage[0]);
      }
      const result = await axios.post('/OAuth/initial', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('프로필 설정 성공', result.data);
      navigate('/welcome');
    } catch (error) {
      console.error('프로필 설정 실패', error.response?.data);
    }
  };

  return (
    <SocialSignUpUI
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      isValid={isValid}
      nickname={nickname}
      id={id}
      tagMessage={tagMessage}
      setNicknameMessage={setNicknameMessage}
      nicknameMessage={nicknameMessage}
      idCheckMessage={idCheckMessage}
      checkDuplicateId={checkDuplicateId}
      onSubmit={onSubmit}
    />
  );
}
