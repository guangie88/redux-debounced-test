import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <label>Host</label>
        <input type="text" value="https://www.google.com" />
        <br />

        <label>Debounce MS</label>
        <input type="text" value="500" />

        <button>Send GET</button>
      </div>
    );
  }
}

export default App;
