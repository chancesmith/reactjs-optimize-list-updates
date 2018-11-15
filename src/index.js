import React from "react";
import ReactDOM from "react-dom";
import Lists from "./Lists";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Lists />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
