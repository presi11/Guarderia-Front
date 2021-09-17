import React from "react";
import GoogleLogin from "react-google-login";
import { loginAxios } from "../../services/loginService";

const LoginGoogle = () => {
  const responseGoogle = (response) => {
    const { name, email, googleId } = response.profileObj;
    const { tokenId } = response;
    const user = {
      name,
      email,
      googleId,
      tokenId,
    };
    loginAxios(user).then(() => (resp) => console.log(resp));
  };

  return (
    <GoogleLogin
      clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
      buttonText="Login"
      onSuccess={responseGoogle}
      onFailure={responseGoogle}
      cookiePolicy={"single_host_origin"}
    />
  );
};

export default LoginGoogle;
