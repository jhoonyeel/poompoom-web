import * as S from './style';
import { recommendQnA } from './components/SetConstant';
import { useQuestion } from '../../hooks/useQuestion';
import QuestionRenderer from './components/SetQuestion';

export default function SetRecommendPage() {
  const { currentQuestion, answers, isModalVisible, handleScroll, handleAnswer, handleCompleteEx, setIsModalVisible } =
    useQuestion(recommendQnA);

  const lastQuestionMessage =
    currentQuestion === recommendQnA.length - 1 ? '마지막 질문입니다!' : '스크롤을 내리거나 버튼을 클릭하세요!';

  return (
    <S.PageContainer onWheel={handleScroll}>
      <S.Header>
        <S.Title>선물 추천에 사용될 정보입니다.</S.Title>
        <S.SubTitle>언제든 수정 가능하나 사실기반 답변을 추천합니다!</S.SubTitle>
      </S.Header>

      <QuestionRenderer
        questionsWithAnswers={recommendQnA}
        currentQuestion={currentQuestion}
        answers={answers}
        handleAnswer={handleAnswer}
        lastQuestionMessage={lastQuestionMessage}
      />

      <S.CompleteButton onClick={handleCompleteEx}>완료!</S.CompleteButton>

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
