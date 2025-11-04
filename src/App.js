import { useState } from "react";
import "./App.css";
import ScoreCard from "./components/scorecard/ScoreCard";
import ScoreCardOperations from "./components/scorecardoperations/ScoreCardOperations";
import Message from "./components/message/Message";

function App() {
  let [score, scoreFunc] = useState(100);
  console.log("app component rendering", score);

  // const [score, scoreinc] = useState(0);
  // console.log(score);
  function incrementCounter(value) {
    console.log("i am incrementing by", value);
    if (value === 0) {
      score = 0;
    } else {
      score = score + value;
    }
    scoreFunc(score);
    // scoreFunc(score + 1);
    console.log("updated score", score);
  }
  // function incrementCounter5() {
  //   console.log("i am incrementing 5");
  //   score = score + 5;
  //   scoreFunc(score);
  //   // scoreFunc(score + 1);
  //   console.log("updated score", score);
  // }
  // function increment5Counter() {
  //   console.log("i am incrementing 5");
  //   score = score - 5;
  //   scoreFunc(score);
  //   // scoreFunc(score + 1);
  //   console.log("updated score", score);
  // }
  // function incrementminus1Counter() {
  //   console.log("i am incrementing 5");
  //   score = score - 1;
  //   scoreFunc(score);
  //   // scoreFunc(score + 1);
  //   console.log("updated score", score);
  // }
  return (
    <div className="App">
      <div className="container">
        <ScoreCard score={score} />
        <ScoreCardOperations
          // incrementminus1Counter={incrementminus1Counter}
          incrementCounter={incrementCounter}
          // incrementCounter5={incrementCounter5}
          // increment5Counter={increment5Counter}
        />
      </div>
    </div>
  );
}

export default App;
