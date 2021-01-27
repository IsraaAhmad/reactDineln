import React from "react";
import Menus from './Menus';
import { BellOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import {Link} from "react-router-dom";

import './header.css';

function App() {
  let history = useHistory();

  return (
    <div className="head" >
      <Link to={{
    pathname: "/Home",
    state: { auth:true}
  }}>
      <LeftOutlined />
      </Link>
      
      <div>Categories</div>
      <BellOutlined />
     
      
    </div>
  );
}

export default App;