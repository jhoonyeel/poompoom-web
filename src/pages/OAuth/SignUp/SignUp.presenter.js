/* eslint-disable react/jsx-props-no-spreading */
import * as S from './SignUp.styles';
import { ReactComponent as SignUpTitle } from '../../../assets/Login/CreateAccount.svg';
import { useInputFocus } from '../../../hooks/useInputFocus';
import AuthFooterUI from '../../../atoms/AuthFooter';
import ProfileTag from '../../../components/ProfileTag/ProfileTag';

export default function SocialSignUpUI({
  register,
  handleSubmit,
  errors,
  isValid,
  tagMessage,
  id,
  nicknameMessage,
  idCheckMessage,
  checkDuplicateId,
  onSubmit,
}) {
  const { isFocused, handleFocus, handleBlur } = useInputFocus();

  return (
    <>
      <S.LogoSvg />
      <S.LoginContainer>
        <S.Header>
          <SignUpTitle />
          <S.SocialText>with-Social</S.SocialText>
        </S.Header>
        <ProfileTag />
        <S.ErrorMessage>{tagMessage}</S.ErrorMessage>

        <S.HeaderText>information</S.HeaderText>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <S.InputWrapper>
              <S.InputLabel isFocused={isFocused.id} htmlFor="id">
                아이디(생성 이후 변경 불가)
              </S.InputLabel>
              <S.Input
                id="id"
                {...register('id')}
                onFocus={() => handleFocus('id')}
                onBlur={(event) => handleBlur(event, 'id')}
              />
              <S.VerButton type="button" onClick={checkDuplicateId} disabled={!id}>
                중복 확인
              </S.VerButton>
            </S.InputWrapper>
            <S.ErrorMessage>{errors.id?.message || idCheckMessage}</S.ErrorMessage>
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.nickname} htmlFor="nickname">
              닉네임
            </S.InputLabel>
            <S.Input
              id="nickname"
              {...register('nickname')}
              onFocus={() => handleFocus('nickname')}
              onBlur={(event) => handleBlur(event, 'nickname')}
            />
            <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
            {nicknameMessage && <S.ErrorMessage>{nicknameMessage}</S.ErrorMessage>}
          </S.InputContainer>

          <S.HeaderText>Profile Image</S.HeaderText>
          <S.InputContainer>
            <S.FileInput type="file" {...register('file')} />
          </S.InputContainer>

          <S.LoginButton style={{ backgroundColor: isValid ? 'yellow' : '' }} type="submit">
            Join
          </S.LoginButton>
        </S.Form>
      </S.LoginContainer>
      <AuthFooterUI />
    </>
  );
}
