import React, { useState } from "react";
import { useHistory } from "react-router-dom";

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
    
    window.location.reload(false);
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
                  {!localStorage.getItem("access_token") ? (
                    <LoginGoogle> login</LoginGoogle>
                  ) : null}
                </MDBNavbarItem>

                <MDBNavbarItem>
                  {localStorage.getItem("access_token") ? (
                    <MDBNavbarLink onClick={() => logOut()}>
                      Cerrar sesión
                    </MDBNavbarLink>
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
                  <MDBNavbarLink onClick={() => redirect("PetAdmin")}>
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
