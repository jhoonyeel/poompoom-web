import AgeSlider from '../../../components/ProfileTag/AgeSlider';
import Job from '../../../components/ProfileTag/Job';
import Gender from '../../../components/ProfileTag/Gender';
import Interest from '../../../components/ProfileTag/Interest';
import * as S from './SignUpTag.styles';

export default function SignUpUI({ buttons, setSelectedButton, setSelectedAgeLabel, selectedAgeLabel, onClickToBack }) {
  return (
    <S.ContainerS>
      <S.IntroText>프로필 태그 선택</S.IntroText>
      <S.BasketContainer>
        <S.BasketWrapper>
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
        <S.Wrapper>
          3. 직업 <Job setSelectedButton={(value) => setSelectedButton(3, value)} />{' '}
        </S.Wrapper>
        <S.Wrapper>
          4. 관심사
          <Interest setSelectedButton={(value) => setSelectedButton(4, value)} />
        </S.Wrapper>
      </S.Container>

      <S.SubmitButton onClick={onClickToBack}>회원가입</S.SubmitButton>
    </S.ContainerS>
  );
}
