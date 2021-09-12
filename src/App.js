import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import NavbarHOC from "./HOC/Layout/NavBar/NavbarHOC";
import Login from "./Pages/Sign-in/Login";
import Register from "./Pages/Sign-in/Register";
import Home from "./Pages/Home/Home";
import "./App.css";
import useToken from "./useToken";

const App = () => {
  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
  return (
    <NavbarHOC>
      <Switch>
        <Redirect exact from="/" to="/Home" />
        <Route path="/Login" component={Login} />
        <Route path="/Register" component={Register} />
        <Route path="/Home" component={Home} />
        <Route path="*" render={() => <p>NO TENGO NADA</p>} />
      </Switch>
    </NavbarHOC>
  );
};

export default App;
