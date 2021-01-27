import React from "react";
import Header4 from '../component/Header4';
import ice from '../images/ice.png';
import './Details.css';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { ShoppingCartOutlined } from '@ant-design/icons';
import Ingredients from '../component/Ingredients.js';
import Data from '../component/Data';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";




function App() {
  let history = useHistory();
  let location = useLocation();
  let Cate;
  let Number;
  let flag = true;
  const {state} = location;
  if(state === undefined){
    flag=false;
    history.replace("/")
  }
  if(flag){
  Cate = state.Cate;
  Number = state.Number;

  var x1 = Data[Cate][Number].label;
  var x2 = Data[Cate][Number].reviews;
  var x3 = Data[Cate][Number].image;
  var x4 = Data[Cate][Number].time;
  var x5 = Data[Cate][Number].ingredientLines.length;
}
  return (
    <div >
      {flag&&<div>

    <Header4 tit={x1} Cate={Cate}/>
    <div className="detailsTotal">
        <div className="hh">
          <img src={x3} alt="" className="detailsImg"></img>
          <div className="p2">
               <Rate disabled defaultValue={5}/>
               <div className="p22">{x2} Reviews</div>
          </div>
          <div className="p3">{x1}</div>
          <div className="p4">
              <AccessTimeIcon style={{ color:"#6979F8" }}/>
              <div className="p44">{x4} minutes</div>
              <ShoppingCartOutlined className="shopping"style={{fontSize: '20px', color:"#6979F8" }}/>
              <div className="ingredients">{x5} ingredients </div>
          </div>
          <div className="p5">Making a milkshake is honestly as simple as blending 4 ingredients!
               A generous portion of ice cream, a splash of milk and some flavoring.
               The best ice cream is to use is full cream,
                full-fat ice cream because that’s where the flavor is! </div>
          <div>
              <Ingredients Cate={Cate} Number={Number}/>
          </div>
        </div>
    </div>
    
      </div>}
    </div>
  );
}

export default App;