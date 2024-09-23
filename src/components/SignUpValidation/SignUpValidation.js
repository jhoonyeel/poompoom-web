import * as yup from 'yup';

export const schema = yup.object().shape({
  email: yup.string().email('이메일형식이 적합하지 않습니다.').required('이메일을 입력해주세요.'),

  verificationCode: yup.string().required('이메일 인증을 완료해주세요.'),

  id: yup
    .string()
    .min(4, '4자 이상 입력해주세요.')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/,
      '아이디에 특수문자를 포함하거나 숫자로 시작할 수 없습니다.',
    )
    .required('아이디를 입력해주세요.'),
  nickname: yup
    .string()
    .min(2, '닉네임은 최소 2자 이상이어야 합니다.')
    .max(10, '닉네임은 최대 10자까지 가능합니다.')
    .matches(/^[가-힣a-zA-Z0-9_]+$/, '닉네임은 한글, 영문, 숫자, 언더바(_)만 허용됩니다.')
    .required('닉네임을 입력해주세요'),

  password: yup
    .string()
    .max(16, '비밀번호는 최대 16자입니다.')
    .matches(
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}[^\s]*$/,
      '알파벳, 숫자, 특수문자를 모두 포함한 8자 이상의 비공백 문자열을 입력하세요.',
    )
    .required('비밀번호를 입력해주세요.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], '비밀번호가 일치하지 않습니다.')
    .required('비밀번호를 한번 더 입력해주세요.'),
});
