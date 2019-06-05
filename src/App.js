import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Edison</h1>
        <h1>Jenny</h1>
        <h1>Sofito</h1>
        <img src={logo} className="App-logo" alt="index" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn GitHUB
        </a>
      </header>
    </div>
  );
}

export default App;
