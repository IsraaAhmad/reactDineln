import React from "react";
import { MailOutlined} from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './header.css';

function App(Props) {
  const {tit,Cate} = Props;
  let history = useHistory();
  return (
    <div className="head" >
      <Link to={{
    pathname: "/BrowsebyCategory",
    state: {Cate:Cate,auth:true}
  }}>

      <div onClick={() => history.goBack()}>
      <LeftOutlined />
      </div>

      </Link>
      <div>{tit}</div>
      <MailOutlined /> 
     
      
    </div>
  );
}

export default App;