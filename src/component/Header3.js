import React from "react";
import Menus from './Menus';
import { BellOutlined } from '@ant-design/icons';
import { LeftOutlined } from '@ant-design/icons';
import { Link} from "react-router-dom";
import { useHistory } from "react-router-dom";
import './header.css';

function App() {
  let history = useHistory();
  return (
    <div className="head" >
      <Link  to={{
      pathname: "Category",
      state: { auth:true}
    }}>

      <div onClick={() => history.goBack()}>
      <LeftOutlined />
      </div>
      </Link>
      <div>Browse by Category</div>
      <BellOutlined />
     
      
    </div>
  );
}

export default App;