import { useNavigate } from 'react-router-dom';
import * as S from './setQuickGift.styles';

import AgeSlider from '../../component/AgeSlider';
import Interest from '../../component/Interest';
import Job from '../../component/Job';
import Purpose from '../../component/Purpose';

import { ReactComponent as FirstBucket } from '../../../../assets/LoverProfileFirstBucket.svg';
import { ReactComponent as FirstCalendar } from '../../../../assets/LoverProfileFirstCalendar.svg';
import { ReactComponent as SpeechBubble } from '../../../../assets/LoverProfileSpeechBubble.svg';

export default function SetQuickGiftUI({ uniqueData }) {
  const navigate = useNavigate();
  return (
    <S.Container>
      <S.HeadContainer>
        <S.IntroText>
          test 님의 연인
          <S.LoverName placeholder="이름or애칭" /> 님의 프로필
        </S.IntroText>

        <S.BasketContainer>
          <S.BasketWrapper>
            <S.RoundButton />
          </S.BasketWrapper>

          <S.BasketWrapper>
            <S.SvgContainer>
              <FirstBucket />
              <S.ButtonWrapper>
                {uniqueData &&
                  uniqueData.map((item) => (
                    <S.DataItem key={item.id}>
                      <S.DataNum>{item.id}</S.DataNum>
                      <S.DataValue>{item.name}</S.DataValue>
                    </S.DataItem>
                  ))}
              </S.ButtonWrapper>

              {/* <FirstCalendar />와 <Comment />는 위치가 그대로인가요? */}
            </S.SvgContainer>
          </S.BasketWrapper>
          <S.BasketWrapper>
            <FirstCalendar />
          </S.BasketWrapper>
        </S.BasketContainer>
        <S.CommentWrapper>
          <SpeechBubble />
          <S.SubText>사진을 등록 시 , 메인배너에 뜨게 되 사랑하는 이를 맘껏 볼 수 있어용</S.SubText>
        </S.CommentWrapper>
      </S.HeadContainer>

      <S.Gogosing
        onClick={() => {
          navigate('/lovers-profile');
        }}
      >
        edit gogosing!
      </S.Gogosing>
      <S.Body>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q1</S.Num>
            <S.Text>나이</S.Text>
          </S.TextWrapper>

          <AgeSlider />
        </S.Wrapper>

        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q2</S.Num>
            <S.Text>관심사</S.Text>
          </S.TextWrapper>

          <Interest />
        </S.Wrapper>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q3</S.Num>
            <S.Text>직업</S.Text>
          </S.TextWrapper>

          <Job />
        </S.Wrapper>

        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q4</S.Num>
            <S.Text>선물목적</S.Text>
          </S.TextWrapper>

          <Purpose />
        </S.Wrapper>
      </S.Body>
    </S.Container>
  );
}
