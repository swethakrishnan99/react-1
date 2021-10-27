import {ClassComponent,FunctionalComponent} from './Components';

function App(){
    const toggle =(e) => {
     const btn = e.target.id;
     if (btn ==="btn1"){
         let div = document .getElementById("FunctionalComponent");
         console.log(div.style.visibility);
         hide_Show(div);
         
     }
     else{
        let div = document .querySelector("#classComponent"); 
        hide_Show(div);
     }
    };

    const hide_Show = (div)=> {
        
    if (div.getAttribute("class")==="box hidden") {
        div.removeAttribute("class");
       div.setAttribute("class","box visible");
    } else {
       div.removeAttribute("class");
       div.setAttribute("class","box hidden");
    }
}
    
    return(
    <>
    <h1>Styling using Functional and Class Components</h1>
    <div className="flex">
        <button id="btn1" onClick={toggle}>To see styling in functional component</button>
        <button id="btn2" onClick={toggle}>To see styling in class component</button>
    </div>
    <div className="flex-colum">
        <FunctionalComponent/>
        <ClassComponent/>
    </div>
    </>
    )
};
export default App;