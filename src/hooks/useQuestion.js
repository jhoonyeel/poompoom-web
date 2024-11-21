import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const defaultAnswers = { connect: false, recommend: false };

const initialAnswers = () => {
  const storedAnswers = localStorage.getItem('allAnswers');

  if (storedAnswers) {
    return JSON.parse(storedAnswers);
  }
  localStorage.setItem('allAnswers', JSON.stringify(defaultAnswers));
  return defaultAnswers;
};

export function useQuestion(questionsWithAnswers) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState(Array(questionsWithAnswers.length).fill(null));
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [allAnswers, setAllAnswers] = useState(initialAnswers);

  const navigate = useNavigate();

  const handleScroll = (e) => {
    if (currentQuestion === questionsWithAnswers.length - 1 && e.deltaY > 0) return;
    const threshold = 100;
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
    document.body.style.overflow = currentQuestion === questionsWithAnswers.length - 1 ? 'auto' : 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    }; // 언마운트
  }, [currentQuestion]);

  const handleAnswer = (questionIndex, answer) => {
    const newAnswers = [...answers];
    newAnswers[questionIndex] = answer;
    setAnswers(newAnswers);

    if (questionIndex < questionsWithAnswers.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    }
  };
  // 상태 변경 감지 및 로컬스토리지 업데이트
  useEffect(() => {
    localStorage.setItem('allAnswers', JSON.stringify(allAnswers));
  }, [allAnswers]);

  const updateConnect = () => {
    const currentPath = window.location.pathname;
    setAllAnswers((prev) => ({
      ...prev,
      [currentPath === '/lover/connect' ? 'connect' : 'recommend']: true,
    }));
  };

  const handleComplete = () => {
    if (answers.slice(0, -1).includes(null)) {
      setIsModalVisible(true);
    } else {
      updateConnect();
      setTimeout(() => {
        if (allAnswers.connect) {
          navigate('/lover/connect/guide');
        }
      }, 0);
    }
  };

  const handleCompleteEx = () => {
    updateConnect();
    setTimeout(() => {
      if (allAnswers.connect) {
        navigate('/lover/connect/guide');
      }
    }, 0);
  };

  return {
    currentQuestion,
    answers,
    isModalVisible,
    handleScroll,
    handleAnswer,
    handleComplete,
    setIsModalVisible,
    handleCompleteEx,
  };
}
