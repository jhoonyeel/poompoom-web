/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
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

  const onSubmit = (data) => {
    console.log(data);
    reset();
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
