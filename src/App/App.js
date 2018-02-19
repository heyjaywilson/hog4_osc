import React, { Component } from "react";
import "./App.css";
import "../osc";

class App extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    console.log("clicked");
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Hog 4 OSC</h1>
        </header>
        <p className="App-intro">
          <button onClick={this.handleClick}>Go Cue List 1</button>
        </p>
        <footer>This is not supported by HES.</footer>
      </div>
    );
  }
}

export default App;
