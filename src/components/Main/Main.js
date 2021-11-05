import React from "react";
import { Component } from "react";
import ClassComponent from "../ClassComponent/ClassComponent";
import FunctionalComponents from "../FunctionalComponents/FunctionalComponents";

export default class Main extends Component {
  state = {
    isToggleOn1: false,
    isToggleOn2: false,
  };
  toggle1 = () => {
    this.setState((prevState) => {
      return { isToggleOn1: !prevState.isToggleOn1 };
    });
  };
  toggle2 = () => {
    this.setState((prevState) => {
      return { isToggleOn2: !prevState.isToggleOn2 };
    });
  };
  render() {
    return (
      <>
        <div className="flex-colum">
          <button id="btn1" onClick={this.toggle1}>
            To see styling in functional component
          </button>
          {this.state.isToggleOn1 && <ClassComponent />}
        </div>

        <div className="flex-colum">
          <button id="btn2" onClick={this.toggle2}>
            To see styling in class component
          </button>
          {this.state.isToggleOn2 && <FunctionalComponents />}
        </div>
      </>
    );
  }
}
