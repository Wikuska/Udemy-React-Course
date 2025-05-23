import headerImg from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <div id="header">
      <img src={headerImg} alt="Money bag" />
      <h1>React Investment Calculator</h1>
    </div>
  );
}
