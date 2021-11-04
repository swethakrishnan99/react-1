import React, { Component } from "react";

export default class ClassComponent extends Component {
  render() {
    return (
      <div className="box">
        <h2>This is created using class Component</h2>
        <p>This is done using external CSS</p>
        <p style={{ color: "blue" }}>This is done using inline CSS</p>
      </div>
    );
  }
}
