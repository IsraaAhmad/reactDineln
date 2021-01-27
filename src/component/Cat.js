import React from "react";
import './cat.css';



function App(Props) {
   const {tit,par,img}=Props;
  
   var sectionStyle = {
    backgroundImage: `url(${img})`,

  };
  return (
    <div className="dd">

      <div style={sectionStyle} className="imgCat">

    
        <div className="tit">{tit}</div>
        <div className="par">{par}</div>
       
      </div>
    </div>
   
    
  );
}

export default App;