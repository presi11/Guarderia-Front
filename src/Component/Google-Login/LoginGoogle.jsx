import React, {useState} from "react";
import GoogleLogin from "react-google-login";
import { useHistory } from "react-router-dom";
import { loginAxios } from "../../services/loginService";

const LoginGoogle = () => {
  const [isLogged, setIsLogged] = useState(false)
  const history = useHistory();
  const responseGoogle = (response) => {
    const { email, googleId } = response.profileObj;
    console.log(response);
    const data = {
      email,
      googleId,
    };
    loginAxios(data).then((resp) => {
      if (resp.status === 200) {
        history.push("/MePets");
        setIsLogged(true)
      }else{
        setIsLogged(false)
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
