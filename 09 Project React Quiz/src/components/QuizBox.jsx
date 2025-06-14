import Answer from "./Answer";
import Question from "./Question";

export default function QuizBox() {
  return (
    <div id="quiz">
      <Question />
      <div id="answers">
        <Answer>Answer 1</Answer>
        <Answer>Answer 2</Answer>
        <Answer>Answer 3</Answer>
        <Answer>Answer 4</Answer>
      </div>
    </div>
  );
}
