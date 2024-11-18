import { useEffect, useState } from 'react';
import * as S from './Recommend.style';
import Ling from '../../../components/Lover/Ling';
import Shoes from '../../../components/Lover/Shoes';
import Clothes from '../../../components/Lover/Clothes';
import UnderWare from '../../../components/Lover/UnderWare';

const questionsWithAnswers = [
  {
    question: 'Q1. 반지 사이즈를 선택해주세요.',
    Component: Ling,
  },
  {
    question: 'Q2. 신발 사이즈를 선택해주세요.',
    Component: Shoes,
  },
  {
    question: 'Q3. 옷 사이즈를 선택해주세요.',
    Component: Clothes,
  },
  {
    question: 'Q4. 속옷 사이즈를 선택해주세요. (선택 사항)',
    Component: UnderWare,
    optional: true,
  },
];

export default function RecommendPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questionsWithAnswers.length).fill(null));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const lastQuestionMessage =
    currentQuestion === questionsWithAnswers.length - 1 ? '마지막 질문입니다!' : '스크롤을 내리거나 버튼을 클릭하세요!';

  const handleScroll = (e) => {
    if (currentQuestion === questionsWithAnswers.length - 1 && e.deltaY > 0) return; // 마지막 질문에서는 추가 스크롤 처리 안 함
    const threshold = 100; // 스크롤 이동 임계값
    setScrollY((prev) => prev + e.deltaY);

    if (scrollY > threshold && currentQuestion < questionsWithAnswers.length - 1) {
      setScrollY(0);
      setCurrentQuestion((prev) => prev + 1);
    } else if (scrollY < -threshold && currentQuestion > 0) {
      setScrollY(0);
      setCurrentQuestion((prev) => prev - 1);
    }
  };

  useEffect(() => {
    if (currentQuestion === questionsWithAnswers.length - 1) {
      document.body.style.overflow = 'auto'; // 마지막 질문에서는 스크롤 활성화
    } else {
      document.body.style.overflow = 'hidden'; // 다른 질문에서는 스크롤 비활성화
    }
  }, [currentQuestion]);

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);

    if (questionIndex < questionsWithAnswers.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };

  const handleComplete = () => {
    if (answers.slice(0, -1).includes(null)) {
      // 선택 사항 질문 제외하고 확인
      setIsModalVisible(true);
    } else {
      console.log('모든 필수 질문에 응답하셨습니다!', answers);
    }
  };

  return (
    <S.PageContainer onWheel={handleScroll}>
      <S.Header>
        <S.Title>선물 추천에 사용될 정보입니다.</S.Title>
        <S.SubTitle>언제든 수정 가능하나 사실기반 답변을 추천합니다!</S.SubTitle>
      </S.Header>

      <S.QuestionSection>
        {questionsWithAnswers.map(({ question, Component, optional }, index) => (
          <S.QuestionContainer key={question} isVisible={currentQuestion === index}>
            <S.Seq>
              QnA.{currentQuestion + 1}/{questionsWithAnswers.length}
            </S.Seq>
            <S.Question>{question}</S.Question>
            <Component onAnswer={(answer) => handleAnswer(index, answer)} />
            {optional && <S.OptionalText>(선택 사항)</S.OptionalText>}
            <S.FloatingText>{lastQuestionMessage}</S.FloatingText>
          </S.QuestionContainer>
        ))}
      </S.QuestionSection>

      <S.CompleteButton onClick={handleComplete}>완료!</S.CompleteButton>

      {isModalVisible && (
        <S.Modal>
          <S.ModalContent>
            <S.CloseButton onClick={() => setIsModalVisible(false)}>x</S.CloseButton>
            <p style={{ color: 'red' }}>미응답 항목</p>
            <p>이 있어요!</p>
          </S.ModalContent>
        </S.Modal>
      )}
    </S.PageContainer>
  );
}
