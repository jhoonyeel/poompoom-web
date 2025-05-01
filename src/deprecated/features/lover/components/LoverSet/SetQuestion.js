import styled from 'styled-components';

export default function SetQuestion({
  questionsWithAnswers,
  currentQuestion,
  answers,
  handleAnswer,
  lastQuestionMessage,
}) {
  return (
    <QuestionSection>
      {questionsWithAnswers.map(({ question, Component, optional, answers: options }, index) => (
        <QuestionContainer key={question} isVisible={currentQuestion === index}>
          <Seq>
            QnA.{index + 1}/{questionsWithAnswers.length}
          </Seq>
          <Question>{question}</Question>
          {Component ? (
            <Component onAnswer={(answer) => handleAnswer(index, answer)} />
          ) : (
            <AnswerContainer>
              {options.map((option) => (
                <Answer key={option} isSelected={answers[index] === option} onClick={() => handleAnswer(index, option)}>
                  {option}
                </Answer>
              ))}
            </AnswerContainer>
          )}
          {optional && <OptionalText>(선택 사항)</OptionalText>}
          <FloatingText>{lastQuestionMessage}</FloatingText>
        </QuestionContainer>
      ))}
    </QuestionSection>
  );
}
const AnswerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const Answer = styled.div`
  margin: auto;
  width: fit-content;
  font-size: 24px;
  padding: 10px 20px;
  border: 1px solid #cfd4d3;
  border-radius: 5px;
  cursor: pointer;
  background-color: ${({ isSelected }) => (isSelected ? '#06564e' : '#fff')};
  color: ${({ isSelected }) => (isSelected ? '#fff' : '#06564e')};
  font-weight: ${({ isSelected }) => (isSelected ? 'bold' : 'normal')};
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #047d70;
    color: #fff;
  }
`;

const Seq = styled.div`
  margin-bottom: 50px;
  color: #b92929;
  font-size: 18px;
  font-weight: 800;
`;

const QuestionSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const QuestionContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? 'auto' : 'none')};
  transition: opacity 0.3s ease-in-out;
`;

const Question = styled.div`
  font-weight: bold;
  margin-bottom: 30px;
  font-size: 36px;
  padding-bottom: 50px;
`;

const OptionalText = styled.div`
  color: #9d9d9d;
  font-size: 18px;
  margin-top: 10px;
`;

const FloatingText = styled.div`
  font-size: 15px;
  color: #9d9d9d;
  margin-top: 10px;
`;
