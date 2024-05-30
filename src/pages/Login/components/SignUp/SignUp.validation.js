import * as yup from 'yup';

export const schema = yup.object().shape({
  // name: yup
  //   .string()
  //   .min(2, '이름은 최소 2글자 이상입니다!')
  //   .max(10, '이름은 최대 10글자입니다!')
  //   .matches(
  //     /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/,
  //     '이름에 특수문자가 포함되거나 숫자로 시작하면 안됩니다.',
  //   )
  //   .required('이름을 입력해주세요.'),

  email: yup.string().email('이메일형식이 적합하지 않습니다.').required('이메일을 입력해주세요'),

  id: yup
    .string()
    .min(3, '3자 이상 입력해주세요.!')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/,
      'id에 특수문자가 포함되거나 숫자로 시작하면 안됩니다.',
    )
    .required('아이디를 입력해주세요.'),
  password: yup
    .string()
    .max(16, '비밀번호는 최대 16자리입니다!')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}[^\s]*$/,
      '알파벳, 숫자, 특수문자를 모두 포함한 8자 이상의 비공백 문자열을 입력하세요',
    )
    .required('비밀번호를 입력해주세요'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다')
    .required('비밀번호를 한번 더 입력해주세요.'),
});
