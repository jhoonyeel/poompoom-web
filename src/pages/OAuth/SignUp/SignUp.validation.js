import * as yup from 'yup';

export const schema = yup.object().shape({
  nickname: yup
    .string()
    .min(2, '닉네임은 최소 2자 이상이어야 합니다.')
    .max(10, '닉네임은 최대 10자까지 가능합니다.')
    .matches(/^[가-힣a-zA-Z0-9_]+$/, '닉네임은 한글, 영문, 숫자, 언더바(_)만 허용됩니다.')
    .required('닉네임을 입력해주세요'),

  id: yup
    .string()
    .min(4, '4자 이상 입력해주세요.')
    .matches(
      /^[가-힣a-zA-Z][^!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?\s]*$/,
      '아이디에 특수문자를 포함하거나 숫자로 시작할 수 없습니다.',
    )
    .required('아이디를 입력해주세요'),
});
