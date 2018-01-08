import React, { Component } from "react";
import Counter from "./components/Counter";
import "./App.css";

class App extends Component {
  render() {
    return <Counter key="hello" time={500} />;
  }
}

export default App;
