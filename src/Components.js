import './App.css';
import { Component } from 'react';
class ClassComponent extends Component{
  render(){
    return(
    <div className="box pink" id="classComponent">
        <h2>This is created using class Component</h2>
        <p className="black">This is done using external CSS</p>
        <p className="blue" style={{color:"blue"}}>This is done using inline CSS</p>
    </div>
    )
  }
}

function FunctionalComponent (){
  return(
    <div className="box" id="FunctionalComponent">
        <h2>This is created using functional Component</h2>
        <p className="black">This is done using external CSS</p>
        <p className="blue" style={{color:"blue"}}>This is done using inline CSS</p>
    </div>
  )
}

export {ClassComponent,FunctionalComponent};
