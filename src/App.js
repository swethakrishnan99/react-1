import Main from "./components/Main/Main";
import React, { Component } from "react";
import "./App.css";

export default class App extends Component {
  render() {
    return (
      <>
        <h1>Styling using Functional and Class Components</h1>
        <div className="flex-row">
          <Main />
        </div>
      </>
    );
  }
}
