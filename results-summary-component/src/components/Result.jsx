import "./Result.css";

function Result() {
  return (
    <div className="result">
      <h2 className="result__title">Your Result</h2>
      <div className="result__display">
        <h2 className="result__score">76</h2>
        <h3 className="result__total">of 100</h3>
      </div>
      <h1 className="result__text">Great</h1>
      <p className="result__message">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
}

export default Result;
