
import React from "react";
import {Link} from "react-router-dom";
import './Register.css';
import './SignIn.css';
import Logo from '../component/Logo';
import Input from '../component/Input';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';
import {useState , useEffect} from "react";

function App(Props) {
  let history = useHistory();
  const {isAuth,setIsAuth}=Props;
  const [email,SetEmail]=useState("");
  const [flag,SetFlag]=useState("");
  const [password,SetPassword]=useState("");
  const [isSubmitted,SetSubmitted]=useState(false);
  
  
  useEffect(()=>{
    if(isSubmitted){
      // ValidationData(data);
      firebase.auth().signInWithEmailAndPassword(email, password)
      .then((user) => {
       console.log(user);
       setIsAuth(true);
       SetFlag(false);
       history.push("/Home",{auth:true}); 
      })
      .catch((error) => {
        SetFlag(true);
        console.log("not correct");
      });
    }
    return()=>{
      SetSubmitted(false)
      }
  },[isSubmitted]);

  const handleChangeEmail=(e)=>{
    const {value}=e.target;
    SetEmail(value);
    console.log(value);
  }
  const handleChangePassword=(e)=>{
    const {value}=e.target;
    SetPassword(value);
    console.log(value);
  }
  
     const handleSubmit=(e)=>{
      e.preventDefault();
      SetSubmitted(true);
      
    }
  return (
    <form onSubmit={handleSubmit}>

    <div className="registerBG">
    
    <div className="totals">

    <div className="pos">
    <div className="memberChef">
    <button className="member">Member</button>
    <button className="chef">Chef</button>
    </div>
    <Input type="email" value={email}  onChange={handleChangeEmail} Hight="49vh" text="Enter Your Email"/>
    <Input type="password"  value={password}  onChange={handleChangePassword} Hight="58vh" text="Enter Your Password"/>
    <button className="sign"> Sign In</button>
    {flag&&<label  className="errAgree">**Email or password is not correct ! ! **</label>}
    <div className="ee">
    <div className="whi">If you have not account! </div>
    
    <Link to="/register" className="si">Register</Link>
    <Logo/>
    </div>
    </div>
    </div>
    </div>
    </form>
  );
}

export default App;