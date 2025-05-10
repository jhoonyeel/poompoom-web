/* eslint-disable react/jsx-props-no-spreading */
import { ReactComponent as SignUpTitle } from '../../../shared/assets/Login/CreateAccount.svg';
import { useInputFocus } from '../../../shared/hooks/useInputFocus';
import AuthFooterUI from '../../../widgets/footer/ui/AuthFooter';
import ProfileTag from '../../profile-tag/ui/ProfileTag';
import * as S from './Join.style';

export default function JoinUI({
  register,
  handleSubmit,
  errors,
  isValid,
  tagMessage,
  emailSentMessage,
  verificationMessage,
  sendEmailVerification,
  submitVerification,
  email,
  verificationCode,
  id,
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
        </S.Header>
        <ProfileTag /> <S.ErrorMessage>{tagMessage}</S.ErrorMessage>
        <S.HeaderText>information</S.HeaderText>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <S.InputWrapper>
              <S.InputLabel isFocused={isFocused.id} htmlFor="id">
                아이디(생성 이후 변경 불가)
              </S.InputLabel>
              <S.Input
                id="id"
                type="text"
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
            <S.InputWrapper>
              <S.InputLabel isFocused={isFocused.email} htmlFor="email">
                이메일
              </S.InputLabel>
              <S.Input
                id="email"
                type="email"
                {...register('email')}
                onFocus={() => handleFocus('email')}
                onBlur={(event) => handleBlur(event, 'email')}
              />
              <S.VerButton type="button" onClick={sendEmailVerification} disabled={!email}>
                이메일 인증
              </S.VerButton>
            </S.InputWrapper>
            <S.ErrorMessage>{errors.email?.message || emailSentMessage}</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputWrapper>
              <S.InputLabel isFocused={isFocused.verNum} htmlFor="verNum">
                인증번호
              </S.InputLabel>

              <S.Input
                id="verNum"
                type="text"
                {...register('verificationCode')}
                onFocus={() => handleFocus('verNum')}
                onBlur={(event) => handleBlur(event, 'verNum')}
              />
              <S.ErrorMessage>{errors.verificationCode?.message}</S.ErrorMessage>
              <S.VerButton type="button" onClick={submitVerification} disabled={!verificationCode}>
                인증번호 확인
              </S.VerButton>
            </S.InputWrapper>
            {verificationMessage && <S.ErrorMessage>{verificationMessage}</S.ErrorMessage>}
          </S.InputContainer>

          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.nickname} htmlFor="nickname">
              닉네임
            </S.InputLabel>
            <S.Input
              id="nickname"
              type="text"
              {...register('nickname')}
              onFocus={() => handleFocus('nickname')}
              onBlur={(event) => handleBlur(event, 'nickname')}
            />
            <S.ErrorMessage>{errors.nickname?.message}</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.pass} htmlFor="pass">
              비밀번호
            </S.InputLabel>
            <S.Input
              id="pass"
              type="password"
              {...register('password')}
              onFocus={() => handleFocus('pass')}
              onBlur={(event) => handleBlur(event, 'pass')}
            />
            <S.ErrorMessage>{errors.password?.message}</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.checkPass} htmlFor="checkPass">
              비밀번호 확인
            </S.InputLabel>
            <S.Input
              id="checkPass"
              type="password"
              {...register('confirmPassword')}
              onFocus={() => handleFocus('checkPass')}
              onBlur={(event) => handleBlur(event, 'checkPass')}
            />
            <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
          </S.InputContainer>
          <S.HeaderText>profile Image</S.HeaderText>
          <S.InputContainer>
            <S.FileInput type="file" {...register('file')} />
          </S.InputContainer>
          <S.HeaderText>lover information</S.HeaderText>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.loverEmail} htmlFor="loverEmail">
              이메일(연동을 원할 시 필수항목)
            </S.InputLabel>
            <S.Input
              id="loverEmail"
              type="email"
              onFocus={() => handleFocus('loverEmail')}
              onBlur={(event) => handleBlur(event, 'loverEmail')}
            />
          </S.InputContainer>
          <S.LinkWrapper>
            <S.LinkInnerWrapper>
              <S.CustomLink to="/">연인 아이디로 찾기</S.CustomLink>
              <S.Line>|</S.Line>
              <S.CustomLink to="/">연인 닉네임으로 찾기</S.CustomLink>
            </S.LinkInnerWrapper>
          </S.LinkWrapper>
          <S.LoverText>연인의 이메일/아이디를 등록하셔야 연동을 위한 코드가 발송됩니다.</S.LoverText>
          <S.LoginButton style={{ backgroundColor: isValid ? 'yellow' : '' }} type="submit">
            Join
          </S.LoginButton>
        </S.Form>
        <S.ErrorMessage>{tagMessage}</S.ErrorMessage>
      </S.LoginContainer>
      <AuthFooterUI />
    </>
  );
}
