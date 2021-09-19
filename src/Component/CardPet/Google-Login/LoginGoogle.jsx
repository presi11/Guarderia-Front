import React from "react";
import GoogleLogin from "react-google-login";
import { loginAxios } from "../../../services/loginService";

const LoginGoogle = () => {
  const responseGoogle = (response) => {
    console.log(response);
    const { name, email, googleId } = response.profileObj;
    const { tokenId } = response;
    const { expires_in, expires_at} = response.tokenObj;
    const data = {
      name,
      email,
      googleId,
      tokenId,
      expires_at,
      expires_in
    };
    loginAxios(data).then(() => (resp) => console.log(resp));
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
