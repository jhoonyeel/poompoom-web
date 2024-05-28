/* eslint-disable react/jsx-props-no-spreading */
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { schema } from './SignUp.validation';
import * as S from './SignUp.style';

export default function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    mode: 'onChange', // onchange 당 체크
  });

  const onSubmit = () => {
    console.log('전송');
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
          <S.InputLabel>이름</S.InputLabel>
          <input type="text" {...register('name')} />
          <S.ErrorMessage>{errors.name?.message}</S.ErrorMessage>
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
        <button type="submit">등록하기</button>
      </S.SignUpContainer>
    </form>
  );
}
