import * as S from './QuickGift.styles';

import AgeSlider from '../AgeSlider';
import Interest from '../component/Interest';
import Job from '../component/Job';
import Purpose from '../component/Purpose';

import { ReactComponent as Box1 } from '../../../../../assets/Group 382.svg';
import { ReactComponent as Box2 } from '../../../../../assets/Group 381.svg';
import { ReactComponent as Comment } from '../../../../../assets/Union.svg';
import { ReactComponent as Box3 } from '../../../../../assets/Group22.svg';
import { ReactComponent as Footer } from '../../../../../assets/Group 373.svg';
import { ReactComponent as ProfileExe } from '../../../../../assets/Mask group.svg';

export default function QuickGiftUI({
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
          <S.LoverName placeholder="이름or애칭" /> 님의 프로필
        </S.IntroText>

        <S.BasketContainer>
          <S.BasketWrapper>
            <S.RoundButton />
          </S.BasketWrapper>

          <S.BasketWrapper>
            <S.SvgContainer>
              <Box1 />
              <S.ButtonWrapper>
                {buttons.map((button) => (
                  <S.Button key={button.id}>{button.value}</S.Button>
                ))}
              </S.ButtonWrapper>
            </S.SvgContainer>
          </S.BasketWrapper>
          <S.BasketWrapper>
            <Box2 />
          </S.BasketWrapper>
        </S.BasketContainer>
        <S.CommentWrapper>
          <Comment />
          <S.SubText>사진을 등록 시 , 메인배너에 뜨게 되 사랑하는 이를 맘껏 볼 수 있어용</S.SubText>
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
          <Footer />
          <S.FooterTextWrapper />
          <S.FooterText1>모든 질문에 응답하셨습니다! </S.FooterText1>
          <S.FooterText2>태그는 언제든 수정 가능합니다. 현재 프로필을 확인 후, 선물 추천을 받아보세요! </S.FooterText2>
          <S.FooterTextWrapper />
        </S.FooterText>
        <S.BasketContainer2>
          <S.BasketWrapper2>
            <S.SvgContainer2>
              <Box3 />
              <S.ButtonWrapper2>
                {buttons.map((button) => (
                  <S.Button key={button.id}>{button.value}</S.Button>
                ))}
              </S.ButtonWrapper2>
            </S.SvgContainer2>
          </S.BasketWrapper2>
          <S.BasketWrapper2>
            <S.ProfileExeWrapper>
              {' '}
              <ProfileExe />
            </S.ProfileExeWrapper>
          </S.BasketWrapper2>
          <S.BasketWrapper2>
            <Box2 />
          </S.BasketWrapper2>
        </S.BasketContainer2>
      </S.Footer>
    </S.Container>
  );
}
