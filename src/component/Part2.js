import React from "react";
import Rate from './rate';
import './rate.css';
import { Link} from "react-router-dom";


function App(Props) {
  
  return (
    <div className="part2">
      <Link to={{
  pathname: "/Details",
  state: { Cate:"Pastries",
Number:"3",auth:true}
}}>
      <Rate Cate="Pastries" Number="3"/>
        </Link>

        <Link to={{
  pathname: "/Details",
  state: { Cate:"Coffee",
Number:"0",auth:true}
}}>
      <Rate Cate="Coffee" Number="0"/>
        </Link>



        <Link to={{
  pathname: "/Details",
  state: { Cate:"Breakfast",
Number:"3",auth:true}
}} >
      <Rate Cate="Breakfast" Number="3"/>
        </Link>





        <Link to={{
  pathname: "/Details",
  state: { Cate:"Steak",
Number:"2",auth:true}
}}>
      <Rate Cate="Steak" Number="2"/>
        </Link>

        <Link to={{
  pathname: "/Details",
  state: { Cate:"Cake",
Number:"2",auth:true}
}}>
      <Rate Cate="Cake" Number="2"/>
        </Link>



        <Link to={{
  pathname: "/Details",
  state: { Cate:"Coffee",
Number:"3",auth:true}
}}>
      <Rate Cate="Coffee" Number="3"/>
        </Link>




        <Link to={{
  pathname: "/Details",
  state: { Cate:"Cake",
Number:"3",auth:true}
}}>
      <Rate Cate="Cake" Number="3"/>
        </Link>


      
    </div>
  );
}

export default App;