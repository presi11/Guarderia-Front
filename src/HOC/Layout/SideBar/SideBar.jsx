import React from "react";
import {
  SideBarContainer,
  CloseIconContainer,
  Icon,
  SideBarWrapper,
  SideBarMenu,
  SideBarLink,
  SideBtnWrap,
  LoginBtnLink,
} from "./SideBarElements";
import LoginGoogle from "../../../Component/Google-Login/LoginGoogle";
import { GoogleLogout } from "react-google-login";
import { useHistory } from "react-router-dom";

const SideBar = ({ isOpen, setIsOpen }) => {
  const history = useHistory();
  const closeSideBarHandle = () => {
    setIsOpen(!isOpen);
  };

  const logOut = () => {
    localStorage.clear();
    history.push("/Home");
    window.location.reload(false);
  };

  return (
    <SideBarContainer isopen={isOpen ? 1 : 0}>
      <Icon>
        <CloseIconContainer onClick={() => closeSideBarHandle()} />
      </Icon>
      <SideBarWrapper>
        <SideBarMenu>
          <SideBarLink to="Home" onClick={() => closeSideBarHandle()}>
            Inicio
          </SideBarLink>
          <SideBarLink to="Register" onClick={() => closeSideBarHandle()}>
            Registrar
          </SideBarLink>
          <SideBarLink to="MePets" onClick={() => closeSideBarHandle()}>
            Mis Mascotas
          </SideBarLink>
        </SideBarMenu>
        <SideBtnWrap>
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
        </SideBtnWrap>
      </SideBarWrapper>
    </SideBarContainer>
  );
};

export default SideBar;
