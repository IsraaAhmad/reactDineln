
import React from "react";
import Header from '../component/Header';
import Offer from '../component/Offer';
import Part2 from "../component/Part2.js";
import Api from "../component/Api";
import "./home.css";
import Gift from "../component/Gift";
import Part4 from "../component/Part4";
import Part5 from "../component/Part5";
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";




function App(Props) {
  let history = useHistory();
  let location = useLocation();
  const {state} = location;
  if(state === undefined){
    history.replace("/")
  }
 
  return (
    <div>

    <div className="home">
      <Header/>
      <Offer/>
      <Part2 />
      <Gift/>
      <Part4/>
      <Part5/>
    </div>
    </div>
  );
}

export default App;