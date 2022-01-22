import React from "react";
import NavBar from "../Components/Nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Stack } from "react-bootstrap";
import "./styles.scss";
export const MainLayout = ({ children }) => {
  return (
    <Stack className="bg-black vh-100">
      <NavBar />
      <Container className="main-layout_container h-100 ">
        <Row className="h-100"> {children} </Row>
      </Container>
    </Stack>
  );
};
