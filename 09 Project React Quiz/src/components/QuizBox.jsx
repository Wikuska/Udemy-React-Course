import { useCallback, useState } from "react";
import QUESTIONS from "../../questions";
import Summary from "./Summary";
import Question from "./Question";

export default function QuizBox() {
  const [answerState, setAnswerState] = useState("");
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex =
    answerState === "" ? userAnswers.length : userAnswers.length - 1;
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const quizIsComplete = currentQuestionIndex === QUESTIONS.length;

  const handleChooseAnswer = useCallback(
    function handleChooseAnswer(selectedAnswer) {
      setAnswerState("answered");
      setUserAnswers((prevAnswers) => {
        return [...prevAnswers, selectedAnswer];
      });

      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[currentQuestionIndex].answers[0]) {
          setAnswerState("correct");
        } else {
          setAnswerState("wrong");
        }

        setTimeout(() => {
          setAnswerState("");
        }, 2000);
      }, 1000);
    },
    [currentQuestionIndex]
  );

  const handleSkipAnswer = useCallback(() => {
    handleChooseAnswer(null);
  }, []);

  if (quizIsComplete) {
    return <Summary />;
  }

  return (
    <div id="quiz">
      <Question
        key={currentQuestionIndex}
        questionText={currentQuestion.text}
        answers={currentQuestion.answers}
        onSelectAnswer={handleChooseAnswer}
        answerState={answerState}
        selectedAnswer={userAnswers[userAnswers.length - 1]}
        onSkipAnswer={handleSkipAnswer}
      />
    </div>
  );
}
