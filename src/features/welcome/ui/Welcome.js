import { useNavigate } from 'react-router-dom';
import { ReactComponent as Calender } from '../assets/Calender.svg';
import { ReactComponent as Location } from '../assets/Location.svg';
import { ReactComponent as Present } from '../assets/Present.svg';
import { ReactComponent as Title } from '../assets/Welcome.svg';
import * as S from './Welcomes.styles';

const Welcome = () => {
  const navigate = useNavigate();
  const onClickToLogin = () => {
    navigate('/login');
  };

  return (
    <S.Container>
      <Title />
      <S.TextWrapper>
        <S.Text>품품과 함께 해주셔서 감사합니다.</S.Text>
        <S.Text>어떤 기능이 있는지 둘러볼까요?</S.Text>
      </S.TextWrapper>
      <S.SvgContainer>
        <S.SvgWrapper>
          <S.SvgText>선물추천기능</S.SvgText>
          <Present />
        </S.SvgWrapper>
        <S.SvgWrapper>
          <S.SvgText>캘린더 기능</S.SvgText>
          <Calender />
        </S.SvgWrapper>
        <S.SvgWrapper>
          <S.SvgText>데이트 코스 추천</S.SvgText>
          <Location />/
        </S.SvgWrapper>
      </S.SvgContainer>

      <S.TextWrapper>
        <S.Text>생년월일, 기념일 등을 기입해주셔야 활성화됩니다.</S.Text> <S.Text>바로 하러 가볼까요?</S.Text>
      </S.TextWrapper>
      <S.Button onClick={onClickToLogin}>고고싱</S.Button>
    </S.Container>
  );
};

export default Welcome;
