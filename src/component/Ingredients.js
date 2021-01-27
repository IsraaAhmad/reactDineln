import React , { useState } from "react";
import '../pages/Details.css';
import Data from './Data';
function App(Props) {
   const {Cate,Number} = Props;
   var i = 0;
   var count = Data[Cate][Number].ingredientLines.length;
    var Arr = new Array(count); 
   for(i=0;i<count;i++){
       Arr[i]=Data[Cate][Number].ingredientLines[i];
       console.log(Arr[i]);
   }
   const listItems = Arr.map((inte) =>
               <li>{inte}</li>
              );
         
    return (
      <div >
          <div>
              <div className="b1">Ingredients</div>
              <div className="b2">
              <div>{listItems}</div>
              </div>

          </div>
      </div>
    );
  }
  
  export default App;
  