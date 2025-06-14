import { useEffect, useState } from "react";
import Answer from "./Answer";
import Question from "./Question";
import questions from "../../questions";

export default function QuizBox() {
  const [currentQuestionId, setCurrentQuestionId] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);

  useEffect(() => {
    console.log(userAnswers);
  }, [userAnswers]);

  useEffect(() => {
    console.log(currentQuestionId);
  }, [currentQuestionId]);

  const currentQuestion = questions[currentQuestionId];

  function onChooseAnswer(answerIndex) {
    setUserAnswers((prevAnswers) => {
      return {
        ...prevAnswers,
        [currentQuestion.id]: answerIndex,
      };
    });
    setCurrentQuestionId((prevId) => {
      if (questions.length - 1 > prevId) {
        return prevId + 1;
      } else {
        console.log("game ends")
        return prevId
      }
    });
  }

  return (
    <div id="quiz">
      <Question text={currentQuestion.text} />
      <div id="answers">
        {currentQuestion.answers.map((answer, index) => (
          <Answer
            key={index}
            answerText={answer}
            onClick={onChooseAnswer}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
