import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarHOC from "./HOC/Layout/NavBar/NavbarHOC";

/* import Footer from "./HOC/Layout/Footer/Footer";


import PetAdmin from "./Pages/Admin/Director/PetAdmin"; */
import Register from "./Pages/Pets/RegisterPet";
import Home from "./Pages/Home/Home";
import MePets from "./Pages/Pets/MePets";
import ApprovePet from "./Pages/Approve/ApprovePet";
import AsigClasroom from './Pages/Admin/Empleado/AsigClasroom'
import qr from './Assets/qrWeb.png'
import Fab from "@mui/material/Fab";
import "./App.css";

const App = () => {
  return (
    <NavbarHOC>
      {
        /*       
        
         
          <Route path="/Register" component={Register} />*/

        /*           />
          <Route path="/PetAdmin" component={PetAdmin} />
          
   
      </div> */

        <Switch>
          <Redirect exact from="/" to="/Home" />
          <Route path="/Home" component={Home} />
          <Route path="/MePets" component={MePets} />
          <Route path="/Register" component={Register} />
          <Route path="/ApprovePet" component={ApprovePet} />
          <Route path="/Classroom" component={AsigClasroom} />
          <Route path="*" render={() => <p>NO TENGO NADA</p>} />
        </Switch>
        
      }
      <Fab
          aria-label="add"
          sx={{
            backgroundColor: "#00c000",
            position: "fixed",
            top: "80%",
            right: "5%",
            webkitBoxShadow: "11px 14px 34px 2px rgba(153,153,153,0.71)",
            boxShadow: "11px 14px 34px 2px rgba(153,153,153,0.71)",
          }}
          onClick={() => {
            console.log("click");
          }}
        >
          <img src={qr} style={{width:"200px", height:"200px"}}></img>
        </Fab>
    </NavbarHOC>
    
  );
};

export default App;
