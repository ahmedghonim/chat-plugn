import React from "react";
import NavBar from "../Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Stack } from "react-bootstrap";
import "./styles.scss";
export const MainLayout = ({ children }) => {
  return (
    <Stack className="h-100 min-vh-100 min-vh-100 bg-black ">
      <NavBar />
      <Container className="main-layout_container  h-100 ">
        <Row className="h-100 bg-black "> {children} </Row>
      </Container>
    </Stack>
  );
};
