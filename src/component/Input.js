import React from "react";
function App(props) {
    const Hight = props.Hight;
    const text = props.text;
    const type = props.type;
    const value = props.value;
    const onChange = props.onChange;
    const mystyle = {
        top:Hight,
        left: "25%",
      };
    return (
      <div >
<input className="input" style={mystyle} placeholder={text} type={type} value={value} onChange={onChange} ></input>
       
      </div>
    );
  }
  
  export default App;
  