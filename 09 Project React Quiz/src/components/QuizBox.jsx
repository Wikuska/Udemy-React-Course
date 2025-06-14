import { useEffect, useState } from "react";
import Question from "./Question";
import QUESTIONS from "../../questions";
import Summary from "./Summary";

export default function QuizBox() {
  const [userAnswers, setUserAnswers] = useState([]);

  const currentQuestionIndex = userAnswers.length;
  const currentQuestion = QUESTIONS[currentQuestionIndex];
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
      <Question text={currentQuestion.text} />
      <ul id="answers">
        {currentQuestion.answers.map((answer) => (
          <li key={answer} className="answer">
            <button onClick={() => handleChooseAnswer(answer)}>{answer}</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
