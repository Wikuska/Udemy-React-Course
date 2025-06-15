import { useState } from "react";
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

  function handleChooseAnswer(selectedAnswer) {
    setUserAnswers((prevAnswers) => {
      return [...prevAnswers, selectedAnswer];
    });
  }

  if (quizIsComplete) {
    return <Summary />;
  }

  return (
    <div id="quiz">
      <div id="questions">
        <QuestionTimer timeout={10000} onTimeout={handleChooseAnswer(null)} />
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
