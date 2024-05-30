/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { schema } from './SignUp.validation';
import * as S from './SignUp.style';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // onchange 당 체크
  });

  const onSubmit = async (data) => {
    try {
      const result = await axios.post(`${process.env.REACT_APP_API_URL}/member/join`, {
        req: { username: data.email, password: data.password, nickname: data.id, profileTagIds: [0] },
        profileImage: '',
      });
      console.log('회원가입 성공', result.data);
      reset();
    } catch (error) {
      console.error('회원가입 실패', error.response?.data);
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
        <button style={{ backgroundColor: isValid ? 'yellow' : '' }} type="submit">
          회원가입
        </button>
      </S.SignUpContainer>
    </form>
  );
}

/* useForm =()=> {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  }; return [value, onChange];
} */
