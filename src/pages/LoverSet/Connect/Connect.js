import { useEffect, useState } from 'react';
import * as S from './Connect.style';
import { questionsWithAnswers } from './Constant';

export default function ConnectPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questionsWithAnswers.length).fill(null));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  const lastQuestionMessage =
    currentQuestion === questionsWithAnswers.length - 1 ? '마지막 질문입니다!' : '스크롤을 내리거나 버튼을 클릭하세요!';

  const handleScroll = (e) => {
    if (currentQuestion === questionsWithAnswers.length - 1 && e.deltaY > 0) {
      return; // 마지막 질문에서는 추가 스크롤 처리 안 함
    }

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
      document.body.style.overflow = 'auto';
    } else {
      document.body.style.overflow = 'hidden';
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
    if (answers.includes(null)) {
      setIsModalVisible(true);
    } else {
      console.log('모든 질문에 응답하셨습니다!');
    }
  };

  return (
    <S.PageContainer onWheel={handleScroll}>
      <S.Header>
        <S.Title>필수응답을 요하는 질문입니다.</S.Title>
        <S.SubTitle>언제든 수정 가능하나 사실기반 답변을 추천합니다!</S.SubTitle>
      </S.Header>

      <S.QuestionSection>
        {questionsWithAnswers.map(({ question, answers: options }, index) => (
          <S.QuestionContainer key={question} isVisible={currentQuestion === index}>
            <S.Seq>
              QnA.{currentQuestion + 1}/{questionsWithAnswers.length}
            </S.Seq>
            <S.Question>{question}</S.Question>
            <S.AnswerContainer>
              {options.map((option) => (
                <S.Answer
                  key={option}
                  isSelected={answers[index] === option}
                  onClick={() => handleAnswer(index, option)}
                >
                  {option}
                </S.Answer>
              ))}
            </S.AnswerContainer>
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
