import React from "react";
import Rate1 from './rate';
import './rate.css';
import x1 from '../images/x1.png';
import {useState , useEffect} from "react";


function App(Props) {
  const {Cate} = Props;
  

  console.log("Cate");
 
    var sectionStyle = {
        backgroundImage: `url(${x1})`,
        width:'100vw',
    
      };
  return (
          <div className="tophead" style={sectionStyle}>
      <div className="c1">
        <div className="titel">{Cate}</div>
      </div>
      

      
    </div>
  );
}

export default App;