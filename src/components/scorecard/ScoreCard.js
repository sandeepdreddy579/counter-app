import React from "react";
import "../../App.css";
function ScoreCard(props) {
  console.log("scorecard rendering");
  let { score } = props;
  return (
    <div className="counter1 flexCenter">
      <h1 className="title">Score Card</h1>

      <h2 className="score">{score}</h2>
    </div>
  );
}

export default ScoreCard;
