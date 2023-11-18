import "./SummaryCategory.css";
function SummaryCategory({ icon, category, score }) {
  let categoryClass = "";

  if (category === "Reaction") {
    categoryClass = "red";
  } else if (category === "Memory") {
    categoryClass = "yellow";
  } else if (category === "Verbal") {
    categoryClass = "green";
  } else {
    categoryClass = "blue";
  }

  return (
    <div className={`category__card ${categoryClass}`}>
      <div className="category__card-title">
        <img src={icon} alt="category-icon" />
        <p className="category-title">{category}</p>
      </div>
      <p>
        <span className="score__actual">{score}</span>
        <span className="score__total"> / 100</span>
      </p>
    </div>
  );
}

export default SummaryCategory;
