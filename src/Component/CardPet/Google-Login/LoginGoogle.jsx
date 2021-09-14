import React from 'react';
import GoogleLogin from 'react-google-login';


const LoginGoogle = () =>{

    const responseGoogle=(response)=>{
        console.log(response);

    }



    return(
        <GoogleLogin
    clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
  />
    )

}

export default LoginGoogle;
