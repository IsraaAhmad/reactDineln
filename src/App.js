
import React from "react";
import SignIn from './pages/SignIn';
import Register from './pages/Register';
import Home from './pages/Home';
import Commerce from './pages/Commerce';
import BrowsebyCategory from './pages/BrowsebyCategory';
import Details from './pages/Details';
import Api from './component/Api';
import { useState } from "react";
import Data from './component/Data';


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [isAuth,setIsAuth]=useState(false);
 
  
  

  return (
    <div >
      {/* <Api/> */}
     <Router>
    <Switch>
      <Route exact path="/register">
        <Register setIsAuth={setIsAuth } isAuth={isAuth}/>
      </Route>
      <Route exact path="/Home">
        <Home />
      </Route>
      <Route exact path="/BrowsebyCategory">
        <BrowsebyCategory />
      </Route>
      <Route exact path="/Category">
        <Commerce  />
      </Route>
      <Route exact path="/Details">
        <Details />
      </Route>
      <Route  path="/">
        <SignIn isAuth={isAuth} setIsAuth={setIsAuth}/>
      </Route>
    </Switch>
    </Router> 
    </div>
  );
}

export default App;
