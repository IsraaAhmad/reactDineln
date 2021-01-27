
import React from "react";
import ege from '../images/ege.png';
import './item.css';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import Data from './Data';
function App(Props) {
  let {Cate,Number}=Props;

  var x1 = Data[Cate][Number].label;
  var x2 = Data[Cate][Number].reviews;
  var x3 = Data[Cate][Number].image;

  return (
    <div className="all">
        <div className="textItem">
            <div className="i1">{Cate}</div>
            <div className="i2">{x1}</div>
            <div className="i3"><Rate disabled defaultValue={5}/></div>
            <div className="i4">{x2} Reviews</div>

        </div>
        <img src ={x3} alt="" className="imgItem"></img>
    </div>
  );
}

export default App;