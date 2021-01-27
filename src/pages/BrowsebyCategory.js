import React from "react";
import Api from '../component/Api';
import Header3 from '../component/Header3';
import TopHead from '../component/TopHead';
import Comp from '../component/Comp';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";




function App() {
  let history = useHistory();
  let location = useLocation();
  let Cate;
  let flag =true;
    const {state} = location;
    if(state === undefined){
      flag=false;
      history.replace("/");
      
    } 
    else{
      Cate = state.Cate;
    }
  
    
  return (
    <div >
      <Header3/>
      <TopHead Cate={Cate}/>
      {flag&&<Comp Cate={Cate}/>}

      {/* <Api q={Cate} number="2"/> */}
    </div>
  );
}

export default App;
