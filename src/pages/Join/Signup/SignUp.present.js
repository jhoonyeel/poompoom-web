/* eslint-disable react/jsx-props-no-spreading */
import { useState } from 'react';
import * as S from './Signup.style';
import { ReactComponent as Title } from '../../../assets/Login/CreateAccount.svg';

export default function SignupUI({
  register,
  handleSubmit,
  errors,
  isValid,
  //   emailSentMessage,
  //   verificationMessage,
  //   sendEmailVerification,
  //   submitVerification,
  //   email,
  //   verificationCode,
  onSubmit,
  onClickToWelcome,
}) {
  const [isFocused, setIsFocused] = useState({
    inputId: false,
    inputEmail: false,
    inputNickname: false,
    pass: false,
    checkPass: false,
  });

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (event, field) => {
    if (!event.target.value) {
      setIsFocused({ ...isFocused, [field]: false });
    }
  };

  return (
    <>
      <S.LogoSvg />
      <S.LoginContainer>
        <Title />
        <S.HeaderText>information</S.HeaderText>
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.inputId} htmlFor="inputId">
              아이디
            </S.InputLabel>
            <S.Input
              type="text"
              {...register('id')}
              onFocus={() => handleFocus('inputId')}
              onBlur={(event) => handleBlur(event, 'inputId')}
            />
            <S.ErrorMessage>{errors.id?.message}</S.ErrorMessage>
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.inputEmail} htmlFor="inputEmail">
              이메일
            </S.InputLabel>

            <S.Input
              type="email"
              {...register('email')}
              onFocus={() => handleFocus('inputEmail')}
              onBlur={(event) => handleBlur(event, 'inputEmail')}
            />
            <S.ErrorMessage>{errors.email?.message}</S.ErrorMessage>

            {/* 이메일 인증 디자인 보류 : 
            <button type="button" onClick={sendEmailVerification} disabled={!email}>
              이메일 인증 요청
            </button>
            {emailSentMessage && <S.ErrorMessage>{emailSentMessage}</S.ErrorMessage>}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel>인증번호</S.InputLabel>
            <input type="text" {...register('verificationCode')} />
            <S.ErrorMessage>{errors.verificationCode?.message}</S.ErrorMessage>
            <button type="button" onClick={submitVerification} disabled={!verificationCode}>
              인증번호 확인
            </button>
            {verificationMessage && <S.ErrorMessage>{verificationMessage}</S.ErrorMessage>} */}
          </S.InputContainer>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.pass} htmlFor="pass">
              비밀번호
            </S.InputLabel>
            <S.Input
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
              type="password"
              {...register('confirmPassword')}
              onFocus={() => handleFocus('checkPass')}
              onBlur={(event) => handleBlur(event, 'checkPass')}
            />
            <S.ErrorMessage>{errors.confirmPassword?.message}</S.ErrorMessage>
          </S.InputContainer>

          {/* 프로필 이미지 디자인 보류:  <S.InputLabel>프로필 이미지</S.InputLabel>
            <input type="file" {...register('file')} /> */}
          <S.HeaderText>lover information</S.HeaderText>
          <S.InputContainer>
            <S.InputLabel isFocused={isFocused.loverEmail} htmlFor="loverEmail">
              이메일(연동을 원할 시 필수항목)
            </S.InputLabel>
            <S.Input
              type="email"
              onFocus={() => handleFocus('loverEmail')}
              onBlur={(event) => handleBlur(event, 'loverEmail')}
            />
          </S.InputContainer>
          <S.LinkWrapper>
            <S.LinkInnerWrapper>
              <S.CustomLink to="/">아이디로 찾기</S.CustomLink>
              <S.Line>|</S.Line>
              <S.CustomLink to="/">닉네임으로 찾기</S.CustomLink>
            </S.LinkInnerWrapper>
          </S.LinkWrapper>
          <S.LoverText>연인의 이메일/아이디를 등록 하셔야 연동을 위한 코드가 발송됩니다.</S.LoverText>
          <S.LoginButton onClick={onClickToWelcome} style={{ backgroundColor: isValid ? 'yellow' : '' }} type="submit">
            Join
          </S.LoginButton>
        </S.Form>
      </S.LoginContainer>
      <S.FooterContainer>
        <S.FooterBenner />
        <S.MenuContainer>
          <S.MenuText>HOME</S.MenuText>
          <S.MenuText>MOOD VIEW</S.MenuText>
          <S.MenuText>MY LOVER</S.MenuText>
          <S.MenuText>OPTION</S.MenuText>
        </S.MenuContainer>
      </S.FooterContainer>
    </>
  );
}
