import React, { Fragment, useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from "react-google-login";
import LoginGoogle from "../../../Component/Google-Login/LoginGoogle";
import {
  Bars,
  NavContainer,
  NavBtn,
  LoginBtnLink,
  NavLink,
  NavMenu,
} from "./NavBarElements";
import SideBar from "../SideBar/SideBar";

const NavbarHOC = ({ children }) => {
  

  //enum para las authorities
 /* enum OrderStatus {
    CONFIRMADO,
    EN_PREPARACION,
    PREPARADO,
    ENTREGADO,
    ANULADO
}/*



  const history = useHistory();
  /* const redirect = (route) => history.push(`/${route}`); */
  const [isOpen, setIsOpen] = useState(false);
  const isOpenClick = () => {
    setIsOpen(!isOpen);
  };

    const authoritie = window.localStorage.getItem("authorities")
  
  const logOut = () => {
    localStorage.clear();
    history.push("/Home");
    window.location.reload(false);
  };

  return (
    <>
      <NavContainer>
        <NavLink to="/home">
          <h1>Pets Spa</h1>
        </NavLink>
        <Bars onClick={() => isOpenClick()} />
        <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
        <NavMenu>
          <NavLink to="/home">Inicio</NavLink>
          {localStorage.getItem("access_token") ? (
            <Fragment>
              {(authoritie.includes("schedule_pet") ||  authoritie.includes("create pet")) && (
              <NavLink to="/Register">Registrar</NavLink>
              )}
              {authoritie === "create pet"  && (
              <NavLink to="/MePets">Mis Mascotas</NavLink>
              )}
               {authoritie === "create pet"  && (
              <NavLink to="/ApprovePet">Aprobar</NavLink>
              )}
              {authoritie.includes("schedule_pet")  && (
              <NavLink to="/Classroom">Aula</NavLink>
              )}
            </Fragment>
          ) : null}
        </NavMenu>
        <NavBtn>
          {!localStorage.getItem("access_token") ? (
            <LoginGoogle> login</LoginGoogle>
          ) : null}
          {localStorage.getItem("access_token") ? (
            <GoogleLogout
              clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
              render={(renderProps) => (
                <LoginBtnLink
                  variant="outlined"
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                >
                  LogOut
                </LoginBtnLink>
              )}
              buttonText="Logout"
              onLogoutSuccess={logOut}
            ></GoogleLogout>
          ) : null}
        </NavBtn>
      </NavContainer>
      {children}
    </>
  );
};

export default NavbarHOC;
