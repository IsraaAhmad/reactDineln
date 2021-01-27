
import React, { useState } from "react";
import './offer.css';
import gift from "../images/gift.png";
function App() {

    
  return (
    <div className="gifttotal">
    <div className="gift">
        <div className="top"><img src={gift} alt="" className="giftimage"></img></div>
        <div className="get20">Get 20 credits for inviting a friend</div>
        <div className="par">Enter a friends email address and when they add credits you will get 20 credits on us!</div>
        <div className="displayinput"><input className="inputgift" placeholder="Enter your Email"></input></div>
      
    </div>
    </div>
  );
}

export default App;