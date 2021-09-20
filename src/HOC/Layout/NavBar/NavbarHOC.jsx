import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GoogleLogout } from 'react-google-login';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";
import LoginGoogle from "../../../Component/Google-Login/LoginGoogle";

const NavbarHOC = ({ children }) => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);

  const history = useHistory();
  const redirect = (route) => history.push(`/${route}`);


  const logOut = () => {
    localStorage.clear();
    history.push("/Home");
    
  };

  return (
    <>
      <header>
        <MDBNavbar expand="lg" light bgColor="warning">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Pexshop</MDBNavbarBrand>
            <MDBNavbarToggler
              type="button"
              data-target="#navbarColor02"
              aria-controls="navbarColor02"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setShowNavColorSecond(!showNavColorSecond)}
            >
              <MDBIcon icon="bars" fas />
            </MDBNavbarToggler>
            <div className="collapse navbar-collapse" id="navbarExample01">
              <MDBNavbarNav className="me-auto mb-2 mb-lg-0">
                <MDBNavbarItem className="active">
                  <MDBNavbarLink
                    aria-current="page"
                    onClick={() => redirect("Home")}
                  >
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  {localStorage.getItem("access_token") ? (
                    <LoginGoogle> login</LoginGoogle>
                  ) : null}
                </MDBNavbarItem>

                <MDBNavbarItem>
                  {!localStorage.getItem("access_token") ? (
                    <GoogleLogout
                    clientId="103162145817-vq4hiompm6h9k073nihc2a9foeft3e7b.apps.googleusercontent.com"
                    buttonText="Logout"
                    onLogoutSuccess={logOut}
                  >
                  </GoogleLogout>
                  ) : null}
                </MDBNavbarItem>
                <MDBNavbarItem>
                  {!localStorage.getItem("access_token") ? (
                    <MDBNavbarLink onClick={() => redirect("Register")}>
                      Registro Mascota
                    </MDBNavbarLink>
                  ) : null}
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={() => redirect("About")}>
                    Acerca de
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={() => redirect("MePets")}>
                    Mis Mascotas
                  </MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </div>
          </MDBContainer>
        </MDBNavbar>
      </header>
      {children}
    </>
  );
};

export default NavbarHOC;
