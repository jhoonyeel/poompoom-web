import * as S from './SignUpTag.styles';
import AgeSlider from '../../LoversProfile/component/AgeSlider';
import Gender from './component/Gender';
import Interest from './component/Interest';
import Job from './component/Job';

export default function SignUpUI({ buttons, setSelectedButton, setSelectedAgeLabel, selectedAgeLabel }) {
  return (
    <S.Container>
      <S.IntroText>프로필 태그 선택</S.IntroText>
      <S.BasketContainer>
        <S.BasketWrapper>
          태그 바구니
          <S.Basket>
            {buttons.map((button) => (
              <S.Button key={button.id}>{button.value}</S.Button>
            ))}
          </S.Basket>
        </S.BasketWrapper>
      </S.BasketContainer>
      <S.Container>
        <S.Wrapper>
          1. 나이
          <AgeSlider
            setSelectedButton={(value) => setSelectedButton(1, value)}
            setSelectedAgeLabel={setSelectedAgeLabel}
          />
          <div>{selectedAgeLabel}</div>
        </S.Wrapper>
        <S.Wrapper>
          2. 성별
          <Gender setSelectedButton={(value) => setSelectedButton(2, value)} />
        </S.Wrapper>
        3. 직업 <Job setSelectedButton={(value) => setSelectedButton(3, value)} /> 4. 관심사{' '}
        <Interest setSelectedButton={(value) => setSelectedButton(4, value)} />
      </S.Container>

      <S.SubmitButton>회원가입</S.SubmitButton>
    </S.Container>
  );
}
