import React from "react";
import Rate from './rate';
import './rate.css';
import { Link} from "react-router-dom";


function App(Props) {
  
  return (
      <div className="p4total">

    <div className="part4" >
  
    <Link to={{
  pathname: "/Details",
  state: { Cate:"Pastries",
Number:"2",auth:true}
}}>
      <Rate Cate="Pastries" Number="2"/>
        </Link>





        <Link to={{
  pathname: "/Details",
  state: { Cate:"Breakfast",
Number:"1"}
}}>
      <Rate Cate="Breakfast" Number="1"/>
        </Link>





        <Link to={{
  pathname: "/Details",
  state: { Cate:"Steak",
Number:"0"}
}}>
      <Rate Cate="Steak" Number="0"/>
        </Link>





        <Link to={{
  pathname: "/Details",
  state: { Cate:"Coffee",
Number:"1"}
}}>
      <Rate Cate="Coffee" Number="1"/>
        </Link>




        <Link to={{
  pathname: "/Details",
  state: { Cate:"Cake",
Number:"1"}
}}>
      <Rate Cate="Cake" Number="1"/>
        </Link>


        



      
    </div>
      </div>
  );
}

export default App;