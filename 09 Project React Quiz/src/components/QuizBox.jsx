import { useCallback, useState } from "react";
import QUESTIONS from "../../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function QuizBox() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleChooseAnswer = useCallback(function handleChooseAnswer(
    selectedAnswer
  ) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleChooseAnswer(null);
  }, []);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers}/>;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        index={currentQuestionIndex}
        onSelectAnswer={handleChooseAnswer}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
