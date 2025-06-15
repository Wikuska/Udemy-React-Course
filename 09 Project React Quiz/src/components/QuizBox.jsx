import { useCallback, useState } from "react";
import QUESTIONS from "../../questions";
import Summary from "./Summary";
import QuestionTimer from "./QuestionTimer";

export default function QuizBox() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[currentQuestionIndex];
  const shuffledAnswers = [...QUESTIONS[currentQuestionIndex].answers];
  shuffledAnswers.sort(() => Math.random() - 0.5);
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
    return <Summary />;
  }

  return (
    <div id="quiz">
      <div id="questions">
        <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer} />
        <h2>{currentQuestion.text}</h2>
        <ul id="answers">
          {shuffledAnswers.map((answer) => (
            <li key={answer} className="answer">
              <button onClick={() => handleChooseAnswer(answer)}>
                {answer}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
