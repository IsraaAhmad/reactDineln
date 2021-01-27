import React from "react";
import p5 from '../images/p5.png';
import s2 from '../images/s2.png';
import s3 from '../images/s3.png';
import './part5.css';
import { Rate } from 'antd';
import 'antd/dist/antd.css';
import { Button } from 'antd';
import { Carousel } from 'antd';
import 'antd/dist/antd.css';
import { Link} from "react-router-dom";



function App() {
  var sectionStyle1 = {
    backgroundImage: `url(${p5})`,

  };
  var sectionStyle2 = {
    backgroundImage: `url(${s2})`,

  };
  var sectionStyle3 = {
    backgroundImage: `url(${s3})`,

  };
      
      
  return (
      <div className="p5total">
    <div className="part5">
               <div className="t1" ></div>
               <div className="t2"></div>
               
               <div className="t3" style={sectionStyle1}>
                   <div className="browse">Browse categories you are interested in </div>
                   <div className="hig"></div>
                   <div >
                     <Link  to={{
                       pathname: "/Category",
                        state: {auth:true}
                          }}>
                     <Button type="primary" className="col">Browse</Button>
                     </Link>
                  </div>
               </div>  
              
              
    </div>
      </div>
  );
}

export default App;