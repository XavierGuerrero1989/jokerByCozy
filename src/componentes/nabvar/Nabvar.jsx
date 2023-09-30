import React, { useState } from "react";
import { Link } from "react-router-dom";
import logoimg from "../../imgs/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
         <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <div>
                <Link to={"/"}>
                  <img src={logoimg} alt="logo" className="navbar__logo" />
                </Link>
              </div>
        <Navbar.Collapse id="basic-navbar-nav navbar__responsive">
          <div className="d-flex justify-content-center align-items-center w-100 navbar__ctn">
           
            <div className="d-flex justify-content-start">
              
            </div>
            <div className="d-flex justify-content-center navbar__ctn2">
              
              <div className="col-md-2 text-center">
                <Link to="/" className="navbar__link">
                  Home
                </Link>
              </div>
              <div className="col-md-2 text-center navbar__item">
                <a href="#Nosotros" className="navbar__link">
                  Nosotros
                </a>
              </div>
              <div className="col-md-2 text-center navbar__item">
                <a href="#Servicios" className="navbar__link">
                  Servicios
                </a>
              </div>
              <div className="text-center navbar__item">
                <a href="#Imagenes" className="navbar__link">
                  Galeria
                </a>
              </div>
              <div className="text-center">
                <a href="#Contacto" className="navbar__link">
                  Contacto
                </a>
              </div>
            </div>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
