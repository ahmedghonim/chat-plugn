import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";
const NavBar = (props) => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/" className="nav-item nav-link">الرئيسية</NavLink>
            <NavLink to="/about-us" className="nav-item nav-link">من نحن</NavLink>
            <NavLink to="/chat" className="nav-item nav-link">المحادثة</NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/home">الشعار</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavBar;
