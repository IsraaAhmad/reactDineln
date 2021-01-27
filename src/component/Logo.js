
import React from "react";
import vector from '../images/Vector.png'
import vector1 from '../images/Vector1.png';
import vector2 from '../images/Vector2.png';

import '../App.css';
function App() {
  return (
    <div className="tlogo">
    <img src={vector} className="circle" alt=""></img>
    <img src={vector1} className="knife" alt=""></img>
    <img src={vector2} className="spoon" alt=""></img>
    <div className="title">DineIn</div>
    
    </div>
  );
}

export default App;
