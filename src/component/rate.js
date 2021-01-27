import React from "react";
import rate from '../images/rate.png';
import './rate.css';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import Data from '../component/Data';

function App(Props) {
  const {Cate,Number} = Props;
  var x1 = Data[Cate][Number].label;
  
  var x2 = Data[Cate][Number].reviews;
  var x3 = Data[Cate][Number].image;
  return (
    <div className="rate">
        <img src={x3} alt="" className="imgRate"></img>
        <div className="ratetext">{x1}</div>
        <Rate className="rateicon" disabled defaultValue={4}/>
    </div>
  );
}

export default App;