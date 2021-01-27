
import React from "react";
import { Menu, Dropdown } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { UnorderedListOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";
import firebase from 'firebase';
import {useHistory} from "react-router-dom";


function App() {
  const history=useHistory();
  function LogOut(){
      firebase.auth().signOut().then(() => {
          history.push("/");
      }).catch((error) => {
          // An error happened.
        });
  }
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to={{
                       pathname: "/Category",
                        state: {auth:true}
                          }}>
          Category
        </Link>
          
      </Menu.Item>
      <Menu.Item >
      <Link onClick={LogOut}>
          Log out
      </Link>
      </Menu.Item>
      
      
    </Menu>
  );
    return (
      <div >
         <Dropdown overlay={menu}>
    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
    <UnorderedListOutlined />
     <DownOutlined />
    </a>
  </Dropdown>
        
      </div>
    );
  }
  
  export default App;

