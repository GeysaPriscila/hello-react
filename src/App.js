import React from "react";
import "./styles.css";

import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";

const App = () => {
  return (
    <div className="App">
      <FirstComponent name="Geysa" />
      <SecondComponent name="Priscila" />
    </div>
  );
};

export default App;
