import * as S from './Profile.styles';

import AgeSlider from '../component/AgeSlider';
import Interest from '../component/Interest';
import Job from '../component/Job';
import Purpose from '../component/Purpose';

import { ReactComponent as FirstBucket } from '../../../assets/LoverProfileFirstBucket.svg';
import { ReactComponent as FirstCalendar } from '../../../assets/LoverProfileFirstCalendar.svg';
import { ReactComponent as LastBucket } from '../../../assets/LoverProfileLastBucket.svg';
import { ReactComponent as LastLogo } from '../../../assets/LoverProfileLastLogo.svg';
import { ReactComponent as SpeechBubble } from '../../../assets/LoverProfileSpeechBubble.svg';
import { ReactComponent as ProfileEx } from '../../../assets/_LoverProfilePhoto.svg';

export default function ProfileUI({
  setSelectedButton,
  setSelectedAgeLabel,
  selectedAgeLabel,
  onClickSubmit,
  buttons,
}) {
  return (
    <S.Container>
      <S.HeadContainer>
        <S.IntroText>
          test 님의 연인
          <S.LoverName placeholder="이름 or 애칭 입력" /> 님의 프로필
        </S.IntroText>

        <S.BasketContainer>
          <S.BasketWrapper>
            <S.RoundButton />
          </S.BasketWrapper>

          <S.BasketWrapper>
            <S.SvgContainer>
              <FirstBucket />
              <S.ButtonWrapper>
                {buttons.map((button) => (
                  <S.Button key={button.id}>{button.value}</S.Button>
                ))}
              </S.ButtonWrapper>
            </S.SvgContainer>
          </S.BasketWrapper>
          <S.BasketWrapper>
            <FirstCalendar />
          </S.BasketWrapper>
        </S.BasketContainer>
        <S.CommentWrapper>
          <SpeechBubble />
          <S.SubText>사진을 등록하면 메인배너에서 사랑하는 이를 맘껏 볼 수 있어용</S.SubText>
        </S.CommentWrapper>
      </S.HeadContainer>
      <S.Gogosing onClick={onClickSubmit}>GOGOSING!</S.Gogosing>
      <S.Body>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q1</S.Num>
            <S.Text>나이</S.Text>
          </S.TextWrapper>

          <AgeSlider
            setSelectedButton={(value) => setSelectedButton(1, value)}
            setSelectedAgeLabel={setSelectedAgeLabel}
          />
          <div>{selectedAgeLabel}</div>
        </S.Wrapper>

        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q2</S.Num>
            <S.Text>관심사</S.Text>
          </S.TextWrapper>

          <Interest setSelectedButton={(value) => setSelectedButton(2, value)} />
        </S.Wrapper>
        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q3</S.Num>
            <S.Text>직업</S.Text>
          </S.TextWrapper>

          <Job setSelectedButton={(value) => setSelectedButton(3, value)} />
        </S.Wrapper>

        <S.Wrapper>
          <S.TextWrapper>
            <S.Num>Q4</S.Num>
            <S.Text>선물목적</S.Text>
          </S.TextWrapper>

          <Purpose setSelectedButton={(value) => setSelectedButton(4, value)} />
        </S.Wrapper>
      </S.Body>

      <S.Footer>
        <S.FooterText>
          <LastLogo />
          <S.FooterTextWrapper />
          <S.FooterText1>모든 질문에 응답하셨습니다! </S.FooterText1>
          <S.FooterText2>태그는 언제든 수정 가능합니다. 현재 프로필을 확인 후, 선물 추천을 받아보세요! </S.FooterText2>
          <S.FooterTextWrapper />
        </S.FooterText>
        <S.BasketContainer2>
          <S.BasketWrapper2>
            <S.SvgContainer2>
              <LastBucket />
              <S.ButtonWrapper2>
                {buttons.map((button) => (
                  <S.Button key={button.id}>{button.value}</S.Button>
                ))}
              </S.ButtonWrapper2>
            </S.SvgContainer2>
          </S.BasketWrapper2>
          <S.BasketWrapper2>
            <S.ProfileExeWrapper>
              <ProfileEx />
            </S.ProfileExeWrapper>
          </S.BasketWrapper2>
          <S.BasketWrapper2>
            <FirstCalendar />
          </S.BasketWrapper2>
        </S.BasketContainer2>
      </S.Footer>
    </S.Container>
  );
}
