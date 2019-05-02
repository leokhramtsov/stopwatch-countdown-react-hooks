import React from "react";
import ReactDOM from "react-dom";
import Stopwatch from "./components/stopwatch";
import Countdown from "./components/countdown";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <h1>Playing with time... [usingHooks]</h1>
      <Countdown />
      <hr />
      <Stopwatch />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
