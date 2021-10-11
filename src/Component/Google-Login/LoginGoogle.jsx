import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { loginAxios } from "../../services/loginService";
import { registerUser } from "../../services/registerUser";
import {LoginBtnLink} from '../../HOC/Layout/NavBar/NavBarElements'
import GoogleIcon from '@mui/icons-material/Google';
import jwt_decode from "jwt-decode";


const LoginGoogle = () => {
  const history = useHistory();
  const responseGoogle = (response) => {
    const { email, googleId } = response.profileObj;
    console.log(response);
    const data = {
      email,
      googleId,
    };

    const register = {
      userName: email,
      password: googleId,
    };

    loginAxios(data)
      .then((resp) => {
        if (resp.status === 401) {
          registerUser(register);
        } else {
          var token = resp.data.access_token;
          var decoded = jwt_decode(token);
          
          window.localStorage.setItem("access_token", resp.data.access_token);
          window.localStorage.setItem("email", email);
          window.localStorage.setItem("authorities", decoded.authorities);
          const authoritie = window.localStorage.getItem("authorities")
          if(authoritie=== "update_pet,delete_pet,list_pets_by_user,create_pet"){
            history.push("/MePets");
          }else if(authoritie.includes("accept_pet")){
            history.push("/ApprovePet");
          }else if(authoritie.includes("schedule_pet")){
            history.push("/Classroom");
          }
          
          window.location.reload(false);
        }
      })
      .catch((error) => registerUser(register));
  };
  return (
    <>
      <GoogleLogin
        clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
        render={renderProps=>(
          <LoginBtnLink variant="outlined" startIcon={<GoogleIcon/>} onClick={renderProps.onClick} disabled={renderProps.disabled} >Login</LoginBtnLink>
        )}
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        isSignedIn={true}
      />
    </>
  );
};

export default LoginGoogle;
