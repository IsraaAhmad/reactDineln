
import React from "react";
import {Link} from "react-router-dom";
import './Register.css';
import Logo from '../component/Logo';
import Input from '../component/Input';
import { LeftOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import firebase from 'firebase';

import * as yup from 'yup';
import {useState} from "react";
import {useEffect} from "react";


let schema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required('Password is required').min(8),
    RepeatedPassword: yup.string()
       .oneOf([yup.ref('password'), null], 'Passwords must match'),
       
      
   
  });


function App(Props) {
  let history = useHistory();
  const {isAuth,setIsAuth}=Props;
  const [email,SetEmail]=useState("");
  const [password,SetPassword]=useState("");
  const [RepeatedPassword,SetRepeatedPassword]=useState("");
  const [isSubmitted,SetSubmitted]=useState(false);
  const [errors,SetErrors]=useState([" "," "," "]);
  const [isValid,SetIsValid]=useState(false);

  const data={email,password,RepeatedPassword};

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
  const handleChangeRPassword=(e)=>{
    const {value}=e.target;
    SetRepeatedPassword(value);
    console.log(value);
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    SetSubmitted(true);
    const x=ValidationData(data);
console.log(x);

console.log(isValid);
console.log(errors);
if(isValid){
  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((user) => {
    console.log(user);
    setIsAuth(true);
    history.replace("/Home",{auth:true});      
  })
  .catch((error) => {
  console.log(error);

  });}
  }
  
  useEffect(()=>{
    if(isSubmitted){
      ValidationData(data);
    }
    

  },[email,password,RepeatedPassword,isValid]);
  const ValidationData=(data)=>{
     
    schema.validate(data,{abortEarly: false}).then((valid)=> {
      if(valid){
      
                  SetErrors([" "," "," "]);
                  
                  SetIsValid(true);
                          
       }

         
      })
      .catch( (err) =>{
        const newError=err.inner.reduce((acc,curr)=>{
          acc[curr.path]=curr.message;
          return acc;},{});
          SetErrors(newError);
          console.dir(err);
          console.log(errors);
          SetIsValid(false);

          
         
          
     
      });
    };

  return (
    <form onSubmit={handleSubmit}>

    <div className="registerBG">
    <div onClick={() => history.goBack()}>
      <LeftOutlined className="backto" style={{fontSize: '30px', color:"#FFFFFF" }}/>
      </div>
    
    <Logo/>
    <div className="totals">

    <div className="pos"></div>
    <div className="memberChef">
    <button className="member">Member</button>
    <button className="chef">Chef</button>
    </div>
    <Input type="email" value={email}  onChange={handleChangeEmail} Hight="49vh"  text="Enter Your Email"/>
    {errors.email&& <label className="testing1" htmlFor="email"  >{errors.email}</label>}
    <Input type="password"  value={password}  onChange={handleChangePassword} Hight="58vh" text="Enter Your Password"/>
    {errors.password&& <label className="testing1" htmlFor="email" htmlFor="CreatePassword"  >{errors.password}</label>}
    <Input type="password"  value={RepeatedPassword}  onChange={handleChangeRPassword} Hight="67vh" text="Repeat Your Password"/>
    {errors.RepeatedPassword&& <label className="testing1" htmlFor="RepeatPassword"  >{errors.RepeatedPassword}</label>}
    <button  type="submit" className="reg">Register</button>
    </div>
    </div>
    
    
    </form>
  );
}

export default App;