import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarHOC from "./HOC/Layout/NavBar/NavbarHOC";
import Footer from "./HOC/Layout/Footer/Footer";
import Register from "./Pages/Pets/RegisterPet";
import Home from "./Pages/Home/Home";
import MePets from "./Pages/Pets/MePets";
import "./App.css";


const App = () => {

  return (
    <NavbarHOC>
      
      <Switch>
        <Redirect exact from="/" to="/Home" />
        <Route path="/Register" component={Register} />
        <Route path="/Home" component={Home} />
        <Route path="/MePets" component={MePets} />
        <Route path="*" render={() => <p>NO TENGO NADA</p>} />
        
      </Switch>
      <Footer>
        </Footer>
    </NavbarHOC>
    
  );
};

export default App;
