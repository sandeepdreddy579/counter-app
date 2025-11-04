import React from "react";

function ScoreCardOperations(props) {
  console.log("scorecrd operations rendering");
  const {
    incrementCounter,
    // incrementCounter5,
    // increment5Counter,
    // incrementminus1Counter,
  } = props;

  // function incrementCounterHandler() {
  //   incrementCounter(5);
  // }
  return (
    <div className="buttondiv flexCenter">
      <button className="btn1" onClick={() => incrementCounter(1)}>
        +1
      </button>
      <button
        className="btn1"
        onClick={function () {
          incrementCounter(-1);
        }}
      >
        -1
      </button>
      <button
        className="btn1"
        onClick={function () {
          incrementCounter(5);
        }}
      >
        +5
      </button>
      <button
        className="btn1"
        onClick={function () {
          incrementCounter(-5);
        }}
      >
        -5
      </button>
      <button
        className="btn1"
        onClick={function () {
          incrementCounter(-5);
        }}
      >
        Refresh
      </button>
    </div>
  );
}

export default ScoreCardOperations;
