export default function Answer({ answerText, onClick, index }) {
  return (
    <div className="answer">
      <button onClick={() => onClick(index)}>{answerText}</button>
    </div>
  );
}
