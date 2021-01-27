import React from "react";
import Header2 from '../component/Header2';
import Cat from '../component/Cat';
import {Link} from "react-router-dom";
import Background1 from '../images/x1.png';
import Background2 from '../images/x2.png';
import Background3 from '../images/x3.png';
import Background4 from '../images/x4.png';
import Background5 from '../images/x5.png';
import Background6 from '../images/x6.png';
import Background7 from '../images/x7.png';
import Background8 from '../images/x8.png';
import {useLocation} from "react-router-dom";
import { useHistory } from "react-router-dom";




function App(Props) {
  let history = useHistory();
  let location = useLocation();
  let flag = true;
  const {state} = location;
  if(state === undefined){
    flag = false;
    history.replace("/")
  }
      
   

      
  return (
    <div className="comm1">
      {flag&&<div>

    <Header2/>
    <div className="type">

       
      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Breakfast",auth:true}
      }}>
    <Cat tit="Breakfast" par="734 RECIPES" img={Background1}  />  
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Pastries",auth:true}
      }}>
    <Cat tit="Pastries" par="356 RECIPES" img={Background2}/>
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Steak",auth:true}
      }}>
    <Cat tit="Steak" par="763 RECIPES" img={Background3}/>
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Coffee",auth:true}
      }}>
    <Cat tit="Coffee" par="983 RECIPES" img={Background4} />
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Vegetables",auth:true}
      }}>
    <Cat tit="Vegetables" par="343 RECIPES" img={Background5}/>
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Soups",auth:true}
      }}>
    <Cat tit="Soups" par="983 RECIPES" img={Background6} />
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Gluten Free",auth:true}
      }} >
    <Cat tit="Gluten Free" par="763 RECIPES" img={Background7}/>
      </Link>

      <Link to={{
        pathname: "/BrowsebyCategory",
        state: { Cate:"Cake",auth:true}
      }}>
    <Cat tit="Cake" par="983 RECIPES" img={Background8}/>
      </Link>

    </div>
    

    </div>}
      
    </div>
  );
}
function S(Props) {
  const {Category,setCate} = Props;
  setCate(Category);

  
return (

<div>

</div>
);
}
export default App;