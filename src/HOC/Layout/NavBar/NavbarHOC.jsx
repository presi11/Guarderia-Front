import React from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import LoginGoogle from "../../../Component/Google-Login/LoginGoogle";

const NavbarHOC = ({ children }) => {


  const history = useHistory();
  const redirect = (route) => history.push(`/${route}`);

  const logOut = () => {
    localStorage.clear();
    history.push("/Home");
    window.location.reload(false);
  };

  return (
    <>
    <AppBar position="static">
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
     
        </IconButton>
        {!localStorage.getItem("access_token") ? (
          <LoginGoogle> login</LoginGoogle>
        ) : null}
        {localStorage.getItem("access_token") ? (
          <GoogleLogout
            clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
            buttonText="Logout"
            onLogoutSuccess={logOut}
          ></GoogleLogout>
        ) : null}
         {localStorage.getItem("access_token") ? (
          <div>
            <IconButton color="inherit" onClick={() => redirect("Home")}>
              Home
            </IconButton>
            <IconButton color="inherit" onClick={() => redirect("Register")}>
              Registrar
            </IconButton>
            <IconButton color="inherit" onClick={() => redirect("MePets")}>
              Mis mascotas
            </IconButton>
          </div>
        ): null}
      </Toolbar>
    </AppBar>
     {children}
     </>
  );
};

export default NavbarHOC;
