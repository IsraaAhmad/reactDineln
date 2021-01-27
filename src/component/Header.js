import React from "react";
import Menus from './Menus';
import { BellOutlined } from '@ant-design/icons';
import './header.css';

function App() {
  return (
    <div className="head" >
      <Menus/>
      <div>Home</div>
      <BellOutlined />
     
      
    </div>
  );
}

export default App;
