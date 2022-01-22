import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./styles.scss";
const NavBar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <NavLink to="/">
              <Nav.Link href="/">الرئيسية</Nav.Link>
            </NavLink>
            <NavLink to="/about-us">
              <Nav.Link href="/about-us">من نحن</Nav.Link>
            </NavLink>
            <NavLink to="/chat">
              <Nav.Link href="/chat">المحادثة</Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home">الشعار</Navbar.Brand>
      </Container>
    </Navbar>
  );
};
export default NavBar;
