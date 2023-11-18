import "./Summary.css";
import data from "../utils/data.js";
import SummaryCategory from "./SummaryCategory.jsx";

function Summary() {
  return (
    <div className="summary">
      <h2 className="summary__title">Summary</h2>
      {data.map(({ category, icon, score }) => {
        return (
          <SummaryCategory
            key={category}
            category={category}
            icon={icon}
            score={score}
          />
        );
      })}
      <button className="summary__btn">Continue</button>
    </div>
  );
}

export default Summary;
