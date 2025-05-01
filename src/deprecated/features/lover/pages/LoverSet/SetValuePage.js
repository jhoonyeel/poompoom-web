import * as S from './style';
import { ConnectQnA } from './components/SetConstant';
import { useQuestion } from '../../hooks/useQuestion';
import QuestionRenderer from './components/SetQuestion';

export default function SetValuePage() {
  const { currentQuestion, answers, isModalVisible, handleScroll, handleAnswer, handleComplete, setIsModalVisible } =
    useQuestion(ConnectQnA);

  const lastQuestionMessage =
    currentQuestion === ConnectQnA.length - 1 ? '마지막 질문입니다!' : '스크롤을 내리거나 버튼을 클릭하세요!';

  return (
    <S.PageContainer onWheel={handleScroll}>
      <S.Header>
        <S.Title>필수응답을 요하는 질문입니다.</S.Title>
        <S.SubTitle>언제든 수정 가능하나 사실기반 답변을 추천합니다!</S.SubTitle>
      </S.Header>

      <QuestionRenderer
        questionsWithAnswers={ConnectQnA}
        currentQuestion={currentQuestion}
        answers={answers}
        handleAnswer={handleAnswer}
        lastQuestionMessage={lastQuestionMessage}
      />

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
