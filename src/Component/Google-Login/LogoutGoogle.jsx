import React from "react";
import { GoogleLogout } from "react-google-login";




const LogoutGoogle = ({logout}) => {


  <GoogleLogout
    clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
    buttonText="Logout"
    onLogoutSuccess={logout}
  ></GoogleLogout>;
  
};

export default LogoutGoogle;
