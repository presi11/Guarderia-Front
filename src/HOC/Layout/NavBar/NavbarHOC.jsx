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

const NavbarHOC = ({ children }) => {
  const [showNavColorSecond, setShowNavColorSecond] = useState(false);
  const history = useHistory();
  const redirect = (route) => history.push(`/${route}`);
  
  const logOut = () => {
    localStorage.clear();
    history.push("/Register");
  };

  return (
    <>
      <header>
        <MDBNavbar expand="lg" light bgColor="warning">
          <MDBContainer fluid>
            <MDBNavbarBrand href="#">Navbar</MDBNavbarBrand>
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
                  {!localStorage.getItem("token") ? (
                    <MDBNavbarLink onClick={() => redirect("Login")}>
                      Login
                    </MDBNavbarLink>
                  ) : null}
                </MDBNavbarItem>

                <MDBNavbarItem>
                  {localStorage.getItem("token") ? (
                    <MDBNavbarLink onClick={() => logOut()}>
                      Cerrar sesión
                    </MDBNavbarLink>
                  ) : null}
                </MDBNavbarItem>
                <MDBNavbarItem>
                  {!localStorage.getItem("token") ? (
                    <MDBNavbarLink onClick={() => redirect("Register")}>
                      Registro
                    </MDBNavbarLink>
                  ) : null}
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink onClick={() => redirect("About")}>
                    About
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
