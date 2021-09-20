import React from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { loginAxios } from "../../services/loginService";

const LoginGoogle = () => {

  const history = useHistory();
  const responseGoogle = (response) => {
    const { email, googleId } = response.profileObj;

    const data = {
      email,
      googleId,
    };
    loginAxios(data).then((resp) => {
      if (resp.status === 200) {
       
        window.localStorage.setItem("access_token", resp.data.access_token);
        history.push("/MePets");
        window.location.reload(false);
      }else{
        
      }
      
    });
  };
  return (
    <>
    
      <GoogleLogin
        clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
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
