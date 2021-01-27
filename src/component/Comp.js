import React from "react";
import rate from '../images/rate.png';
import { makeStyles } from '@material-ui/core/styles';
import Items from './Items';
import './item.css';
import {Link} from "react-router-dom";

function App(Props) {
  const {Cate} = Props;
  console.log(Cate);
  return (

    

    <div className="comp">
        <Link to={{
      pathname: "Details",
      state: { Cate:Cate,Number:"0",auth:true}
    }}>
        <Items Cate={Cate} Number="0"/>
        </Link>



        <Link  to={{
      pathname: "/Details",
      state: { Cate:Cate,
    Number:"1"}
    }}>
        <Items Cate={Cate} Number="1"/>
        </Link>



        <Link  to={{
      pathname: "/Details",
      state: { Cate:Cate,
    Number:"2"}
    }}>
        <Items Cate={Cate} Number="2"/>
        </Link>



        <Link  to={{
      pathname: "/Details",
      state: { Cate:Cate,
    Number:"3"}
    }}>
        <Items Cate={Cate} Number="3"/>
        </Link>
    </div>
  );
}

export default App;