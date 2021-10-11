import React, { Fragment } from "react";
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

  const authoritie = window.localStorage.getItem("authorities");
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
          {localStorage.getItem("access_token") ? (
            <Fragment>
              {(authoritie.includes("create pet")) && (
              <SideBarLink to="Register" onClick={() => closeSideBarHandle()}>
                Registrar
              </SideBarLink>
               )}
               {authoritie === "update_pet,delete_pet,list_pets_by_user,create_pet"  && (
              <SideBarLink to="MePets" onClick={() => closeSideBarHandle()}>
                Mis Mascotas
              </SideBarLink>
              )}
                {authoritie.includes("accept_pet")   && (
              <SideBarLink to="ApprovePet" onClick={() => closeSideBarHandle()}>
                Aprobar
              </SideBarLink>
              )}
               {authoritie.includes("schedule_pet")  && (
              <SideBarLink to="Classroom" onClick={() => closeSideBarHandle()}>
                Agenda
              </SideBarLink>
              )}
            </Fragment>
          ) : null}
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
