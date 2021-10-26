import {ClassComponent,FunctionalComponent} from './Components';

function App(){
    console.log(document.getElementById("btn1"));
    return(
    <>
    <h1>Styling using Functional and ClassComponents</h1>
    <div className="flex">
        <button id="btn1">To see styling in functional component</button>
        <button id="btn2">To see styling in class component</button>
    </div>
    <div className="flex">
        <FunctionalComponent/>
        <ClassComponent/>
    </div>
    </>
    )
};
export default App;